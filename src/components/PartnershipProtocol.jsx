import React from 'react';
import { motion } from 'framer-motion';

// Animation variants matching the project's style
const slideUpItem = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

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

export default function PartnershipProtocol() {
  return (
    <section id="partnership-protocol" className="relative w-full border-b border-onyx/10 py-24 md:py-32 bg-white">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={slideUpItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          style={{ willChange: 'transform' }}
        >
          <h2 className="font-mono text-xs text-molten font-bold tracking-widest mb-4">// THE PARTNERSHIP PROTOCOL</h2>
          <p className="text-base text-onyx/80 max-w-3xl font-sans leading-relaxed mb-12">
            How we go from "overwhelmed" to "optimized" in 3 simple phases.
          </p>
        </motion.div>

        {/* 3‑Column Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ willChange: 'transform' }}
        >
          {/* Card 1 – THE AUDIT */}
          <motion.div variants={slideUpItem} className="relative p-8 bg-white border border-onyx/10 rounded-lg overflow-hidden">
            <div className="absolute -top-4 -left-2 text-[10rem] font-bold text-onyx/5 select-none pointer-events-none leading-none">01</div>
            <h3 className="font-mono text-xs text-molten font-bold mb-2">THE AUDIT</h3>
            <p className="text-base text-onyx/80 font-sans leading-relaxed">
              I dive into your CRM, calendar, and daily business systems to identify immediate bottlenecks and wasted time.
            </p>
          </motion.div>

          {/* Card 2 – THE ALIGNMENT */}
          <motion.div variants={slideUpItem} className="relative p-8 bg-white border border-onyx/10 rounded-lg overflow-hidden">
            <div className="absolute -top-4 -left-2 text-[10rem] font-bold text-onyx/5 select-none pointer-events-none leading-none">02</div>
            <h3 className="font-mono text-xs text-molten font-bold mb-2">THE ALIGNMENT</h3>
            <p className="text-base text-onyx/80 font-sans leading-relaxed">
              We align on priorities. I set up your custom operational hub and document your step-by-step process guides.
            </p>
          </motion.div>

          {/* Card 3 – THE EXECUTION */}
          <motion.div variants={slideUpItem} className="relative p-8 bg-white border border-onyx/10 rounded-lg overflow-hidden">
            <div className="absolute -top-4 -left-2 text-[10rem] font-bold text-onyx/5 select-none pointer-events-none leading-none">03</div>
            <h3 className="font-mono text-xs text-molten font-bold mb-2">THE EXECUTION</h3>
            <p className="text-base text-onyx/80 font-sans leading-relaxed">
              I handle the operations. You receive concise daily updates and brief weekly strategy notes to keep your leads flowing.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
