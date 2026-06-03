import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const services = [
  {
    number: '01',
    id: 'visibility',
    label: 'Visibility',
    labelColor: 'bg-molten/10 text-molten-dark border-molten/20',
    title: <>Your audience will <span className="bg-onyx text-molten-light px-2 py-0.5 rounded-sm inline-block -my-1">grow consistently</span> — without you writing a single caption or planning a single post.</>,
    description: 'Most coaches and course creators go quiet online the moment things get busy — and that silence kills momentum. I plan and create your content so your brand stays visible, consistent, and attracting the right people every single week.',
    tags: ['Content calendar', 'Caption writing', 'Scheduling', 'Platform management']
  },
  {
    number: '02',
    id: 'presence',
    label: 'Presence',
    labelColor: 'bg-molten/10 text-molten-dark border-molten/20',
    title: <>Your website will <span className="bg-onyx text-molten-light px-2 py-0.5 rounded-sm inline-block -my-1">be built to convert</span> — reflecting the premium standard of your offer.</>,
    description: 'A confusing or outdated website quietly loses you leads every day. I use modern AI-powered tools to build and maintain a clean, fast, conversion-focused site (pricing for custom builds discussed separately) — no bloated agency fees, no unnecessary delays.',
    tags: ['AI-assisted website setup', 'Updates & maintenance', 'Copy & layout improvements']
  },
  {
    number: '03',
    id: 'time',
    label: 'Time',
    labelColor: 'bg-molten/10 text-molten-dark border-molten/20',
    title: <>You'll <span className="bg-onyx text-molten-light px-2 py-0.5 rounded-sm inline-block -my-1">reclaim 10+ hours</span> a week — and never lose a lead to a missed email or forgotten follow-up.</>,
    description: 'Inbox chaos, double-booked calendars, and cold leads are silently costing you money. I own your email, block your calendar around your priorities, and make sure every client and lead gets a timely response — without you lifting a finger.',
    tags: ['Inbox management', 'Calendar blocking', 'Client follow-ups', 'Scheduling coordination']
  },
  {
    number: '04',
    id: 'retention',
    label: 'Retention',
    labelColor: 'bg-molten/10 text-molten-dark border-molten/20',
    title: <>Your email list will <span className="bg-onyx text-molten-light px-2 py-0.5 rounded-sm inline-block -my-1">stay warm and converting</span> — turning subscribers into repeat buyers.</>,
    description: "Most revenue isn't lost to bad marketing — it's lost to silence after the first sale. I write and send your newsletters and follow-up sequences so your audience stays engaged, your authority keeps building, and sales happen consistently.",
    tags: ['Email newsletters', 'Nurture sequences', 'List management', 'Tools: GoHighLevel / Mailchimp']
  }
];

export default function ServicesBento() {
  const [expandedId, setExpandedId] = useState('visibility'); // First one expanded by default

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="relative w-full py-24 md:py-32 bg-white border-b border-onyx/10 overflow-hidden brutalist-grid">
      <div className="absolute right-10 top-[-40px] text-[20rem] md:text-[32rem] font-bold font-mono text-onyx/[0.02] pointer-events-none leading-none z-0">04</div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-xs text-molten font-bold tracking-widest uppercase">
              // SERVICES_04
            </span>
            <span className="h-px bg-onyx/15 flex-grow" />
            <span className="font-mono text-xs text-onyx/40">WHAT I DO FOR YOU</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-onyx mb-4 font-display uppercase tracking-tight">
            Outcomes, not just checklists.
          </h2>
          <p className="text-lg md:text-xl text-onyx/70 font-sans font-medium max-w-2xl">
            You hired me for results — here's exactly what changes when we work together.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="border border-onyx/10 bg-white shadow-sm flex flex-col"
        >
          {services.map((service, index) => {
            const isExpanded = expandedId === service.id;
            return (
              <div 
                key={service.number} 
                className={`transition-colors duration-300 ${index !== services.length - 1 ? 'border-b border-onyx/10' : ''} ${isExpanded ? 'bg-onyx/[0.01]' : 'hover:bg-onyx/[0.01]'}`}
              >
                <button
                  onClick={() => toggleExpand(service.id)}
                  className="w-full p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start md:items-center gap-4 pr-4">
                    <span className="font-mono text-sm font-bold text-onyx/30 mt-1 md:mt-0 shrink-0">{service.number}</span>
                    <h3 className="text-lg md:text-xl font-bold text-onyx leading-snug group-hover:text-molten transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-4 shrink-0 mt-4 md:mt-0 self-end md:self-auto">
                    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded border ${service.labelColor}`}>
                      {service.label}
                    </span>
                    <div className={`p-1.5 border border-onyx/15 transition-colors duration-300 shrink-0 ${isExpanded ? 'bg-molten border-molten text-white' : 'bg-transparent text-onyx/40 group-hover:text-onyx group-hover:border-onyx'}`}>
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
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
                      <div className="pb-8 px-6 md:px-8 md:pl-[68px]">
                        <p className="text-onyx/70 text-sm md:text-base leading-relaxed mb-6 font-sans">
                          {service.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag, idx) => (
                            <span 
                              key={idx} 
                              className={`px-3 py-1.5 text-xs font-medium border rounded font-sans transition-colors ${
                                tag.startsWith('Tools:') 
                                  ? 'bg-molten/5 text-molten-dark border-molten/20' 
                                  : 'bg-onyx/[0.02] text-onyx/70 border-onyx/10'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
