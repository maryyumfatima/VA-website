import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function ProposalDrawer({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bottleneck: '',
    committed: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.committed) return;
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-onyx/75 backdrop-blur-[10px] cursor-pointer"
            style={{ willChange: 'opacity' }}
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xl glass-modal p-6 md:p-8 flex flex-col h-full overflow-y-auto border-l border-onyx/15 text-onyx"
            style={{ willChange: 'transform' }}
          >
            {/* Header */}
            <div className="flex justify-between items-center pb-6 border-b border-onyx/10">
              <div>
                <span className="text-[10px] tracking-[0.2em] font-mono text-molten font-bold uppercase block mb-1">
                  // ENGAGEMENT REQUEST
                </span>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase font-display">
                  PARTNERSHIP REQUEST
                </h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 border border-onyx/10 hover:border-molten hover:text-molten transition-colors duration-200 bg-onyx/5 cursor-pointer rounded-none text-onyx"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex-grow py-6 flex flex-col gap-6">
                {/* Form Fields */}
                <div className="flex flex-col gap-6">
                  {/* Step 1: Name & Email */}
                  <div>
                    <label className="block text-[11px] font-mono text-onyx font-bold tracking-wider uppercase mb-2">
                      STEP 1 // NAME & EMAIL
                    </label>
                    <div className="flex flex-col gap-3">
                      <input
                        type="text"
                        required
                        placeholder="YOUR FULL NAME"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-4 bg-white border border-onyx/15 text-xs text-onyx focus:outline-none focus:border-molten font-mono tracking-wide"
                      />
                      <input
                        type="email"
                        required
                        placeholder="BUSINESS EMAIL ADDRESS"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-4 bg-white border border-onyx/15 text-xs text-onyx focus:outline-none focus:border-molten font-mono tracking-wide"
                      />
                    </div>
                  </div>

                  {/* Step 2: Bottleneck */}
                  <div>
                    <label className="block text-[11px] font-mono text-onyx font-bold tracking-wider uppercase mb-2">
                      STEP 2 // WHAT IS THE BIGGEST OPERATIONAL BOTTLENECK SLOWING YOUR GROWTH RIGHT NOW?
                    </label>
                    <textarea
                      rows="5"
                      required
                      placeholder="Describe your current operational struggles, chaotic processes, or tasks that take up too much of your time..."
                      value={formData.bottleneck}
                      onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                      className="w-full p-4 bg-white border border-onyx/15 text-xs text-onyx focus:outline-none focus:border-molten font-sans resize-none leading-relaxed"
                    />
                  </div>

                  {/* Step 3: Retainer Agreement */}
                  <div>
                    <label className="block text-[11px] font-mono text-onyx font-bold tracking-wider uppercase mb-2">
                      STEP 3 // RETAINER AGREEMENT
                    </label>
                    <div className="relative flex items-start gap-3 p-4 bg-molten/5 border border-molten/20">
                      <input
                        type="checkbox"
                        id="committed"
                        required
                        checked={formData.committed}
                        onChange={(e) => setFormData({ ...formData, committed: e.target.checked })}
                        className="mt-1 cursor-pointer accent-molten"
                      />
                      <label htmlFor="committed" className="text-xs font-mono text-onyx/85 leading-relaxed cursor-pointer select-none font-semibold">
                        I agree to the 20% upfront retainer to secure my operational spot.
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="mt-auto flex flex-col gap-3 pt-4 border-t border-onyx/10">
                  <button
                    type="submit"
                    className="w-full py-4 bg-molten text-white hover:bg-onyx hover:border-onyx transition-all duration-200 font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-2 cursor-pointer border border-molten shadow-[4px_4px_0px_#121212]"
                  >
                    SUBMIT PARTNERSHIP REQUEST <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                  <p className="text-[11px] text-center font-mono text-onyx/60 font-bold">
                    Personally reviewed. Confidentiality guaranteed.
                  </p>
                </div>
              </form>
            ) : (
              /* Success Screen */
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-grow flex flex-col justify-center items-center text-center p-6 gap-6 font-mono"
              >
                <div className="w-16 h-16 rounded-full bg-forest-light/10 border border-forest-light flex items-center justify-center text-molten mb-2">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black uppercase text-onyx tracking-tighter leading-none font-display">
                  REQUEST RECEIVED
                </h3>
                
                <div className="p-4 border border-molten bg-molten/5 text-left w-full text-xs flex flex-col gap-2 text-onyx">
                  <div className="flex items-center gap-1.5 text-molten font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>CONFIDENTIAL REQUEST SECURED</span>
                  </div>
                  <div className="h-px bg-onyx/10 my-1" />
                  <div>
                    <span className="text-onyx/50">NAME:</span>{' '}
                    <span className="text-onyx font-bold">{formData.name}</span>
                  </div>
                  <div>
                    <span className="text-onyx/50">EMAIL:</span>{' '}
                    <span className="text-onyx font-bold">{formData.email}</span>
                  </div>
                  <div>
                    <span className="text-onyx/50">STATUS:</span>{' '}
                    <span className="text-molten font-bold font-mono">ACTIVE REVIEW</span>
                  </div>
                </div>

                <p className="text-xs text-onyx/70 font-sans leading-relaxed">
                  I review all partnership requests personally and will reach out to you within <span className="text-molten font-bold font-mono">2 hours</span>. Expect a personalized response outlining how we can fix your bottlenecks and save your time.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', bottleneck: '', committed: false });
                    onClose();
                  }}
                  className="px-6 py-3 border border-onyx/15 hover:border-molten hover:text-molten transition-colors text-[11px] uppercase tracking-wider mt-4 text-onyx font-mono cursor-pointer"
                >
                  Return to Site
                </button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
