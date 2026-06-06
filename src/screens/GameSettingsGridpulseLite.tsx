// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - GridPulse Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { CircleHelp, Gauge, Keyboard, Monitor, SlidersHorizontal, Vibrate, Volume2, X } from "lucide-react";


export type GameSettingsGridpulseLiteActionId = "upgrade-to-pro-1" | "return-2" | "cancel-3" | "save-preferences-4" | "game-mode-1" | "settings-2" | "sound-3" | "haptics-4" | "display-5" | "support-6";

export interface GameSettingsGridpulseLiteProps {
  actions?: Partial<Record<GameSettingsGridpulseLiteActionId, () => void>>;

}

export function GameSettingsGridpulseLite({ actions }: GameSettingsGridpulseLiteProps) {
  return (
    <>
      {/* Mock Gameplay Background Grid (Subtle) */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" style={{backgroundImage: "linear-gradient(rgba(0, 243, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.2) 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
      {/* SideNavBar (from JSON, modified as a settings overlay) */}
      <nav className="hidden md:flex fixed inset-y-0 left-0 z-[60] flex-col py-lg bg-surface-container-highest/95 backdrop-blur-xl h-full w-72 border-r border-primary-container/30 shadow-[10px_0_30px_rgba(0,0,0,0.5)] transition-colors duration-300 ease-in-out">
      <div className="px-sm mb-lg">
      <h2 className="font-headline-md text-headline-md text-primary-container tracking-tighter">SYSTEM MENU</h2>
      <p className="font-label-caps text-label-caps text-on-surface-variant mt-xs">V2.0.4-LITE</p>
      </div>
      <div className="flex-1 space-y-xs">
      <a className="flex items-center text-on-surface-variant pl-4 py-sm hover:bg-primary-container/5 hover:text-primary-fixed transition-colors" href="#" data-action-id="game-mode-1" onClick={(event) => { event.preventDefault(); actions?.["game-mode-1"]?.(); }}>
      <SlidersHorizontal  style={{fontVariationSettings: "'FILL' 0"}} className="mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Game Mode</span>
      </a>
      {/* Active State */}
      <a className="flex items-center text-primary-container font-bold border-l-4 border-primary-container pl-4 py-sm bg-primary-container/5" href="#" data-action-id="settings-2" onClick={(event) => { event.preventDefault(); actions?.["settings-2"]?.(); }}>
      <SlidersHorizontal  style={{fontVariationSettings: "'FILL' 1"}} className="mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Settings</span>
      </a>
      <a className="flex items-center text-on-surface-variant pl-4 py-sm hover:bg-primary-container/5 hover:text-primary-fixed transition-colors" href="#" data-action-id="sound-3" onClick={(event) => { event.preventDefault(); actions?.["sound-3"]?.(); }}>
      <Volume2  style={{fontVariationSettings: "'FILL' 0"}} className="mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Sound</span>
      </a>
      <a className="flex items-center text-on-surface-variant pl-4 py-sm hover:bg-primary-container/5 hover:text-primary-fixed transition-colors" href="#" data-action-id="haptics-4" onClick={(event) => { event.preventDefault(); actions?.["haptics-4"]?.(); }}>
      <Vibrate  style={{fontVariationSettings: "'FILL' 0"}} className="mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Haptics</span>
      </a>
      <a className="flex items-center text-on-surface-variant pl-4 py-sm hover:bg-primary-container/5 hover:text-primary-fixed transition-colors" href="#" data-action-id="display-5" onClick={(event) => { event.preventDefault(); actions?.["display-5"]?.(); }}>
      <Monitor  style={{fontVariationSettings: "'FILL' 0"}} className="mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Display</span>
      </a>
      <a className="flex items-center text-on-surface-variant pl-4 py-sm hover:bg-primary-container/5 hover:text-primary-fixed transition-colors" href="#" data-action-id="support-6" onClick={(event) => { event.preventDefault(); actions?.["support-6"]?.(); }}>
      <CircleHelp  style={{fontVariationSettings: "'FILL' 0"}} className="mr-sm" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Support</span>
      </a>
      </div>
      <div className="px-sm mt-auto">
      <button className="w-full neon-button py-sm rounded-DEFAULT text-primary-container font-label-caps text-label-caps tracking-widest" type="button" data-action-id="upgrade-to-pro-1" onClick={actions?.["upgrade-to-pro-1"]}>
                      UPGRADE TO PRO
                  </button>
      </div>
      </nav>
      {/* Main Settings Overlay Canvas */}
      <main className="relative z-10 w-full max-w-2xl md:ml-72 flex flex-col gap-md">
      {/* Header */}
      <header className="flex justify-between items-center pb-sm border-b border-primary-container/20">
      <h1 className="font-headline-md text-headline-md md:font-display-lg md:text-display-lg text-primary-container tracking-tighter">SETTINGS</h1>
      <button className="text-on-surface-variant hover:text-primary-fixed transition-colors flex items-center gap-xs" type="button" data-action-id="return-2" onClick={actions?.["return-2"]}>
      <span className="font-label-caps text-label-caps">RETURN</span>
      <X aria-hidden={true} focusable="false" />
      </button>
      </header>
      {/* Grid Bento Layout for Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      {/* Difficulty Sliders Card */}
      <section className="bg-surface/60 backdrop-blur-md rounded-lg p-md neon-border flex flex-col gap-sm col-span-1 md:col-span-2">
      <div className="flex items-center gap-xs mb-xs">
      <Gauge  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary-container" aria-hidden={true} focusable="false" />
      <h3 className="font-label-caps text-label-caps text-primary-container">DIFFICULTY TUNING</h3>
      </div>
      <div className="space-y-md">
      <div className="flex flex-col gap-xs">
      <div className="flex justify-between items-end">
      <label className="font-body-md text-body-md text-on-surface">Pulse Speed</label>
      <span className="font-score-readout text-score-readout text-primary-container">1.5x</span>
      </div>
      <input className="w-full" max="3" min="0.5" step="0.1" type="range" defaultValue="1.5" />
      </div>
      <div className="flex flex-col gap-xs">
      <div className="flex justify-between items-end">
      <label className="font-body-md text-body-md text-on-surface">Grid Complexity</label>
      <span className="font-score-readout text-score-readout text-primary-container">HIGH</span>
      </div>
      <input className="w-full" max="3" min="1" step="1" type="range" defaultValue="3" />
      <div className="flex justify-between px-1 text-on-surface-variant text-[10px] font-label-caps">
      <span>LOW</span>
      <span>MED</span>
      <span>HIGH</span>
      </div>
      </div>
      </div>
      </section>
      {/* Preferences Toggles Card */}
      <section className="bg-surface/60 backdrop-blur-md rounded-lg p-md neon-border flex flex-col gap-md">
      <div className="flex items-center gap-xs">
      <SlidersHorizontal  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary-container" aria-hidden={true} focusable="false" />
      <h3 className="font-label-caps text-label-caps text-primary-container">PREFERENCES</h3>
      </div>
      <div className="flex flex-col gap-sm">
      {/* Toggle Item */}
      <div className="flex justify-between items-center p-sm bg-surface-variant/30 rounded">
      <span className="font-body-md text-body-md text-on-surface">Sound FX</span>
      <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
      <input defaultChecked={true} className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer opacity-0 z-10" id="toggle-sfx" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-5 rounded-sm bg-surface-container-high border border-outline-variant cursor-pointer relative" htmlFor="toggle-sfx"></label>
      </div>
      </div>
      {/* Toggle Item */}
      <div className="flex justify-between items-center p-sm bg-surface-variant/30 rounded">
      <span className="font-body-md text-body-md text-on-surface">Music Track</span>
      <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
      <input defaultChecked={true} className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer opacity-0 z-10" id="toggle-music" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-5 rounded-sm bg-surface-container-high border border-outline-variant cursor-pointer relative" htmlFor="toggle-music"></label>
      </div>
      </div>
      {/* Toggle Item */}
      <div className="flex justify-between items-center p-sm bg-surface-variant/30 rounded">
      <span className="font-body-md text-body-md text-on-surface">Haptic Feedback</span>
      <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
      <input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer opacity-0 z-10" id="toggle-haptic" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-5 rounded-sm bg-surface-container-high border border-outline-variant cursor-pointer relative" htmlFor="toggle-haptic"></label>
      </div>
      </div>
      </div>
      </section>
      {/* Input Help Card (HUD Style) */}
      <section className="bg-surface-container-lowest/80 backdrop-blur-md rounded-lg p-md border border-outline-variant flex flex-col gap-sm">
      <div className="flex items-center gap-xs">
      <Keyboard  style={{fontVariationSettings: "'FILL' 1"}} className="text-outline" aria-hidden={true} focusable="false" />
      <h3 className="font-label-caps text-label-caps text-on-surface-variant">INPUT BINDS</h3>
      </div>
      <ul className="flex flex-col gap-xs mt-xs">
      <li className="flex justify-between items-center border-b border-surface-variant/50 pb-xs">
      <span className="font-body-md text-body-md text-on-surface">Pulse Action</span>
      <kbd className="font-score-readout text-label-caps bg-surface-container py-1 px-2 rounded text-primary-container border border-primary-container/30">SPACE</kbd>
      </li>
      <li className="flex justify-between items-center border-b border-surface-variant/50 pb-xs">
      <span className="font-body-md text-body-md text-on-surface">Pause Menu</span>
      <kbd className="font-score-readout text-label-caps bg-surface-container py-1 px-2 rounded text-on-surface border border-outline-variant">ESC</kbd>
      </li>
      <li className="flex justify-between items-center border-b border-surface-variant/50 pb-xs">
      <span className="font-body-md text-body-md text-on-surface">Quick Restart</span>
      <kbd className="font-score-readout text-label-caps bg-surface-container py-1 px-2 rounded text-on-surface border border-outline-variant">R</kbd>
      </li>
      </ul>
      </section>
      </div>
      {/* Action Footer */}
      <footer className="mt-sm flex flex-col sm:flex-row gap-sm justify-end items-center pt-md border-t border-primary-container/20">
      <button className="w-full sm:w-auto px-lg py-sm text-on-surface-variant font-label-caps text-label-caps hover:text-primary-container transition-colors tracking-widest" type="button" data-action-id="cancel-3" onClick={actions?.["cancel-3"]}>
                      CANCEL
                  </button>
      <button className="w-full sm:w-auto neon-button px-lg py-sm rounded-DEFAULT text-primary-container font-headline-md text-headline-md bg-primary-container/5 tracking-wide" type="button" data-action-id="save-preferences-4" onClick={actions?.["save-preferences-4"]}>
                      SAVE PREFERENCES
                  </button>
      </footer>
      </main>
      
    </>
  );
}
