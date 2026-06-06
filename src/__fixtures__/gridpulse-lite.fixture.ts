import {
  GameRuntimeState,
  Obstacle,
  Shard,
} from "../game/game-runtime";

export function makeObstacle(overrides?: Partial<Obstacle>): Obstacle {
  return {
    id: "obs-test-1",
    lane: 1,
    position: 20,
    ...overrides,
  };
}

export function makeShard(overrides?: Partial<Shard>): Shard {
  return {
    id: "shard-test-1",
    lane: 2,
    position: 30,
    ...overrides,
  };
}

export function makeRuntimeState(
  overrides?: Partial<GameRuntimeState>
): GameRuntimeState {
  return {
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
    ...overrides,
  };
}
