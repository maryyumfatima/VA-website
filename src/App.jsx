import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThePromise from './components/ThePromise';
import TrustManifesto from './components/TrustManifesto';
import ServicesBento from './components/ServicesBento';
import Pricing from './components/Pricing';
import OperationalAudit from './components/OperationalAudit';
import FAQAccordion from './components/FAQAccordion';
import TechMarquee from './components/TechMarquee';
import ThePerson from './components/ThePerson';
import Footer from './components/Footer';
import ProposalDrawer from './components/ProposalDrawer';
import PolicyDrawer from './components/PolicyDrawer';
import PartnershipProtocol from './components/PartnershipProtocol';
import './App.css';

export default function App() {
  // Drawer States
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [policyType, setPolicyType] = useState('privacy'); // privacy | terms | trust

  const handleOpenPolicy = (type) => {
    setPolicyType(type);
    setIsPolicyOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-onyx overflow-hidden">
      {/* Premium Analog Noise Grain Overlay */}
      <div className="noise-overlay" />

      {/* Main Structural Layout Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 brutalist-grid opacity-75" />

      {/* Structured Container */}
      <div className="relative z-10 flex flex-col min-h-screen max-w-7xl mx-auto border-x border-onyx/10">
        
        {/* Navigation bar */}
        <Navbar onOpenProposal={() => setIsProposalOpen(true)} />

        {/* Core Content */}
        <main className="flex-grow">
          {/* Section 01: Hero */}
          <Hero onOpenProposal={() => setIsProposalOpen(true)} />

          {/* Section 02: The Promise */}
          <ThePromise />

          {/* Section 03: Trust Manifesto */}
          <TrustManifesto />

          {/* Section 04: Service Bento Grid */}
          <ServicesBento />

          {/* Section 05: Pricing / Investment */}
          <Pricing onOpenProposal={() => setIsProposalOpen(true)} />

          {/* Section 06: Operational Debt Audit */}
          <OperationalAudit onOpenProposal={() => setIsProposalOpen(true)} />

          {/* Section 07: FAQ Accordion */}
          <FAQAccordion />
          <PartnershipProtocol />

          {/* Section 08: Tech Marquee */}
          <TechMarquee />

          {/* Section 09: The Person */}
          <ThePerson />
        </main>

        {/* Footer */}
        <Footer onOpenPolicy={handleOpenPolicy} />

      </div>

      {/* Interactive Drawers */}
      <ProposalDrawer 
        isOpen={isProposalOpen} 
        onClose={() => setIsProposalOpen(false)} 
      />

      <PolicyDrawer 
        isOpen={isPolicyOpen} 
        type={policyType} 
        onClose={() => setIsPolicyOpen(false)} 
      />
    </div>
  );
}
