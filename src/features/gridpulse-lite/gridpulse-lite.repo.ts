import {
  GameRuntimeState,
  INITIAL_RUNTIME_STATE,
} from "../../game/game-runtime";

const STORAGE_KEY = "gridpulse-lite-preferences";

export interface Preferences {
  soundEnabled: boolean;
  hapticsEnabled: boolean;
  displayHighContrast: boolean;
}

export const DEFAULT_PREFERENCES: Preferences = {
  soundEnabled: true,
  hapticsEnabled: true,
  displayHighContrast: false,
};

export function loadPreferences(): Preferences {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PREFERENCES };
    const parsed = JSON.parse(raw);
    return {
      soundEnabled: Boolean(parsed.soundEnabled),
      hapticsEnabled: Boolean(parsed.hapticsEnabled),
      displayHighContrast: Boolean(parsed.displayHighContrast),
    };
  } catch {
    return { ...DEFAULT_PREFERENCES };
  }
}

export function savePreferences(prefs: Preferences): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // ignore
  }
}

export function loadHighScore(): number {
  try {
    const raw = localStorage.getItem("gridpulse-lite-highscore");
    if (!raw) return 0;
    const n = Number(raw);
    return Number.isFinite(n) ? n : 0;
  } catch {
    return 0;
  }
}

export function saveHighScore(score: number): void {
  try {
    const current = loadHighScore();
    if (score > current) {
      localStorage.setItem("gridpulse-lite-highscore", String(score));
    }
  } catch {
    // ignore
  }
}
