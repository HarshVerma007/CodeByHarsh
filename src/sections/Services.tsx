/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Globe, Smartphone, BarChart3, Settings } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "High-end websites that load fast, look premium, and convert visitors into loyal clients.",
      icon: <Globe className="text-neon-red" size={32} />,
      outcomes: ["SEO Optimized", "Mobile Responsive", "Custom CMS"]
    },
    {
      title: "Web Applications",
      description: "Complex dashboards, SaaS platforms, and enterprise solutions built with modern technology.",
      icon: <BarChart3 className="text-neon-red" size={32} />,
      outcomes: ["Real-time Data", "Secure Auth", "High Performance"]
    },
    {
      title: "Mobile Development",
      description: "Native-quality iOS and Android applications designed for smooth performance and great UX.",
      icon: <Smartphone className="text-neon-red" size={32} />,
      outcomes: ["Cross-platform", "App Store Ready", "Offline Support"]
    },
    {
      title: "Custom Solutions",
      description: "Bespoke software automation and backend systems tailored specifically to your business needs.",
      icon: <Settings className="text-neon-red" size={32} />,
      outcomes: ["API Integration", "Cloud Native", "Scalable Architecture"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tighter mb-4">
            I help businesses <span className="text-neon-red italic">Build</span>...
          </h2>
          <div className="w-24 h-1 bg-neon-red" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 glass border-white/5 hover:border-neon-red/30 transition-all group clickable"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {service.outcomes.map((outcome, i) => (
                  <span key={i} className="px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-white/50">
                    {outcome}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-neon-red/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
