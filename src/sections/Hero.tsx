/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center p-6 pt-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] mask-radial opacity-30">
        <div className="grid-pattern w-full h-full" />
      </div>

      <div className="max-w-5xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1 rounded-full glass-red text-neon-red text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
        >
          Available for Freelance Projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-display font-medium leading-[0.9] mb-8 tracking-tighter"
        >
          BUILDING <span className="heading-stroke italic">SCALABLE</span> DIGITAL <br /> 
          <span className="text-glow">WEAPONRY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          High-performance web apps and mobile applications engineered to scale businesses 
          and captivate modern users.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-8 py-4 bg-neon-red text-black font-bold uppercase tracking-widest overflow-hidden transition-all hover:pr-12 clickable">
            <span className="relative z-10 transition-colors flex items-center gap-2">
              Start a Project <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute top-0 right-0 w-0 h-full bg-white transition-all group-hover:w-full z-0" />
          </button>
          
          <button className="px-8 py-4 glass border border-white/10 text-white font-bold uppercase tracking-widest hover:border-white/50 transition-all clickable">
            View My Work
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Side Decorative Text */}
      <div className="absolute left-10 top-1/2 -rotate-90 origin-left hidden xl:block">
        <span className="text-[10px] text-white/10 uppercase tracking-[1em] font-mono">
          System.Status: Operational // 2026.4.19
        </span>
      </div>
      <div className="absolute right-10 top-1/2 rotate-90 origin-right hidden xl:block">
        <span className="text-[10px] text-white/10 uppercase tracking-[1em] font-mono">
          Conversion_First_Mindset = True
        </span>
      </div>
    </section>
  );
}
