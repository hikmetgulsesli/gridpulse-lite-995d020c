// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - GridPulse Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Bolt, Gamepad2, Heart, Pause, Play, Settings, Trophy, User } from "lucide-react";


export type GameplayGridpulseLiteActionId = "pause-1" | "settings-2" | "start-game-3" | "play-1" | "rankings-2" | "upgrades-3" | "profile-4" | "play-5" | "rankings-6" | "upgrades-7" | "profile-8";

export interface GameplayGridpulseLiteProps {
  actions?: Partial<Record<GameplayGridpulseLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplayGridpulseLite({ actions, runtime }: GameplayGridpulseLiteProps) {
  void runtime;
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop py-xs bg-surface/80 backdrop-blur-md border-b border-primary-container/20 shadow-[0_0_15px_rgba(0,243,255,0.3)] hidden md:flex">
      <div className="font-display-lg text-display-lg text-primary-container tracking-tighter">
                  GRIDPULSE LITE
              </div>
      <nav className="flex gap-sm items-center">
      <a className="font-headline-md text-headline-md text-primary-container hover:text-primary-fixed-dim transition-colors active:scale-95 duration-100" href="#" data-action-id="play-1" onClick={(event) => { event.preventDefault(); actions?.["play-1"]?.(); }}>Play</a>
      <a className="font-headline-md text-headline-md text-on-surface-variant hover:text-primary-fixed-dim transition-colors active:scale-95 duration-100" href="#" data-action-id="rankings-2" onClick={(event) => { event.preventDefault(); actions?.["rankings-2"]?.(); }}>Rankings</a>
      <a className="font-headline-md text-headline-md text-on-surface-variant hover:text-primary-fixed-dim transition-colors active:scale-95 duration-100" href="#" data-action-id="upgrades-3" onClick={(event) => { event.preventDefault(); actions?.["upgrades-3"]?.(); }}>Upgrades</a>
      <a className="font-headline-md text-headline-md text-on-surface-variant hover:text-primary-fixed-dim transition-colors active:scale-95 duration-100" href="#" data-action-id="profile-4" onClick={(event) => { event.preventDefault(); actions?.["profile-4"]?.(); }}>Profile</a>
      </nav>
      <div className="flex gap-sm">
      <button className="text-primary-container hover:text-primary-fixed-dim transition-colors active:scale-95 duration-100" type="button" aria-label="Pause" data-action-id="pause-1" onClick={actions?.["pause-1"]}>
      <Pause  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="text-primary-container hover:text-primary-fixed-dim transition-colors active:scale-95 duration-100" type="button" aria-label="Settings" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* SideNavBar (Hidden on this view but structurally required by context, suppressing here due to "Task-Focused/Gameplay" intent) */}
      {/* Gameplay HUD Area */}
      <main className="h-full w-full pt-[80px] md:pt-[100px] flex flex-col items-center justify-center relative">
      {/* Top HUD Elements */}
      <div className="absolute top-[80px] md:top-[120px] left-0 w-full flex justify-between px-margin-desktop z-40 pointer-events-none">
      {/* Score & Level */}
      <div className="flex gap-md">
      <div className="bg-surface-container-highest/80 backdrop-blur-md border border-primary-container/30 rounded-DEFAULT px-sm py-xs flex flex-col items-start glow-border">
      <span className="font-label-caps text-label-caps text-on-surface-variant">SCORE</span>
      <span className="font-score-readout text-score-readout text-primary-container">12,450</span>
      </div>
      <div className="bg-surface-container-highest/80 backdrop-blur-md border border-primary-container/30 rounded-DEFAULT px-sm py-xs flex flex-col items-start glow-border">
      <span className="font-label-caps text-label-caps text-on-surface-variant">LEVEL</span>
      <span className="font-score-readout text-score-readout text-secondary-fixed">08</span>
      </div>
      </div>
      {/* Timer & Lives */}
      <div className="flex gap-md items-center">
      <div className="flex gap-xs text-error">
      <Heart  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <Heart  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <Heart  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </div>
      <div className="relative w-16 h-16 flex items-center justify-center bg-surface-container/50 rounded-full border border-primary-container/50 glow-border">
      <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 36 36">
      <path className="text-surface-variant" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="100, 100" strokeWidth="2"></path>
      <path className="text-primary-container drop-shadow-[0_0_5px_rgba(0,243,255,0.8)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="75, 100" strokeWidth="2"></path>
      </svg>
      <span className="font-score-readout text-score-readout text-primary-container relative z-10">45</span>
      </div>
      </div>
      </div>
      {/* Central Playfield (Abstracted) */}
      <div className="relative w-full max-w-[800px] aspect-square md:aspect-video grid grid-cols-8 grid-rows-8 gap-grid-unit p-sm">
      {/* Generating some generic nodes for visual flair */}
      <div className="bg-surface-container border border-outline-variant/30 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/30 rounded-sm"></div>
      <div className="bg-primary-container/20 border border-primary-container rounded-sm neon-pulse"></div>
      <div className="bg-surface-container border border-outline-variant/30 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/30 rounded-sm"></div>
      <div className="bg-error-container/20 border border-error rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/30 rounded-sm"></div>
      <div className="bg-surface-container border border-outline-variant/30 rounded-sm"></div>
      {/* Just repeating a few more rows for visual density without crazy HTML bloat */}
      <div className="col-span-8 h-full w-full flex items-center justify-center">
      {/* Glass Card for Game State (Simulating Start/Pause Overlay) */}
      <div className="bg-surface-container-highest/90 backdrop-blur-xl border border-primary-container/50 rounded-lg p-xl flex flex-col items-center gap-md glow-border z-50">
      <h2 className="font-display-lg text-display-lg text-primary-container text-center tracking-tighter">READY</h2>
      <p className="font-body-md text-body-md text-on-surface-variant text-center max-w-[300px]">Align the energy pulses before the grid destabilizes.</p>
      <div className="flex gap-sm mt-sm">
      <button className="bg-transparent border border-primary-container text-primary-container px-lg py-sm rounded-DEFAULT font-label-caps text-label-caps hover:bg-primary-container/10 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-colors active:scale-95 flex items-center gap-xs" type="button" data-action-id="start-game-3" onClick={actions?.["start-game-3"]}>
      <Play className="text-[18px]" aria-hidden={true} focusable="false" />
                                   START GAME
                               </button>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-surface/80 backdrop-blur-md border-t border-primary-container/20 shadow-[0_-4px_20px_rgba(0,243,255,0.15)] rounded-t-xl md:hidden">
      <a className="flex flex-col items-center justify-center text-primary-container bg-primary-container/10 rounded-xl p-2 shadow-[0_0_10px_rgba(0,243,255,0.4)] hover:bg-surface-variant/50 active:scale-90 duration-200" href="#" data-action-id="play-5" onClick={(event) => { event.preventDefault(); actions?.["play-5"]?.(); }}>
      <Gamepad2  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps mt-1">Play</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant/50 active:scale-90 duration-200" href="#" data-action-id="rankings-6" onClick={(event) => { event.preventDefault(); actions?.["rankings-6"]?.(); }}>
      <Trophy  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps mt-1">Rankings</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant/50 active:scale-90 duration-200" href="#" data-action-id="upgrades-7" onClick={(event) => { event.preventDefault(); actions?.["upgrades-7"]?.(); }}>
      <Bolt  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps mt-1">Upgrades</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant/50 active:scale-90 duration-200" href="#" data-action-id="profile-8" onClick={(event) => { event.preventDefault(); actions?.["profile-8"]?.(); }}>
      <User  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps mt-1">Profile</span>
      </a>
      </nav>
    </>
  );
}
