import React from 'react';

export default function TechMarquee() {
  const tools = [
    { name: 'GMAIL', color: 'hover:text-white hover:border-molten hover:bg-molten' },
    { name: 'G-CALENDAR', color: 'hover:text-white hover:border-[#4285F4] hover:bg-[#4285F4]' },
    { name: 'SLACK', color: 'hover:text-white hover:border-[#E01E5A] hover:bg-[#E01E5A]' },
    { name: 'NOTION', color: 'hover:text-white hover:border-onyx hover:bg-onyx' },
    { name: 'CLICKUP', color: 'hover:text-white hover:border-[#7B68EE] hover:bg-[#7B68EE]' },
    { name: 'WIX STUDIO', color: 'hover:text-white hover:border-onyx hover:bg-onyx' },
    { name: 'HUBSPOT', color: 'hover:text-white hover:border-[#FF7A59] hover:bg-[#FF7A59]' },
    { name: 'MONDAY.COM', color: 'hover:text-white hover:border-[#00CFF4] hover:bg-[#00CFF4]' }
  ];

  // Double the tools list to allow seamless loop
  const doubleTools = [...tools, ...tools, ...tools];

  return (
    <section className="relative w-full border-b border-onyx/10 py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Monospace Indicator */}
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs text-molten font-bold tracking-widest">// STACK INTEGRATION_05</span>
          <span className="h-px bg-onyx/15 flex-grow" />
          <span className="font-mono text-xs text-onyx/40">NATIVE TOOLSETS & PLATFORMS</span>
        </div>

        {/* Marquee Container */}
        <div className="marquee-outer w-full py-4 border-y border-onyx/10 bg-white">
          <div className="marquee-track flex gap-8 items-center">
            {doubleTools.map((tool, idx) => (
              <div
                key={`${tool.name}-${idx}`}
                className={`marquee-item px-8 py-4 border border-onyx/10 bg-white text-onyx/40 text-sm font-mono font-bold tracking-widest uppercase transition-all duration-300 cursor-default select-none ${tool.color}`}
              >
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
