/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Experience() {
  const experiences = [
    {
      role: "Lead Full Stack Freelancer",
      company: "Neon Labs",
      period: "2024 - Present",
      description: "Building production-grade web and mobile applications for international startups and businesses."
    },
    {
      role: "Senior Software Engineer",
      company: "Titan Systems",
      period: "2022 - 2024",
      description: "Engineered scalable backend infrastructures handled over 1M+ daily active sessions."
    },
    {
      role: "Software Developer Intern",
      company: "Artemis Tech",
      period: "2021",
      description: "Collaborated on UI/UX redesigns and implemented responsive frontend architectures."
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tighter mb-4">
            Professional <span className="text-neon-red">Path</span>
          </h2>
          <div className="w-16 h-1 bg-neon-red mx-auto" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 border-l border-white/10 py-4 group"
            >
              <div className="absolute left-[-1px] top-4 w-[1px] h-full bg-neon-red scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
              <div className="absolute left-[-5px] top-6 w-2.5 h-2.5 rounded-full bg-neon-red shadow-[0_0_10px_rgba(255,26,26,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-neon-red font-mono text-xs uppercase tracking-widest">{exp.company}</p>
                </div>
                <div className="px-4 py-1 glass border-white/10 text-[10px] text-white/50 uppercase font-bold self-start md:self-center">
                  {exp.period}
                </div>
              </div>
              <p className="text-slate-400 font-light leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
