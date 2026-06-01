import React from 'react';
import { Activity } from 'lucide-react';

export default function Navbar({ onOpenProposal }) {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-onyx/10 bg-white/75 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex flex-col items-start leading-none gap-0.5">
          <span className="font-display text-sm font-black tracking-tight text-onyx uppercase">
            Maryyum <span className="text-molten">Fatima</span>
          </span>
          <span className="font-mono text-[8px] text-onyx/50 font-bold uppercase tracking-widest">
            EXECUTIVE OPERATIONS PARTNER
          </span>
        </div>

        {/* Live Status Indicator */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-forest/10 border border-forest/20 rounded-none font-mono text-[10px] text-onyx/80">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-light opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-forest-light"></span>
          </span>
          <span>STATUS: <span className="text-forest-light font-bold">ONLINE</span></span>
          <span className="text-onyx/20">|</span>
          <span>1-FOUNDER CAPACITY</span>
        </div>

        {/* Action Button */}
        <button
          onClick={onOpenProposal}
          className="relative px-5 py-2 bg-onyx text-white border border-onyx hover:bg-molten hover:border-molten transition-all duration-300 font-mono text-xs font-semibold tracking-wider flex items-center gap-1.5 cursor-pointer"
        >
          <span>PARTNERSHIP REQUEST</span>
        </button>
      </div>
    </header>
  );
}
