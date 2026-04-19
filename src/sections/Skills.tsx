/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Skills() {
  const categories = [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "Firebase", "Redis"]
    },
    {
      name: "Mobile",
      skills: ["React Native", "Flutter", "iOS Deployment", "Android Ops"]
    },
    {
      name: "Tools",
      skills: ["Docker", "AWS", "Figma", "Git", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="w-full md:w-1/3">
             <h2 className="text-4xl md:text-5xl font-display font-medium uppercase tracking-tighter mb-8 leading-none">
               Core <span className="text-neon-red">Arsenal</span>
             </h2>
             <p className="text-slate-400 font-light max-w-sm mb-12">
               Equipped with the latest technologies to build bleeding-edge applications 
               that outperform the competition.
             </p>
             
             <div className="p-8 border-l border-neon-red bg-neon-red/5">
                <div className="text-neon-red text-[10px] uppercase tracking-widest mb-2 font-bold">Project_Ready = True</div>
                <div className="text-white text-sm font-light italic">"I don't just write code, I solve technical bottlenecks for business growth."</div>
             </div>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <h4 className="text-xs uppercase font-mono tracking-[0.4em] text-white/40 mb-6 group-hover:text-neon-red transition-colors">
                  {cat.name}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, j) => (
                    <div 
                      key={j}
                      className="px-6 py-3 glass border-white/5 text-sm font-medium hover:border-white/20 hover:bg-white/5 transition-all cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
