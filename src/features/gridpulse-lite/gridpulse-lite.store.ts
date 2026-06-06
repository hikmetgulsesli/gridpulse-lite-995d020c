import { useSyncExternalStore } from "react";
import {
  createGameRuntime,
  GameRuntimeState,
  GameRuntimeAction,
  INITIAL_RUNTIME_STATE,
} from "../../game/game-runtime";

export type AppScreen = "gameplay" | "settings";

export interface AppState {
  screen: AppScreen;
  runtime: GameRuntimeState;
}

export type AppAction =
  | { type: "NAVIGATE"; screen: AppScreen }
  | { type: "RUNTIME"; action: GameRuntimeAction };

const runtime = createGameRuntime(INITIAL_RUNTIME_STATE);

let appState: AppState = {
  screen: "gameplay",
  runtime: runtime.getState(),
};

const appListeners = new Set<() => void>();

function notifyApp() {
  appListeners.forEach((cb) => cb());
}

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "NAVIGATE":
      return { ...state, screen: action.screen };
    case "RUNTIME": {
      runtime.dispatch(action.action);
      return { ...state, runtime: runtime.getState() };
    }
    default:
      return state;
  }
}

export function dispatchApp(action: AppAction) {
  appState = appReducer(appState, action);
  notifyApp();
}

function getAppState() {
  return appState;
}

function subscribeApp(callback: () => void) {
  appListeners.add(callback);
  return () => appListeners.delete(callback);
}

export function useAppState(): AppState {
  return useSyncExternalStore(subscribeApp, getAppState);
}

// Subscribe runtime changes into app state
runtime.subscribe((runtimeState) => {
  appState = { ...appState, runtime: runtimeState };
  notifyApp();
});

// Start the game loop so the runtime ticks
runtime.start();

// Expose for tests and external access
(globalThis as any).app = {
  get state() {
    return appState;
  },
  dispatch: dispatchApp,
  runtime,
};
