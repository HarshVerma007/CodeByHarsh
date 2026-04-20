/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  return (
    <footer className="h-[60px] border-t border-border-dim bg-black/50 backdrop-blur-md px-6 md:px-12 flex items-center justify-between text-[10px] text-text-dim uppercase tracking-[2px] font-mono">
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 bg-neon-red rounded-full shadow-[0_0_8px_#FF1A1A] animate-pulse" />
        <span>SYSTEMS ONLINE // AVAILABLE FOR PROJECTS</span>
      </div>
      
      <div className="hidden lg:flex items-center gap-6">
        <span>LATENCY: 14MS</span>
        <span className="opacity-20">|</span>
        <span>LOC: TOKYO_GRID</span>
      </div>

      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-white transition-colors clickable">GH</a>
        <a href="#" className="hover:text-white transition-colors clickable">LI</a>
        <a href="#" className="hover:text-white transition-colors clickable">TW</a>
      </div>
    </footer>
  );
}
