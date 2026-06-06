export type Lane = 0 | 1 | 2 | 3;

export interface Obstacle {
  id: string;
  lane: Lane;
  position: number;
}

export interface Shard {
  id: string;
  lane: Lane;
  position: number;
}

export interface GameRuntimeState {
  playerLane: Lane;
  playerPosition: number;
  obstacles: Obstacle[];
  shards: Shard[];
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
  gameOver: boolean;
  started: boolean;
  tick: number;
}

export type GameRuntimeAction =
  | { type: "TICK"; delta: number }
  | { type: "MOVE_LEFT" }
  | { type: "MOVE_RIGHT" }
  | { type: "PAUSE" }
  | { type: "RESUME" }
  | { type: "START" }
  | { type: "RESTART" }
  | { type: "COLLECT_SHARD"; id: string }
  | { type: "HIT_OBSTACLE"; id: string };

const LANES: Lane[] = [0, 1, 2, 3];

function randLane(): Lane {
  return LANES[Math.floor(Math.random() * LANES.length)];
}

function makeId(prefix: string, tick: number): string {
  return `${prefix}-${tick}-${Math.random().toString(36).slice(2, 7)}`;
}

export const INITIAL_RUNTIME_STATE: GameRuntimeState = {
  playerLane: 1,
  playerPosition: 0,
  obstacles: [],
  shards: [],
  score: 0,
  energy: 100,
  lives: 3,
  paused: false,
  gameOver: false,
  started: false,
  tick: 0,
};

export function gameRuntimeReducer(
  state: GameRuntimeState,
  action: GameRuntimeAction
): GameRuntimeState {
  switch (action.type) {
    case "START": {
      if (state.started && !state.gameOver) return state;
      return {
        ...INITIAL_RUNTIME_STATE,
        started: true,
        paused: false,
        gameOver: false,
      };
    }
    case "RESTART": {
      return {
        ...INITIAL_RUNTIME_STATE,
        started: true,
        paused: false,
        gameOver: false,
      };
    }
    case "PAUSE": {
      if (!state.started || state.gameOver) return state;
      return { ...state, paused: true };
    }
    case "RESUME": {
      if (!state.started || state.gameOver) return state;
      return { ...state, paused: false };
    }
    case "MOVE_LEFT": {
      if (!state.started || state.paused || state.gameOver) return state;
      const idx = LANES.indexOf(state.playerLane);
      if (idx <= 0) return state;
      return { ...state, playerLane: LANES[idx - 1] };
    }
    case "MOVE_RIGHT": {
      if (!state.started || state.paused || state.gameOver) return state;
      const idx = LANES.indexOf(state.playerLane);
      if (idx >= LANES.length - 1) return state;
      return { ...state, playerLane: LANES[idx + 1] };
    }
    case "TICK": {
      if (!state.started || state.paused || state.gameOver) return state;

      const nextTick = state.tick + 1;
      const speed = 2 + Math.floor(state.score / 500) * 0.5;
      const clampedDelta = Math.min(action.delta, 100);
      const advance = clampedDelta * 0.06 * speed;

      let obstacles = state.obstacles
        .map((o) => ({ ...o, position: o.position + advance }))
        .filter((o) => o.position < 120);

      let shards = state.shards
        .map((s) => ({ ...s, position: s.position + advance }))
        .filter((s) => s.position < 120);

      // Spawn
      if (nextTick % 40 === 0) {
        obstacles.push({
          id: makeId("obs", nextTick),
          lane: randLane(),
          position: -10,
        });
      }
      if (nextTick % 25 === 0) {
        shards.push({
          id: makeId("shard", nextTick),
          lane: randLane(),
          position: -10,
        });
      }

      let score = state.score + Math.floor(advance);
      let energy = state.energy;
      let lives = state.lives;
      let gameOver: boolean = state.gameOver;

      // Collision: obstacle
      const remainingObstacles: Obstacle[] = [];
      for (const o of obstacles) {
        if (
          o.lane === state.playerLane &&
          o.position >= state.playerPosition - 4 &&
          o.position <= state.playerPosition + 4
        ) {
          lives -= 1;
          energy = Math.max(0, energy - 20);
          if (lives <= 0) {
            gameOver = true;
          }
        } else {
          remainingObstacles.push(o);
        }
      }
      obstacles = remainingObstacles;

      // Collision: shard
      const remainingShards: Shard[] = [];
      for (const s of shards) {
        if (
          s.lane === state.playerLane &&
          s.position >= state.playerPosition - 4 &&
          s.position <= state.playerPosition + 4
        ) {
          score += 50;
          energy = Math.min(100, energy + 10);
        } else {
          remainingShards.push(s);
        }
      }
      shards = remainingShards;

      return {
        ...state,
        tick: nextTick,
        obstacles,
        shards,
        score,
        energy,
        lives,
        gameOver,
      };
    }
    case "COLLECT_SHARD": {
      const shard = state.shards.find((s) => s.id === action.id);
      if (!shard) return state;
      return {
        ...state,
        shards: state.shards.filter((s) => s.id !== action.id),
        score: state.score + 50,
        energy: Math.min(100, state.energy + 10),
      };
    }
    case "HIT_OBSTACLE": {
      const obs = state.obstacles.find((o) => o.id === action.id);
      if (!obs) return state;
      const lives = state.lives - 1;
      return {
        ...state,
        obstacles: state.obstacles.filter((o) => o.id !== action.id),
        lives,
        energy: Math.max(0, state.energy - 20),
        gameOver: lives <= 0,
      };
    }
    default:
      return state;
  }
}

export interface GameRuntime {
  getState(): GameRuntimeState;
  dispatch(action: GameRuntimeAction): void;
  subscribe(cb: (state: GameRuntimeState) => void): () => void;
  start(): void;
  stop(): void;
}

export function createGameRuntime(
  initial: GameRuntimeState = INITIAL_RUNTIME_STATE
): GameRuntime {
  let state = { ...initial };
  const listeners = new Set<(state: GameRuntimeState) => void>();
  let handle: number | null = null;
  let lastTime = 0;

  function notify() {
    listeners.forEach((cb) => cb(state));
  }

  function dispatch(action: GameRuntimeAction) {
    state = gameRuntimeReducer(state, action);
    notify();
    if (state.started && !state.paused && !state.gameOver && handle === null) {
      lastTime = 0;
      handle = requestAnimationFrame(tick);
    }
  }

  function tick(now: number) {
    if (!lastTime) lastTime = now;
    const delta = now - lastTime;
    lastTime = now;
    dispatch({ type: "TICK", delta });
    if (state.started && !state.paused && !state.gameOver) {
      handle = requestAnimationFrame(tick);
    } else {
      handle = null;
    }
  }

  function start() {
    if (handle !== null) return;
    lastTime = 0;
    handle = requestAnimationFrame(tick);
  }

  function stop() {
    if (handle !== null) {
      cancelAnimationFrame(handle);
      handle = null;
    }
  }

  return {
    getState: () => state,
    dispatch,
    subscribe: (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    start,
    stop,
  };
}
