import { useMemo } from "react";
import {
  GameplayGridpulseLite,
  GameplayGridpulseLiteActionId,
} from "./screens/GameplayGridpulseLite";
import {
  GameSettingsGridpulseLite,
  GameSettingsGridpulseLiteActionId,
} from "./screens/GameSettingsGridpulseLite";
import { useAppState, dispatchApp } from "./features/gridpulse-lite/gridpulse-lite.store";

export default function App() {
  const { screen, runtime } = useAppState();

  const gameplayActions: Partial<Record<GameplayGridpulseLiteActionId, () => void>> =
    useMemo(
      () => ({
        "start-game-3": () => {
          dispatchApp({ type: "RUNTIME", action: { type: "START" } });
        },
        "pause-1": () => {
          if (runtime.paused) {
            dispatchApp({ type: "RUNTIME", action: { type: "RESUME" } });
          } else {
            dispatchApp({ type: "RUNTIME", action: { type: "PAUSE" } });
          }
        },
        "settings-2": () => {
          dispatchApp({ type: "NAVIGATE", screen: "settings" });
        },
        "play-1": () => {
          dispatchApp({ type: "NAVIGATE", screen: "gameplay" });
        },
        "play-5": () => {
          dispatchApp({ type: "NAVIGATE", screen: "gameplay" });
        },
        "rankings-2": () => {},
        "rankings-6": () => {},
        "upgrades-3": () => {},
        "upgrades-7": () => {},
        "profile-4": () => {},
        "profile-8": () => {},
      }),
      [runtime.paused]
    );

  const settingsActions: Partial<Record<GameSettingsGridpulseLiteActionId, () => void>> =
    useMemo(
      () => ({
        "return-2": () => {
          dispatchApp({ type: "NAVIGATE", screen: "gameplay" });
        },
        "cancel-3": () => {
          dispatchApp({ type: "NAVIGATE", screen: "gameplay" });
        },
        "save-preferences-4": () => {
          dispatchApp({ type: "NAVIGATE", screen: "gameplay" });
        },
        "upgrade-to-pro-1": () => {},
        "game-mode-1": () => {},
        "settings-2": () => {},
        "sound-3": () => {},
        "haptics-4": () => {},
        "display-5": () => {},
        "support-6": () => {},
      }),
      []
    );

  return (
    <div
      data-setfarm-root="baseline"
      data-testid="setfarm-app-root"
      className="relative h-screen w-screen overflow-hidden"
    >
      {screen === "gameplay" && (
        <GameplayGridpulseLite actions={gameplayActions} runtime={runtime} />
      )}
      {screen === "settings" && (
        <GameSettingsGridpulseLite actions={settingsActions} />
      )}
    </div>
  );
}
