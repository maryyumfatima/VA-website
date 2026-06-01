import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldAlert, Zap } from 'lucide-react';

export default function WorkingModel() {
  return (
    <section className="relative w-full border-b border-onyx/10 overflow-hidden brutalist-grid py-20 md:py-28">
      {/* Background Motif */}
      <div className="absolute left-10 top-[-40px] text-[20rem] md:text-[32rem] font-bold font-mono text-onyx/[0.03] select-none pointer-events-none leading-none z-0">
        02
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-molten font-bold tracking-widest">// MODEL-02</span>
          <span className="h-px bg-onyx/15 flex-grow" />
          <span className="font-mono text-xs text-onyx/40">OPERATIONAL INTENSITY</span>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
          
          {/* Left Column: Swiss Poster Block */}
          <div className="lg:col-span-7 flex flex-col justify-between border-2 border-onyx p-6 md:p-8 bg-onyx text-white relative overflow-hidden select-none">
            {/* Swiss Grid Top Bar */}
            <div className="flex justify-between items-start w-full border-b border-white/20 pb-4 mb-8 font-mono text-xs font-bold uppercase tracking-wider">
              <span>DESIGNATION: INTENSE ENGAGEMENT</span>
              <span className="text-molten">ACTIVE BLOCK</span>
            </div>

            {/* Poster Main Text */}
            <div className="my-auto">
              <h3 className="text-6xl sm:text-8xl font-black tracking-tighter leading-none uppercase text-white font-sans">
                6 HOURS
              </h3>
              <div className="h-2 bg-molten my-2 w-full" />
              <h3 className="text-5xl sm:text-7xl font-bold tracking-tight leading-none uppercase text-white font-sans">
                / DAY
              </h3>
            </div>

            {/* Poster Footer Bar */}
            <div className="border-t border-white/20 pt-4 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-end font-mono text-[10px] uppercase tracking-wide gap-2">
              <div>
                <span className="block text-white/50">MAX INTENSITY RATE</span>
                <span className="font-bold">GUARANTEED ALLOCATION</span>
              </div>
              <div className="text-right">
                <span className="block text-white/50">SLA ENFORCEMENT</span>
                <span className="font-bold">2-HOUR URGENT RESPONSE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Urgency thesis and operational blocks */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 text-left">
            {/* The Urgency Note Block */}
            <div className="glass-card p-6 flex flex-col justify-between h-full relative">
              <div className="absolute top-0 right-0 p-2 border-l border-b border-onyx bg-white/10 text-white">
                <ShieldAlert className="w-5 h-5" />
              </div>
              
              <div>
                <span className="font-mono text-xs text-white/90 font-bold uppercase block mb-3">// URGENCY PROTOCOL</span>
                <p className="text-lg md:text-xl font-bold uppercase tracking-tight text-white leading-snug mb-4">
                  "Round-the-day management of urgent tasks and strategic operations. I am the bridge between your strategy and execution."
                </p>
              </div>

              <div className="border-t border-white/20 pt-4 mt-2 font-mono text-xs text-white/80 leading-relaxed">
                As a client, you unlock direct escalation paths. Standard requests move asynchronously, but operational emergencies trigger a dedicated notification channel for immediate resolution.
              </div>
            </div>

            {/* Key Operational Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 font-mono flex flex-col gap-1">
                <div className="text-xs text-white font-bold flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> SPEED
                </div>
                <div className="text-xl font-bold uppercase tracking-tight text-white">
                  &lt; 2 HR SLA
                </div>
                <div className="text-[10px] text-white/85 font-sans leading-tight">
                  Acknowledgment & action window for operational fire drills.
                </div>
              </div>

              <div className="glass-card p-4 font-mono flex flex-col gap-1">
                <div className="text-xs text-white font-bold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> SCHEDULE
                </div>
                <div className="text-xl font-bold uppercase tracking-tight text-white">
                  30 H / WK
                </div>
                <div className="text-[10px] text-white/85 font-sans leading-tight">
                  Calculated cap ensuring focus on maximum 3 active clients.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
