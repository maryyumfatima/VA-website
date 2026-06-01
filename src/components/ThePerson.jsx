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

export default function ThePerson() {
  return (
    <section id="the-person" className="relative w-full border-b border-onyx/10 overflow-hidden py-24 md:py-32 bg-white">
      {/* Background Motif */}
      <div className="absolute left-10 top-[-40px] text-[20rem] md:text-[32rem] font-bold font-mono text-onyx/[0.02] select-none pointer-events-none leading-none z-0">
        08
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        style={{ willChange: 'transform' }}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={slideUpItem} className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-molten font-bold tracking-widest">// THE PERSON_08</span>
          <span className="h-px bg-onyx/15 flex-grow" />
          <span className="font-mono text-xs text-onyx/40">THE OPERATOR BEHIND THE PARTNERSHIP</span>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column: Portrait */}
          <motion.div 
            variants={slideUpItem}
            className="border-2 border-onyx p-3 shadow-[6px_6px_0px_#121212] bg-white relative group"
            style={{ willChange: 'transform' }}
          >
            <div className="overflow-hidden border border-onyx/10 relative z-10 aspect-[4/5] bg-onyx/5">
              <img 
                src="/maryyums-Portrait.jpeg" 
                alt="Maryyum Fatima" 
                className="w-full h-full object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Corner Brutalist Badges */}
            <div className="absolute top-6 left-6 z-20 font-mono text-[8px] bg-onyx text-white px-2 py-0.5 font-bold uppercase tracking-widest border border-white/20">
              OP-01 // CORE ACTIVE
            </div>
          </motion.div>

          {/* Right Column: Bio */}
          <motion.div 
            variants={slideUpItem}
            className="flex flex-col items-start text-left"
            style={{ willChange: 'transform' }}
          >
            <span className="font-mono text-[10px] text-molten font-bold uppercase tracking-widest block mb-2">
              // MARYYUM FATIMA
            </span>
            <h3 className="text-4xl md:text-5xl font-black uppercase text-onyx tracking-tight font-display mb-6">
              EXECUTIVE OPERATIONS PARTNER FOR DIGITAL COACHES
            </h3>
            <p className="text-base md:text-lg text-onyx/80 font-sans leading-relaxed mb-6 font-normal">
              I am a dedicated operations partner who works directly with growing digital coaches and course creators. Over the years, I have seen firsthand how founders get bogged down by messy course platforms, endless student support emails, and chaotic launch schedules.
            </p>
            <p className="text-base md:text-lg text-onyx/80 font-sans leading-relaxed mb-8 font-normal">
              My approach is simple: I work with only one client at a time. This guarantees you get my undivided attention and a dedicated partner who keeps your coaching programs organized, ensures your students are supported, and sets up automated funnels that bring in more high-quality leads.
            </p>
            <p className="text-lg md:text-xl text-onyx font-sans font-bold leading-relaxed border-l-4 border-molten pl-6 py-1 italic">
              "I am looking for long-term partners, not just tasks. If that's you, let's talk."
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
