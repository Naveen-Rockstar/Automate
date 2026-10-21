import React from 'react';
import InteractiveCapabilitiesShowcase from '../components/InteractiveCapabilitiesShowcase';
import './ServicesSection.css';

export default function ServicesSection() {
  return (
    <section id="services" className="services-section" aria-labelledby="services-title">
      <div className="services-container">
        {/* Interactive Capability Showcase */}
        <InteractiveCapabilitiesShowcase defaultActiveId="ai-agents" showHeader={true} />
      </div>
    </section>
  );
}
