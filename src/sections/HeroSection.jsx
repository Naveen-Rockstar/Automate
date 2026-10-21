import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Button from '../components/Button';
import WorkflowDiagram from '../components/WorkflowDiagram';
import './HeroSection.css';

/**
 * HeroSection Component
 * 
 * Expansive, architectural hero composition for Hutomate.
 * Features oversized editorial typography, immediate visibility of all 4 services,
 * dual-region trust microcopy, and the connected workflow architecture diagram.
 */
export default function HeroSection() {
  const integrations = [
    'Slack',
    'Gmail',
    'WhatsApp',
    'HubSpot',
    'Zapier',
    'Google Sheets',
    'Salesforce',
    'Notion',
  ];

  return (
    <section className="hero-section" id="hero" aria-label="Hutomate Hero Section">
      <div className="hero-container">
        {/* Expansive Architectural Canvas */}
        <div className="hero-canvas">
          {/* Subtle Ambient Background Gradient */}
          <div className="hero-canvas-glow" aria-hidden="true" />

          {/* Top Editorial Block */}
          <div className="hero-editorial-block">
            {/* Top Eyebrow */}
            <div className="hero-eyebrow-wrap">
              <SectionLabel text="Intelligent Enterprise Automation" />
            </div>

            {/* Main Hero Headline */}
            <h1 className="hero-headline">
              Automate the Work.
              <br />
              <span className="hero-headline-accent">Accelerate the Business.</span>
            </h1>

            {/* Subtext description */}
            <p className="hero-subtext">
              We build AI agents, automate your workflows, and create intelligent systems that help businesses save time, reduce manual work, and grow faster.
            </p>

            {/* Call to action & trust microcopy */}
            <div className="hero-cta-group">
              <Button variant="primary" size="lg" arrow href="#contact">
                Discuss Your Project
              </Button>
              <div className="hero-microcopy">
                <span className="microcopy-badge" aria-hidden="true">
                  <span className="region-indicator">IND</span>
                  <span className="region-divider">/</span>
                  <span className="region-indicator">USA</span>
                </span>
                <span>For businesses in India and the USA</span>
              </div>
            </div>
          </div>

          {/* Connected Workflow Architecture Diagram (Expansive & visible above fold) */}
          <div className="hero-diagram-wrapper">
            <WorkflowDiagram />
          </div>
        </div>

        {/* Integration Strip Below Hero Canvas */}
        <div className="hero-integrations-strip">
          <span className="integrations-label">Works seamlessly with:</span>
          <div className="integrations-tags">
            {integrations.map((item) => (
              <span key={item} className="integration-chip">
                {item}
              </span>
            ))}
            <span className="integration-chip integration-chip-more">and 200+ more platforms</span>
          </div>
        </div>
      </div>
    </section>
  );
}
