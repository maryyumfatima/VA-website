import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Crosshair, RefreshCw } from 'lucide-react';

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

export default function TrustManifesto() {
  const tenets = [
    {
      id: '01',
      title: 'CONFIDENTIALITY',
      icon: ShieldCheck,
      description: 'I operate under strict NDAs and never share your business data with anyone.'
    },
    {
      id: '02',
      title: 'ORGANIZED EXECUTION',
      icon: Crosshair,
      description: 'Every detail, from scheduling to managing your inbox, is handled exactly as you prefer.'
    },
    {
      id: '03',
      title: 'UNDIVIDED FOCUS',
      icon: RefreshCw,
      description: 'Working with only one founder ensures you have my full attention and immediate responses.'
    }
  ];

  return (
    <section className="relative w-full border-b border-onyx/10 py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Monospace Indicator */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-molten font-bold tracking-widest">// MY COMMITMENTS_03</span>
          <span className="h-px bg-onyx/15 flex-grow" />
          <span className="font-mono text-xs text-onyx/40">HOW I PROTECT YOUR BUSINESS</span>
        </div>

        {/* Minimalist Grid wrapper with stagger animations */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{ willChange: 'transform' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        >
          {tenets.map((tenet, idx) => {
            const Icon = tenet.icon;
            return (
              <motion.div 
                key={tenet.title}
                variants={slideUpItem}
                className={`flex flex-col items-start text-left md:px-6 ${
                  idx > 0 ? 'md:border-l border-onyx/10' : ''
                }`}
                style={{ willChange: 'transform' }}
              >
                {/* Index & Icon */}
                <div className="flex justify-between items-center w-full mb-6">
                  <div className="p-2 border border-onyx bg-onyx text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm text-onyx/40 font-bold">{tenet.id}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black tracking-tight uppercase mb-4 font-display text-onyx">
                  {tenet.title}
                </h3>

                {/* Strictly One-Sentence Description */}
                <p className="text-base text-onyx/85 font-sans leading-relaxed">
                  {tenet.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
