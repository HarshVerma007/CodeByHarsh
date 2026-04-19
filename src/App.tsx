/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [clientMode, setClientMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-6"
          >
            <div className="text-center">
              <motion.div
                animate={{ 
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 border-2 border-neon-red flex items-center justify-center font-display font-bold text-4xl mb-4 skew-x-[-12deg]"
              >
                N
              </motion.div>
              <div className="text-[10px] text-neon-red font-mono uppercase tracking-[0.5em] animate-pulse">
                Initializing System...
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Background />
      <CustomCursor />
      <Navbar clientMode={clientMode} setClientMode={setClientMode} />

      <main className="relative z-10">
        <Hero />
        
        <AnimatePresence mode="wait">
          {!clientMode && (
            <motion.div
              key="dev-sections"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Skills />
              <Experience />
            </motion.div>
          )}
        </AnimatePresence>

        <Services />
        <Projects />
        
        {/* Testimonials could go here */}
        
        <Contact />
      </main>

      <Footer />

      {/* Persistent CTA for mobile */}
      <div className="fixed bottom-6 right-6 z-[40] md:hidden">
        <a 
          href="#contact" 
          className="w-14 h-14 bg-neon-red text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,26,26,0.3)] clickable"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            N
          </motion.div>
        </a>
      </div>
    </div>
  );
}
