import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronRight, Check } from 'lucide-react';

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

export default function Pricing({ onOpenProposal }) {
  return (
    <section id="pricing" className="relative w-full border-b border-onyx/10 overflow-hidden brutalist-grid py-24 md:py-32 bg-white">
      {/* Background Motif */}
      <div className="absolute left-10 top-[-40px] text-[20rem] md:text-[32rem] font-bold font-mono text-onyx/[0.02] select-none pointer-events-none leading-none z-0">
        05
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        style={{ willChange: 'transform' }}
        className="max-w-4xl mx-auto px-6 relative z-10 text-center"
      >
        {/* Section Header */}
        <motion.div variants={slideUpItem} className="flex items-center justify-center gap-4 mb-16">
          <span className="font-mono text-xs text-molten font-bold tracking-widest">// INVESTMENT_05</span>
        </motion.div>

        {/* Pricing Layout Container - styled as a beautiful Molten Orange brutalist card */}
        <motion.div 
          variants={slideUpItem}
          className="glass-card p-8 md:p-12 text-left relative"
          style={{ willChange: 'transform' }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-6 border-b border-white/20 pb-8 mb-8">
            <div>
              <span className="font-mono text-[10px] text-white/80 font-bold uppercase tracking-wider block mb-1">
                // ONE FOUNDER RETAINER
              </span>
              <h3 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight font-display">
                THE INVESTMENT
              </h3>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs px-3 py-1 bg-white/10 border border-white/20 text-white uppercase tracking-widest font-bold">
              1 SPOT AVAILABLE
            </div>
          </div>

          {/* Pricing Highlight */}
          <div className="mb-10">
            <span className="font-mono text-xs text-white/70 uppercase block mb-1">STARTING MONTHLY RETAINER*</span>
            <div className="text-5xl md:text-7xl font-black text-white font-display tracking-tighter">
              $800 <span className="text-xl md:text-2xl text-white/60 font-mono font-normal">/ MONTH</span>
            </div>
            <p className="text-[11px] text-white/75 font-mono uppercase mt-2 tracking-wide">
              *tailored based on workload and goals after our initial operational audit.
            </p>
          </div>

          {/* Investment Details List */}
          <div className="flex flex-col gap-6 border-t border-white/20 pt-8 mb-10">
            {/* Row 1: Upfront Deposit */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
              <div>
                <span className="font-mono text-[11px] text-white/70 uppercase block tracking-wider">// INITIAL COMMITMENT</span>
                <span className="text-lg md:text-xl font-bold text-white uppercase tracking-tight">Upfront Deposit</span>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-2xl font-black text-white block">20% ($160)</span>
                <span className="text-xs text-white/80 block">To secure your spot for the month.</span>
              </div>
            </div>

            {/* Row 2: Balance */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
              <div>
                <span className="font-mono text-[11px] text-white/70 uppercase block tracking-wider">// REMAINING</span>
                <span className="text-lg md:text-xl font-bold text-white uppercase tracking-tight">Remaining Balance</span>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-2xl font-black text-white block">80% ($640)</span>
                <span className="text-xs text-white/80 block">Due upon completion of the month’s support.</span>
              </div>
            </div>

            {/* Row 3: Commitment */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-mono text-[11px] text-white/70 uppercase block tracking-wider">// SUPPORT CAPACITY</span>
                <span className="text-lg md:text-xl font-bold text-white uppercase tracking-tight">Support Commitment</span>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-2xl font-black text-white block">10–15 HOURS / WEEK</span>
                <span className="text-xs text-white/80 block">Of dedicated, elite operational support.</span>
              </div>
            </div>
          </div>

          {/* Action Call */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white p-4 border border-onyx font-mono text-xs shadow-[4px_4px_0px_#121212]">
            <div className="flex items-center gap-3 text-onyx/80 text-left">
              <div className="p-1.5 bg-molten/10 rounded-none border border-molten/20 flex-shrink-0">
                <Check className="w-5 h-5 text-molten" />
              </div>
              <span className="text-onyx font-sans text-xs font-semibold leading-relaxed">
                Direct founder-to-founder partnership. No middleman. No operational dilution.
              </span>
            </div>
            <button
              onClick={onOpenProposal}
              className="w-full sm:w-auto px-6 py-3.5 bg-onyx text-white border border-onyx hover:bg-molten hover:border-molten transition-all duration-300 font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_rgba(0,0,0,0.2)]"
            >
              SECURE YOUR SPOT <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
