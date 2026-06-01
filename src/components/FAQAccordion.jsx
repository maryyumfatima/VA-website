import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

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

const faqs = [
  {
    id: 'confidentiality',
    question: 'How I ensure total confidentiality.',
    answer: 'I secure all system accesses and passwords using professional password sharing vaults (specifically Bitwarden). I never store passwords directly or write them down. Access is restricted and fully private, meaning your sensitive business credentials and log-in details never touch an unverified device. Your security is treated with the highest standard of professional care.'
  },
  {
    id: 'proactive-comm',
    question: 'My standard for proactive communication.',
    answer: 'Clear, reliable communication is the foundation of my work. Every evening, you will receive a concise daily update highlighting finished projects, current progress, resolved questions, and next-day priorities. You never have to guess what was done or chase me for updates. I solve problems before they even reach your radar.'
  },
  {
    id: 'sole-capacity',
    question: 'Why I work with only one founder at a time.',
    answer: 'Because multitasking slows businesses down. Traditional virtual assistants fragment their focus across 10 to 15 clients, leading to missed details, slow responses, and forgotten tasks. By dedicating my entire focus to exactly one founder, I operate as a seamless extension of your business, ensuring rapid workflow execution and highly organized, lead-generating systems.'
  }
];

export default function FAQAccordion() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="relative w-full border-b border-onyx/10 overflow-hidden py-24 md:py-32 bg-white">
      {/* Background Motif */}
      <div className="absolute right-10 top-[-40px] text-[20rem] md:text-[32rem] font-bold font-mono text-onyx/[0.02] select-none pointer-events-none leading-none z-0">
        07
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
          <span className="font-mono text-xs text-molten font-bold tracking-widest">// FAQS_07</span>
          <span className="h-px bg-onyx/15 flex-grow" />
          <span className="font-mono text-xs text-onyx/40">FREQUENTLY ASKED QUESTIONS</span>
        </motion.div>

        <motion.h2
          variants={slideUpItem}
          className="text-3xl md:text-4xl font-black uppercase tracking-tight text-onyx font-display mb-12"
        >
          HOW WE PARTNER TOGETHER.<br />
          <span className="text-molten">BUILT FOR ELITE FOUNDERS.</span>
        </motion.h2>

        {/* FAQ List */}
        <div className="flex flex-col border-t border-onyx/10">
          {faqs.map((faq, idx) => {
            const isExpanded = expandedId === faq.id;
            return (
              <motion.div
                key={faq.id}
                variants={slideUpItem}
                className="border-b border-onyx/10"
                style={{ willChange: 'transform' }}
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full py-6 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-onyx/30 font-bold mt-1">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-lg md:text-xl font-bold font-display uppercase tracking-tight text-onyx group-hover:text-molten transition-colors duration-300">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 border border-onyx/15 rounded-none transition-colors duration-300 ${isExpanded ? 'bg-molten border-molten text-white' : 'bg-transparent text-onyx/40 group-hover:text-onyx group-hover:border-onyx'}`}>
                    {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: 'auto', 
                        opacity: 1,
                        transition: {
                          height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.25, delay: 0.05 }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.15 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-10 pr-4 md:pr-12 text-sm md:text-base text-onyx/75 font-sans leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
