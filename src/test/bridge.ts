import {
  gameRuntimeReducer,
  INITIAL_RUNTIME_STATE,
  GameRuntimeState,
  GameRuntimeAction,
  createGameRuntime,
} from "../game/game-runtime";

export { gameRuntimeReducer, INITIAL_RUNTIME_STATE, createGameRuntime };
export type { GameRuntimeState, GameRuntimeAction };

export function reduceActions(
  state: GameRuntimeState,
  actions: GameRuntimeAction[]
): GameRuntimeState {
  return actions.reduce((s, a) => gameRuntimeReducer(s, a), state);
}

export function tickN(
  state: GameRuntimeState,
  n: number,
  delta = 16
): GameRuntimeState {
  let s = state;
  for (let i = 0; i < n; i++) {
    s = gameRuntimeReducer(s, { type: "TICK", delta });
  }
  return s;
}
