import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

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

export default function Hero({ onOpenProposal }) {
  return (
    <section className="relative w-full border-b border-onyx/10 overflow-hidden brutalist-grid py-20 md:py-32 bg-white">
      {/* Massive Brutalist Background Motif */}
      <div className="absolute right-[-10px] bottom-[-40px] text-[20rem] md:text-[32rem] font-bold font-mono text-onyx/[0.02] select-none pointer-events-none leading-none z-0">
        01
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ willChange: 'transform' }}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left"
      >
        {/* Status Badge - Extreme Scarcity Capacity Module */}
        <motion.div 
          variants={slideUpItem}
          className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 px-4 py-3 border border-molten bg-molten/[0.03] text-molten font-mono text-xs mb-10 max-w-xl w-full sm:w-auto shadow-[2px_2px_0px_#E74206]"
        >
          <div className="flex items-center gap-2 shrink-0 font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
            </span>
            <span>STATUS: 🟢 1 SPOT AVAILABLE FOR JUNE</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-molten/20 shrink-0" />
          <span className="text-[10px] text-onyx/60 font-sans tracking-normal leading-normal font-normal">
            I work with only one founder at a time to ensure maximum focus. Secure your spot before the waitlist opens.
          </span>
        </motion.div>

        {/* Massive Editorial Headline */}
        <motion.h1 
          variants={slideUpItem}
          className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-onyx leading-[0.85] max-w-5xl mb-10 font-display"
        >
          YOUR BUSINESS <br />
          IS RUNNING YOU. <br />
          <span className="text-molten">LET'S FIX THAT.</span>
        </motion.h1>

        {/* Editorial Divider Line */}
        <motion.div 
          variants={slideUpItem} 
          className="h-[1.5px] bg-onyx/10 w-full mb-10 max-w-4xl" 
        />

        {/* Subtitle and Static Brutalist Actions */}
        <motion.div 
          variants={slideUpItem}
          className="flex flex-col lg:flex-row lg:items-end justify-between w-full max-w-4xl gap-8"
        >
          <p className="text-lg md:text-xl text-onyx/80 font-sans leading-relaxed max-w-xl">
            I act as your right-hand operator, handling the heavy lifting behind the scenes so you can save time, stop chasing tasks, and focus on bringing in more leads.
          </p>

          <div className="flex flex-wrap gap-4 shrink-0">
            <button
              onClick={onOpenProposal}
              className="px-8 py-4 bg-onyx text-white border border-onyx hover:bg-molten hover:border-molten transition-colors duration-200 font-mono text-sm font-bold tracking-wider flex items-center gap-2 group cursor-pointer"
            >
              PARTNERSHIP REQUEST
              <ArrowDownRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200" />
            </button>
            <a
              href="#services"
              className="px-8 py-4 border border-onyx/15 hover:border-onyx/40 hover:bg-onyx/5 text-onyx transition-colors duration-200 font-mono text-sm tracking-wider flex items-center"
            >
              SEE SERVICES
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
