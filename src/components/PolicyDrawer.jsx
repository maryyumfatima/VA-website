import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert, FileText, CheckCircle, ShieldCheck, Key, Cpu } from 'lucide-react';

export default function PolicyDrawer({ isOpen, type, onClose }) {
  const getHeaderTitle = () => {
    switch (type) {
      case 'privacy':
        return 'PRIVACY POLICY';
      case 'terms':
        return 'TERMS OF SERVICE';
      case 'trust':
        return 'TRUST CENTER';
      default:
        return 'GOVERNANCE';
    }
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

          {/* Policy Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xl glass-modal p-6 md:p-8 flex flex-col h-full overflow-y-auto border-l border-onyx/15 text-onyx"
            style={{ willChange: 'transform' }}
          >
            {/* Header */}
            <div className="flex justify-between items-center pb-6 border-b border-onyx/10 mb-6">
              <div>
                <span className="text-[10px] tracking-[0.2em] font-mono text-molten font-bold uppercase block mb-1">
                  // GOVERNANCE & TRUST PROTOCOL
                </span>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase text-onyx font-display">
                  {getHeaderTitle()}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 border border-onyx/10 hover:border-molten hover:text-molten transition-colors duration-200 bg-onyx/5 cursor-pointer rounded-none text-onyx"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Rendering based on type */}
            {type === 'privacy' && (
              /* ── Privacy Policy ── */
              <div className="flex-grow flex flex-col gap-6 font-sans text-sm text-onyx/75 leading-relaxed">
                {/* Alert Banner */}
                <div className="flex items-start gap-3 p-4 bg-molten/8 border border-molten/30">
                  <ShieldAlert className="w-6 h-6 text-molten flex-shrink-0 mt-0.5" />
                  <div className="font-mono text-xs text-onyx">
                    <span className="font-bold text-molten font-sans">SECURITY GUARANTEE: </span>
                    I operate with high security. I only request account access when absolutely necessary and never store or save your passwords or business data on local devices.
                  </div>
                </div>

                {[
                  {
                    title: '1. DATA ACCESS AND SCOPE',
                    body: 'I only access information necessary to complete designated tasks. I do not track, collect, or share your business data.'
                  },
                  {
                    title: '2. SECURE ACCOUNT SHARING',
                    body: 'All system accounts and logins must be shared securely via standard password sharing platforms like Bitwarden. Direct password sharing via email, Slack, or SMS is strictly prohibited to keep your data safe.'
                  },
                  {
                    title: '3. CONFIDENTIALITY',
                    body: 'Your business is your intellectual property. All research, processes, calendars, draft content, client details, and business strategies remain completely confidential. No data is ever shared with third parties.'
                  },
                  {
                    title: '4. ACCESS REVOCATION',
                    body: 'Upon ending our contract, all active login sessions, shared account permissions, and passwords will be immediately removed and deleted from my devices.'
                  }
                ].map((section) => (
                  <div key={section.title} className="flex flex-col gap-2">
                    <h3 className="text-xs font-mono text-onyx font-bold uppercase border-b border-onyx/10 pb-2 tracking-wider">
                      {section.title}
                    </h3>
                    <p>{section.body}</p>
                  </div>
                ))}
              </div>
            )}

            {type === 'terms' && (
              /* ── Terms of Service ── */
              <div className="flex-grow flex flex-col gap-6 font-sans text-sm text-onyx/75 leading-relaxed">
                {/* Alert Banner */}
                <div className="flex items-start gap-3 p-4 bg-molten/8 border border-molten/30">
                  <FileText className="w-6 h-6 text-molten flex-shrink-0 mt-0.5" />
                  <div className="font-mono text-xs text-onyx">
                    <span className="font-bold text-molten font-sans">RESPONSE PROTOCOL: </span>
                    Urgent issues are monitored closely during the business day, with a guaranteed reply and initial action within 2 hours.
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xs font-mono text-onyx font-bold uppercase border-b border-onyx/10 pb-2 tracking-wider">
                    1. SCOPE OF ENGAGEMENT
                  </h3>
                  <p>
                    Services include operations management, inbox/calendar organization, lead tracking, database research, content scheduling, minor website updates, and setting up automated workflows to support lead generation.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-xs font-mono text-onyx font-bold uppercase border-b border-onyx/10 pb-2 tracking-wider">
                    2. RESPONSE TIMES & AVAILABILITY
                  </h3>
                  <ul className="list-none space-y-2 pl-0">
                    {[
                      'URGENT ISSUES: Response within 2 hours.',
                      'STANDARD WORK: Response within 24 hours.',
                      'OFF-HOURS: Checked the following business day.'
                    ].map((item) => (
                      <li key={item} className="flex gap-2 items-start text-xs font-mono text-onyx/80">
                        <CheckCircle className="w-4 h-4 text-molten flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xs font-mono text-onyx font-bold uppercase border-b border-onyx/10 pb-2 tracking-wider">
                    3. SCALING & OVERAGES
                  </h3>
                  <p>
                    If operational demands exceed the contracted weekly allocation, we will pause and notify you to discuss a scope alignment. Task backlogs are managed transparently via our shared client board.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xs font-mono text-onyx font-bold uppercase border-b border-onyx/10 pb-2 tracking-wider">
                    4. FOUNDER ALIGNED EXPECTATIONS
                  </h3>
                  <p>
                    I operate as a direct extension of your business. Open communication and timely access to necessary systems and details are expected so I can address tasks promptly.
                  </p>
                </div>
              </div>
            )}

            {type === 'trust' && (
              /* ── Trust Center ── */
              <div className="flex-grow flex flex-col gap-6 font-sans text-sm text-onyx/75 leading-relaxed">
                {/* Alert Banner */}
                <div className="flex items-start gap-3 p-4 bg-molten/8 border border-molten/30">
                  <ShieldCheck className="w-6 h-6 text-molten flex-shrink-0 mt-0.5" />
                  <div className="font-mono text-xs text-onyx">
                    <span className="font-bold text-molten font-sans">TRUST CENTRE ACTIVE: </span>
                    Operating under strict security. Your business accounts and workspaces are kept private, secure, and protected.
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Key className="w-4.5 h-4.5 text-molten" />
                    <h3 className="text-xs font-mono text-onyx font-bold uppercase border-b border-onyx/10 pb-2 tracking-wider flex-grow">
                      1. SECURE PASSWORD SHARING
                    </h3>
                  </div>
                  <p className="pl-6.5 text-xs">
                    All business passwords and account access are shared securely via private vaults (using Bitwarden). I never save your passwords directly, ensuring your accounts remain fully secure.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-4.5 h-4.5 text-molten" />
                    <h3 className="text-xs font-mono text-onyx font-bold uppercase border-b border-onyx/10 pb-2 tracking-wider flex-grow">
                      2. CONFIDENTIALITY AGREEMENT
                    </h3>
                  </div>
                  <p className="pl-6.5 text-xs">
                    All communications, documents, client lists, process setups, and research are protected by strict confidentiality. No portfolio items or public case studies are ever shared without your clear permission.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Cpu className="w-4.5 h-4.5 text-molten" />
                    <h3 className="text-xs font-mono text-onyx font-bold uppercase border-b border-onyx/10 pb-2 tracking-wider flex-grow">
                      3. SECURE AI PRACTICE
                    </h3>
                  </div>
                  <p className="pl-6.5 text-xs">
                    Your business strategies, proprietary processes, and sensitive datasets are never shared with public AI models or used for training. I ensure secure, private settings to guarantee your data boundaries.
                  </p>
                </div>
              </div>
            )}

            {/* Close Button */}
            <div className="mt-8 pt-4 border-t border-onyx/10 text-center">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-onyx text-white border border-onyx hover:bg-molten hover:border-molten transition-colors duration-200 text-[11px] uppercase tracking-wider font-mono w-full cursor-pointer"
              >
                Close Governance Panel
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
