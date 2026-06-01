import React from 'react';
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const slideUpItem = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function ThePromise() {
  return (
    <section className="relative w-full bg-onyx text-white py-24 md:py-32 overflow-hidden">
      {/* Background Motif */}
      <div className="absolute left-[-10px] bottom-[-40px] text-[20rem] md:text-[32rem] font-bold font-mono text-white/[0.01] select-none pointer-events-none leading-none z-0">
        02
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        style={{ willChange: 'transform' }}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        {/* Monospace Indicator */}
        <motion.div variants={slideUpItem} className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-molten font-bold tracking-widest">// MY COMMITMENT_02</span>
          <span className="h-px bg-white/10 flex-grow" />
          <span className="font-mono text-xs text-white/40">DEDICATED FOUNDER PARTNERSHIP</span>
        </motion.div>

        {/* Massive Promise Display */}
        <div className="flex flex-col items-start justify-start text-left max-w-6xl">
          <motion.div 
            variants={slideUpItem} 
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-none font-display mb-10 text-white"
          >
            10–15 HOURS / WEEK <br className="sm:hidden" />
            <span className="hidden sm:inline text-white/30"> | </span>
            <span className="text-molten">FROM $800 / MO*</span>
          </motion.div>

          {/* Subtext */}
          <motion.p 
            variants={slideUpItem} 
            className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90 leading-relaxed font-sans max-w-4xl border-l-4 border-molten pl-6 py-2"
          >
            "Highly organized systems that save your time and bring in more leads."
          </motion.p>

          <motion.p 
            variants={slideUpItem} 
            className="text-[10px] text-white/40 font-mono uppercase tracking-wider mt-3"
          >
            *Final retainer is tailored to your exact operational workload, aligned during our initial audit.
          </motion.p>

          <motion.p 
            variants={slideUpItem} 
            className="mt-8 text-sm md:text-base text-white/70 max-w-3xl font-mono uppercase tracking-wider leading-relaxed"
          >
            I work exclusively with one founder at a time. I manage your inbox, structure your schedule, and set up lead-generating systems so you never have to chase tasks or follow up with me. By freeing your time and organizing your pipeline, I help you bring more clients, close more deals, and put more money on the table.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
