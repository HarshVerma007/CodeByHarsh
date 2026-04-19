/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Link, ExternalLink } from "lucide-react";
import React from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({ title, category, image, tags }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[450px] w-full p-4 glass border-white/5 group clickable overflow-hidden"
    >
      <div 
        style={{ transform: "translateZ(80px)" }}
        className="absolute inset-4 overflow-hidden pointer-events-none"
      >
        <img 
          src={image} 
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-maroon/20 group-hover:opacity-0 transition-opacity" />
      </div>

      <div 
        style={{ transform: "translateZ(100px)" }}
        className="absolute bottom-8 left-8 right-8 pointer-events-none"
      >
        <div className="text-neon-red font-mono text-[10px] uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {category}
        </div>
        <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-glow transition-all">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {tags.map((tag, idx) => (
            <span key={idx} className="px-2 py-0.5 border border-white/20 text-[9px] uppercase tracking-tighter text-white/70 bg-black/40">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
        <button className="p-3 bg-neon-red text-black rounded-full hover:scale-110 transition-transform clickable">
          <ExternalLink size={20} />
        </button>
      </div>
    </motion.div>
  );
}
