/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion, AnimatePresence } from "motion/react";

const PROJECTS = [
  {
    title: "Vortex Analytics",
    category: "Web Apps",
    image: "https://picsum.photos/seed/tech/800/800",
    tags: ["React", "D3.js", "Firebase"],
    type: "web"
  },
  {
    title: "Artemis CRM",
    category: "Full Stack",
    image: "https://picsum.photos/seed/code/800/800",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    type: "fullstack"
  },
  {
    title: "Nova Wallet",
    category: "Mobile App",
    image: "https://picsum.photos/seed/crypto/800/800",
    tags: ["React Native", "Ethers.js", "Node.js"],
    type: "mobile"
  },
  {
    title: "Zenith OS",
    category: "Web Apps",
    image: "https://picsum.photos/seed/future/800/800",
    tags: ["TypeScript", "Canvas", "Motion"],
    type: "web"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.type === filter);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-black relative">
       <div className="absolute inset-0 grid-pattern opacity-5 mask-radial pointer-events-none" />

       <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-7xl font-display font-medium uppercase tracking-tighter mb-4 leading-none">
                Featured <span className="text-neon-red">Projects</span>
              </h2>
              <p className="text-slate-400 font-light text-lg">
                Explore a selection of high-performance applications designed to convert 
                and engineered for scale.
              </p>
            </div>

            <div className="flex gap-4 border-b border-white/10 pb-2 overflow-x-auto no-scrollbar">
              {["all", "web", "mobile", "fullstack"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 text-[10px] uppercase font-bold tracking-[0.2em] transition-all clickable ${
                    filter === f ? "text-neon-red scale-110" : "text-white/40 hover:text-white"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-24 p-12 glass-red relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-neon-red/50 uppercase tracking-widest">
               Spotlight Project // 2026
             </div>
             <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="w-full lg:w-1/2">
                   <h3 className="text-4xl font-display font-bold text-white mb-6 uppercase tracking-tighter">
                     Titan Marketplace <br /> Enterprise SaaS
                   </h3>
                   <p className="text-slate-400 mb-8 max-w-lg leading-relaxed">
                     A multi-vendor e-commerce orchestration platform designed for high-frequency 
                     trading and sub-second inventory updates. Deployed with 99.99% uptime.
                   </p>
                   <button className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-neon-red hover:text-white transition-all clickable">
                     Read Case Study
                   </button>
                </div>
                <div className="w-full lg:w-1/2 aspect-video bg-white/5 border border-white/10 rounded overflow-hidden">
                  <img 
                    src="https://picsum.photos/seed/dashboard/1200/800" 
                    alt="Titan Spotlight"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}
