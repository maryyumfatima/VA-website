import React from 'react';
import { Lock, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenPolicy }) {
  return (
    <footer className="w-full border-t border-onyx/10 bg-white relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 font-mono text-[10px] tracking-wider text-onyx/50 uppercase">
        
        {/* Brand & Copyright */}
        <div className="text-left">
          <div className="flex flex-col items-start leading-none gap-1 mb-2">
            <span className="font-display text-sm font-black tracking-tight text-onyx uppercase">
              Maryyum <span className="text-molten">Fatima</span>
            </span>
            <span className="font-mono text-[8px] text-onyx/40 font-bold uppercase tracking-widest">
              EXECUTIVE OPERATIONS PARTNER
            </span>
          </div>
          <p className="text-[9px] text-onyx/40 leading-relaxed font-sans mt-2">
            SYSTEM ENGINE OPERATING UNDER RETENTION OP-01. © 2026 Maryyum Fatima. All Rights Reserved.
          </p>
        </div>

        {/* Security / Encryption status badge */}
        <div className="flex items-center gap-2 border border-onyx/10 px-3 py-1.5 bg-onyx/5">
          <Lock className="w-3.5 h-3.5 text-molten" />
          <span>SECURE PASSWORD PROTECTION ACTIVE</span>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold">
          <button
            onClick={() => onOpenPolicy('privacy')}
            className="text-onyx/65 hover:text-molten transition-colors cursor-pointer"
          >
            PRIVACY POLICY
          </button>
          <span className="text-onyx/10 select-none">|</span>
          <button
            onClick={() => onOpenPolicy('terms')}
            className="text-onyx/65 hover:text-molten transition-colors cursor-pointer"
          >
            TERMS OF SERVICE
          </button>
          <span className="text-onyx/10 select-none">|</span>
          <button
            onClick={() => onOpenPolicy('trust')}
            className="text-onyx/75 hover:text-molten transition-colors cursor-pointer flex items-center gap-1 text-onyx font-black"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-forest-light" />
            <span>TRUST CENTER</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
