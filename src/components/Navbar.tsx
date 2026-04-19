/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { User, ShieldCheck, Github, Linkedin, Mail } from "lucide-react";

interface NavbarProps {
  clientMode: boolean;
  setClientMode: (mode: boolean) => void;
}

export default function Navbar({ clientMode, setClientMode }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-black/5backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-2">
        <div className="font-display font-extrabold text-xl tracking-widest uppercase text-neon-red text-glow">
          Code X Harsh
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em]">
          <a href="#hero" className="text-neon-red clickable">Intelligence</a>
          <a href="#projects" className="text-text-dim hover:text-white transition-colors clickable">Operations</a>
          {!clientMode && <a href="#experience" className="text-text-dim hover:text-white transition-colors clickable">Archives</a>}
          <a href="#contact" className="text-text-dim hover:text-white transition-colors clickable">Terminal</a>
        </div>

        <div className="h-6 w-[1px] bg-white/10 hidden sm:block" />

        <div className="flex items-center gap-4">
          <button
            onClick={() => setClientMode(!clientMode)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 clickable text-[10px] uppercase font-bold tracking-widest ${
              clientMode 
                ? "bg-neon-red/20 border-neon-red text-neon-red" 
                : "bg-white/5 border-white/10 text-white/60"
            }`}
          >
            {clientMode ? <ShieldCheck size={14} /> : <User size={14} />}
            <span className="hidden xs:block">{clientMode ? "Client Mode ON" : "Normal Mode"}</span>
          </button>

          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors clickable">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors clickable">
              <Linkedin size={18} />
            </a>
            <a href="mailto:hello@neon.labs" className="text-white/60 hover:text-white transition-colors clickable">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
