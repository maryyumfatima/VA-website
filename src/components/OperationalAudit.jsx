import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight } from 'lucide-react';

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

const auditItems = [
  {
    id: 'inbox',
    label: 'I start every morning drowning in email and chasing details instead of growing my business.'
  },
  {
    id: 'calendar',
    label: 'I spend too much time chasing tasks, following up on updates, or micromanaging support.'
  },
  {
    id: 'data',
    label: 'We are losing valuable leads and revenue because our follow-up processes are disorganized.'
  },
  {
    id: 'systems',
    label: 'Our systems (CRM, email flows) frequently break, meaning opportunities fall through the cracks before we even notice.'
  }
];

export default function OperationalAudit({ onOpenProposal }) {
  const [checked, setChecked] = useState({});

  const checkedCount = Object.values(checked).filter(Boolean).length;
  const isTriggered = checkedCount >= 2;

  const handleToggle = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="relative w-full border-b border-onyx/10 overflow-hidden py-24 md:py-32 bg-white">
      {/* Background Motif */}
      <div className="absolute right-10 top-[-40px] text-[20rem] md:text-[32rem] font-bold font-mono text-onyx/[0.02] select-none pointer-events-none leading-none z-0">
        06
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        style={{ willChange: 'transform' }}
        className="max-w-4xl mx-auto px-6 md:px-12 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={slideUpItem} className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-molten font-bold tracking-widest">// CHECKLIST_06</span>
          <span className="h-px bg-onyx/15 flex-grow" />
          <span className="font-mono text-xs text-onyx/40">BUSINESS HEALTH CHECKLIST</span>
        </motion.div>

        <motion.h2
          variants={slideUpItem}
          className="text-3xl md:text-4xl font-black uppercase tracking-tight text-onyx font-display mb-4"
        >
          WHERE IS YOUR BUSINESS<br />
          <span className="text-molten">LOSING TIME AND LEADS?</span>
        </motion.h2>

        <motion.p
          variants={slideUpItem}
          className="text-base text-onyx/60 font-sans leading-relaxed mb-12 max-w-2xl"
        >
          Check the statements that apply to you. If two or more resonate, you are losing valuable hours and money that could be saved immediately.
        </motion.p>

        {/* Audit Checklist */}
        <div className="flex flex-col gap-4 mb-10">
          {auditItems.map((item, idx) => (
            <motion.label
              key={item.id}
              variants={slideUpItem}
              htmlFor={`audit-${item.id}`}
              onClick={() => handleToggle(item.id)}
              className={`flex items-start gap-4 p-5 border cursor-pointer select-none transition-all duration-300 group ${
                checked[item.id]
                  ? 'border-molten bg-molten/5 shadow-[4px_4px_0px_#E74206]'
                  : 'border-onyx/10 bg-white hover:border-onyx/25 hover:shadow-[2px_2px_0px_rgba(18,18,18,0.06)]'
              }`}
              style={{ willChange: 'transform' }}
            >
              {/* Custom Checkbox */}
              <div
                className={`w-5 h-5 mt-0.5 border-2 flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                  checked[item.id]
                    ? 'border-molten bg-molten'
                    : 'border-onyx/25 bg-white group-hover:border-onyx/40'
                }`}
              >
                {checked[item.id] && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>

              {/* Label Text */}
              <div className="flex-grow">
                <span className="font-mono text-[10px] text-onyx/40 font-bold block mb-1">
                  SIGNAL_{String(idx + 1).padStart(2, '0')}
                </span>
                <span
                  className={`text-sm md:text-base font-sans leading-relaxed transition-colors duration-300 ${
                    checked[item.id] ? 'text-onyx font-semibold' : 'text-onyx/75'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </motion.label>
          ))}
        </div>

        {/* Result / CTA */}
        <motion.div variants={slideUpItem}>
          {/* Score Indicator */}
          <div className="flex items-center justify-between mb-6 p-4 border border-onyx/10 bg-onyx/[0.02]">
            <div className="flex items-center gap-3">
              <AlertTriangle
                className={`w-5 h-5 transition-colors duration-500 ${
                  isTriggered ? 'text-molten' : 'text-onyx/20'
                }`}
              />
              <span className="font-mono text-xs text-onyx/60 uppercase tracking-wider">
                BOTTLENECKS DETECTED:
              </span>
            </div>
            <span
              className={`font-mono text-2xl font-black transition-colors duration-500 ${
                isTriggered ? 'text-molten' : 'text-onyx/30'
              }`}
            >
              {checkedCount} / {auditItems.length}
            </span>
          </div>

          {/* CTA Button — activated when 2+ checked */}
          <button
            onClick={isTriggered ? onOpenProposal : undefined}
            className={`w-full py-4 font-mono text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 border transition-all duration-500 ${
              isTriggered
                ? 'bg-molten text-white border-molten cursor-pointer shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:translate-x-[-2px] hover:translate-y-[-2px]'
                : 'bg-onyx/5 text-onyx/30 border-onyx/10 cursor-not-allowed'
            }`}
          >
            {isTriggered ? (
              <>
                OFFLOAD THIS BOTTLENECK IMMEDIATELY <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              'SELECT 2+ SIGNALS TO UNLOCK'
            )}
          </button>

          {isTriggered && (
            <p className="text-[11px] text-center font-mono text-onyx/40 mt-3">
              Your results qualify you for an immediate partnership review.
            </p>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
