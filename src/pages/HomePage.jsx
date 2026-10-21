import React from 'react';
import { ArrowRight } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import HeroSection from '../sections/HeroSection';
import OpportunitySection from '../sections/OpportunitySection';
import HowWeSolveItSection from '../sections/HowWeSolveItSection';
import ServicesSection from '../sections/ServicesSection';
import ProcessSection from '../sections/ProcessSection';
import IndustriesSection from '../sections/IndustriesSection';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';
import Button from '../components/Button';
import { Link } from '../router/Router';
import './HomePage.css';

export default function HomePage() {
  usePageMetadata({
    title: 'Hutomate — AI Agents, Workflow Automation & Custom AI Systems',
    description: 'Hutomate builds AI agents, automates workflows, and engineers custom AI systems for businesses in the USA, UK, Australia, and worldwide.',
    path: '/',
  });

  useScrollReveal();

  const previewBlueprints = [
    {
      num: '01',
      title: 'Omnichannel Inbound Enquiry Triage Engine',
      desc: 'Automated intent classification, entity extraction, and routing across email, webhooks, and ticketing channels.',
      url: '/blueprints',
    },
    {
      num: '02',
      title: 'Grounded Knowledge Retrieval & Copilot (RAG)',
      desc: 'Semantic search and citation-backed answer generation querying verified company documents with zero hallucinations.',
      url: '/blueprints',
    },
    {
      num: '03',
      title: 'Intelligent Accounts Payable & Invoice Processing',
      desc: 'Vision OCR data extraction with 3-way matching and human approval gates before accounting ledger commit.',
      url: '/blueprints',
    },
    {
      num: '04',
      title: 'Voice AI Inbound Screening & Appointment Scheduling',
      desc: 'Sub-second streaming conversational voice agent with live calendar tool calling and transparent human escalation.',
      url: '/blueprints',
    },
  ];

  return (
    <div className="home-page-view">
      {/* Homepage Hero - Strictly Untouched */}
      <HeroSection />

      {/* Section 02: The Opportunity (Research-backed editorial metrics) */}
      <OpportunitySection />

      {/* Section 03: How We Solve It (4-step illustrated process) */}
      <HowWeSolveItSection />
      <ServicesSection />
      <ProcessSection />
      <IndustriesSection />
      <AboutSection />

      {/* Architecture Blueprints Teaser */}
      <section className="home-blueprints-section" id="blueprints-preview">
        <div className="container">
          <div className="section-header reveal-on-scroll" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span className="section-label">Engineering Architectures</span>
              <h2 className="section-heading">System Blueprints: How we assemble AI workflows</h2>
              <p className="section-body" style={{ maxWidth: '640px' }}>
                Explore conceptual architecture blueprints illustrating data flows, model boundaries, and human oversight gates for common operational automations.
              </p>
            </div>
            <div>
              <Button variant="secondary" size="md" arrow href="/blueprints">
                View All Blueprints
              </Button>
            </div>
          </div>

          <div className="home-blueprints-grid">
            {previewBlueprints.map((bp, idx) => (
              <div key={bp.num} className={`home-bp-card card card-hover-lift reveal-on-scroll reveal-delay-${idx + 1}`}>
                <span className="home-bp-num">BLUEPRINT {bp.num}</span>
                <h3 className="home-bp-title">{bp.title}</h3>
                <p className="home-bp-desc">{bp.desc}</p>
                <Link to={bp.url} className="home-bp-link">
                  Inspect Architecture <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
