import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Mail, Calendar, Search, Layers, Check } from 'lucide-react';

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

// Magnetic Glass Card Component with scroll-trigger animation support
function BentoCard({ children, className = '', span = 'col-span-1' }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;
    x.set(relativeX * 16);
    y.set(relativeY * 16);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      variants={slideUpItem}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`bento-glass p-6 md:p-8 flex flex-col justify-between overflow-hidden relative cursor-default group ${span} ${className}`}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255,255,255,0.15), transparent 80%)',
        }}
        ref={(el) => {
          if (!el || !ref.current) return;
          ref.current.addEventListener('mousemove', (e) => {
            const rect = ref.current.getBoundingClientRect();
            el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
          });
        }}
      />
      <motion.div
        style={{ x: springX, y: springY, transformStyle: 'preserve-3d' }}
        className="h-full flex flex-col justify-between relative z-10"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// 1. Inbox Zero Triage Console Mockup Component
function InboxZeroMockup() {
  const [activeRow, setActiveRow] = useState(null);
  const rows = [
    { time: '10:14 AM', subject: 'Urgent system shift', action: 'ARCHIVED & ACTIONED', color: 'border-onyx/20 text-onyx/60' },
    { time: '09:30 AM', subject: 'Tech stack integration', action: 'DISPATCHED TO NOTION', color: 'border-molten/40 text-molten' },
    { time: '08:45 AM', subject: 'Calendar sync conflict', action: 'RESOLVED', color: 'border-onyx/20 text-onyx/60' },
  ];

  return (
    <div className="w-full border border-onyx/10 bg-onyx/[0.02] p-4 rounded flex flex-col justify-between h-[180px] font-mono text-[10px] md:text-xs">
      <div className="flex justify-between items-center pb-2 border-b border-onyx/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold tracking-tight text-onyx">LIVE TRIAGE ACTIVE</span>
        </div>
        <span className="text-onyx/40 text-[9px]">UNREAD: 0</span>
      </div>
      <div className="flex flex-col gap-2 my-2">
        {rows.map((row, idx) => (
          <div 
            key={idx} 
            className={`flex justify-between items-center p-2 border rounded bg-white transition-all duration-300 cursor-pointer ${
              activeRow === idx ? 'border-molten/80 shadow-sm scale-[1.01]' : 'border-onyx/5'
            }`}
            onMouseEnter={() => setActiveRow(idx)}
            onMouseLeave={() => setActiveRow(null)}
          >
            <div className="flex gap-2 items-center min-w-0">
              <span className="text-onyx/40 text-[9px] shrink-0">{row.time}</span>
              <span className="truncate font-sans font-medium text-onyx/80">{row.subject}</span>
            </div>
            <span className={`text-[9px] font-bold tracking-wider shrink-0 px-2 py-0.5 border rounded transition-colors duration-200 ${
              activeRow === idx ? 'bg-molten text-white border-molten' : 'bg-onyx/[0.02] border-onyx/10 ' + row.color
            }`}>
              {row.action}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[8px] text-onyx/30 border-t border-onyx/5 pt-1.5">
        <span>RATE: 100% INBOX ZERO</span>
        <span>INDEX: ACTIVE</span>
      </div>
    </div>
  );
}

// 2. Protected Focus Calendar Mockup Component
function CalendarMockup() {
  const days = [
    {
      name: 'MON',
      blocks: [
        { label: 'DEEP WORK', duration: '9-12', premium: true },
        { label: 'OPS SYNC', duration: '13-14', active: true },
      ]
    },
    {
      name: 'TUE',
      blocks: [
        { label: 'TRIAGE', duration: '9-10', active: false },
        { label: 'DEEP WORK', duration: '10-13', premium: true },
      ]
    },
    {
      name: 'WED',
      blocks: [
        { label: 'DEEP WORK', duration: '9-12', premium: true },
        { label: 'STRATEGY', duration: '14-16', active: true },
      ]
    }
  ];

  return (
    <div className="w-full mt-4 border border-onyx/10 bg-onyx/[0.01] p-3 rounded font-mono text-[9px]">
      <div className="grid grid-cols-3 gap-2">
        {days.map((day, dIdx) => (
          <div key={dIdx} className="flex flex-col gap-1.5 border-r border-onyx/5 last:border-r-0 pr-1.5 last:pr-0">
            <span className="text-center font-bold text-onyx/40 mb-1">{day.name}</span>
            {day.blocks.map((block, bIdx) => (
              <div 
                key={bIdx} 
                className={`p-1.5 border rounded text-center transition-all duration-300 cursor-pointer ${
                  block.premium 
                    ? 'bg-onyx text-white border-onyx hover:bg-onyx/90' 
                    : block.active
                      ? 'bg-molten/5 border-molten text-molten hover:bg-molten hover:text-white'
                      : 'bg-white border-onyx/10 text-onyx/70 hover:border-onyx/40'
                }`}
              >
                <div className="font-bold tracking-tight text-[8px] truncate">{block.label}</div>
                <div className="text-[7px] opacity-60 mt-0.5">{block.duration}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. Automation Flow Node Map Mockup Component
function AutomationMockup() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { title: 'FORM INTAKE', desc: 'Lead qualifies' },
    { title: 'NOTION SYNC', desc: 'Database active' },
    { title: 'SLACK TRIAGE', desc: 'Alert dispatched' },
    { title: 'DASHBOARD UPDATED', desc: 'System synced' }
  ];

  return (
    <div className="w-full border border-onyx/10 bg-onyx/[0.02] p-4 rounded flex flex-col justify-between h-[180px] font-mono text-[10px] md:text-xs">
      <div className="flex justify-between items-center pb-2 border-b border-onyx/10">
        <span className="font-bold text-onyx">ACTIVE FLOW PIPELINE</span>
        <span className="text-[8px] bg-molten/10 text-molten px-2 py-0.5 border border-molten/20 rounded">LATENCY: 0.1s</span>
      </div>
      <div className="grid grid-cols-2 gap-2 my-2">
        {steps.map((step, idx) => (
          <div 
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`p-2.5 border rounded cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
              activeStep === idx 
                ? 'border-molten bg-white shadow-sm scale-[1.01]' 
                : 'border-onyx/5 bg-white hover:border-onyx/20'
            }`}
          >
            <div className="flex justify-between items-start">
              <span className={`text-[8px] font-bold px-1.5 py-0.2 border rounded ${
                activeStep === idx ? 'bg-molten text-white border-molten' : 'bg-onyx/[0.02] text-onyx/40 border-onyx/10'
              }`}>
                0{idx + 1}
              </span>
              {activeStep === idx && (
                <span className="w-1.5 h-1.5 rounded-full bg-molten animate-ping" />
              )}
            </div>
            <div className="mt-2 text-left">
              <div className="font-bold tracking-tight text-onyx leading-none mb-1 text-[9px] md:text-[10px]">{step.title}</div>
              <div className="text-[8px] text-onyx/50 leading-none">{step.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center text-[8px] text-onyx/30 border-t border-onyx/5 pt-1.5">
        <span>STATUS: ACTIVE</span>
        <span className="flex items-center gap-1 font-bold text-emerald-500">
          <Check className="w-2.5 h-2.5" /> SYNCED
        </span>
      </div>
    </div>
  );
}

export default function ServicesBento() {
  return (
    <section id="services" className="relative w-full border-b border-onyx/10 overflow-hidden brutalist-grid py-24 md:py-32 bg-white">
      <div className="absolute right-10 top-[-40px] text-[20rem] md:text-[32rem] font-bold font-mono text-onyx/[0.02] select-none pointer-events-none leading-none z-0">04</div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-molten font-bold tracking-widest">// SERVICES_04</span>
          <span className="h-px bg-onyx/15 flex-grow" />
          <span className="font-mono text-xs text-onyx/40">WHAT I DO FOR YOU</span>
        </div>

        {/* Staggered Bento Grid Wrapper */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{ willChange: 'transform' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[300px]"
        >
          {/* Card 1: Inbox/Comms (Double Width) */}
          <BentoCard span="md:col-span-2" className="min-h-[300px] md:min-h-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                  <div className="p-3 border border-onyx bg-onyx text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-onyx/40 font-bold lg:hidden">01</span>
                </div>
                <div className="mt-4 text-left">
                  <span className="hidden lg:block font-mono text-xs text-onyx/40 font-bold mb-2">01</span>
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-3 text-onyx font-display">INBOX & STUDENT SUPPORT</h4>
                  <p className="text-sm md:text-base text-onyx/80 leading-relaxed font-sans">
                    I manage your inbox and student support, filtering out the noise and handling inquiries so you can focus on high-value conversations.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6 w-full">
                <InboxZeroMockup />
              </div>
            </div>
          </BentoCard>
 
          {/* Card 2: Calendar */}
          <BentoCard className="min-h-[300px] md:min-h-0">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start">
                  <div className="p-3 border border-onyx bg-onyx text-white">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-onyx/40 font-bold">02</span>
                </div>
                <div className="mt-4 text-left">
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-2 text-onyx font-display">CALENDAR & TIME PROTECTION</h4>
                  <p className="text-sm text-onyx/80 leading-relaxed font-sans">
                    I structure your schedule and fiercely protect your deep work time, ensuring your podcast interviews, internal syncs, and boundaries are respected.
                  </p>
                </div>
              </div>
              <CalendarMockup />
            </div>
          </BentoCard>
 
          {/* Card 3: Research */}
          <BentoCard className="min-h-[300px] md:min-h-0">
            <div className="flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <div className="p-3 border border-onyx bg-onyx text-white">
                  <Search className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-onyx/40 font-bold">03</span>
              </div>
              <div className="mt-4 text-left">
                <h4 className="text-2xl font-black uppercase tracking-tight mb-3 text-onyx font-display">RESEARCH & CONTENT PREP</h4>
                <p className="text-sm md:text-base text-onyx/80 leading-relaxed font-sans">
                  I research market trends and prep your course materials, turning raw data into clear summaries for your next launch.
                </p>
              </div>
            </div>
          </BentoCard>
 
          {/* Card 4: Systems & Integrations (Double Width) */}
          <BentoCard span="md:col-span-2" className="min-h-[300px] md:min-h-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                  <div className="p-3 border border-onyx bg-onyx text-white">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-onyx/40 font-bold lg:hidden">04</span>
                </div>
                <div className="mt-4 text-left">
                  <span className="hidden lg:block font-mono text-xs text-onyx/40 font-bold mb-2">04</span>
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-3 text-onyx font-display">PLATFORMS & LAUNCH SYSTEMS</h4>
                  <p className="text-sm md:text-base text-onyx/80 leading-relaxed font-sans font-medium">
                    I set up and manage your course platforms and automate repetitive tasks to keep your launch systems flowing without friction.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6 w-full">
                <AutomationMockup />
              </div>
            </div>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  );
}
