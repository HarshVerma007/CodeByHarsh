/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Send, Github, Linkedin, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-black relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-7xl font-display font-medium uppercase tracking-tighter mb-8 leading-none">
              Let's build <br /> something <span className="text-neon-red italic">powerful</span>
            </h2>
            <p className="text-slate-400 font-light text-lg mb-12 max-w-lg">
              Ready to take your project to the next level? I'm currenty accepting new freelance 
              enquiries. Let's discuss your vision and turn it into reality.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 glass border-white/5 group clickable">
                <div className="p-4 bg-neon-red/10 border border-neon-red/20 text-neon-red group-hover:bg-neon-red group-hover:text-black transition-all">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-1">Send a Message</div>
                  <div className="text-xl font-bold">freelanceharsh007@gmail.com</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                 <a href="https://github.com/HarshVerma007" className="flex-1 p-4 glass border-white/5 flex items-center justify-center gap-3 hover:border-white/30 transition-all clickable">
                   <Github size={20} /> <span className="uppercase text-xs font-bold tracking-widest">Github</span>
                 </a>
                 <a href="https://www.linkedin.com/in/harsh-verma0502/" className="flex-1 p-4 glass border-white/5 flex items-center justify-center gap-3 hover:border-white/30 transition-all clickable">
                   <Linkedin size={20} /> <span className="uppercase text-xs font-bold tracking-widest">LinkedIn</span>
                 </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="YOUR NAME" 
                        className="w-full bg-white/5 border border-white/10 p-4 focus:border-neon-red outline-none transition-all placeholder:text-white/10" 
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="Your Email Address" 
                        className="w-full bg-white/5 border border-white/10 p-4 focus:border-neon-red outline-none transition-all placeholder:text-white/10" 
                      />
                   </div>
                </div>
                
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Company / Project Name</label>
                   <input 
                     type="text" 
                     placeholder="Company / Project Name" 
                     className="w-full bg-white/5 border border-white/10 p-4 focus:border-neon-red outline-none transition-all placeholder:text-white/10" 
                   />
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest font-bold text-white/50">Your Vision</label>
                   <textarea 
                     rows={5} 
                     placeholder="Tell me about your project goals..." 
                     className="w-full bg-white/5 border border-white/10 p-4 focus:border-neon-red outline-none transition-all placeholder:text-white/10 resize-none" 
                   />
                </div>

                <button className="w-full group relative py-6 bg-neon-red text-black font-bold uppercase tracking-[0.2em] overflow-hidden transition-all clickable">
                   <span className="relative z-10 flex items-center justify-center gap-2">
                     Initiate Connection <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                   </span>
                   <div className="absolute top-0 left-0 w-0 h-full bg-white transition-all group-hover:w-full z-0" />
                </button>
             </form>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-6 text-center">
         <div className="text-[8px] text-white/10 uppercase tracking-[1em] font-mono">
           Encrypted_Connect_Protocol_Active // RSA_4096
         </div>
      </div>
    </section>
  );
}
