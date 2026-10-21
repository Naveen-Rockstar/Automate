import React from 'react';
import { Cpu, FileCode2, Database, ShieldCheck, BarChart3, Binary, Terminal } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import './CapabilityDetailPage.css';

export default function CustomAiPage() {
  usePageMetadata({
    title: 'Custom AI Solutions — Purpose-Built Engineering & Architectures',
    description: 'Bespoke AI pipelines, proprietary knowledge synthesis, and internal tools engineered for operational challenges that off-the-shelf software cannot solve.',
    path: '/capabilities/custom-ai',
  });

  useScrollReveal();

  const useCases = [
    {
      title: 'Domain-Specific Retrieval Systems (RAG)',
      desc: 'Build grounded knowledge engines that index proprietary industry documentation, technical schematics, and internal archives with source citations.',
      icon: Database,
    },
    {
      title: 'Multi-Model Orchestration Pipelines',
      desc: 'Route tasks dynamically across specialized models—combining vision models for OCR, fast reasoning models for classification, and frontier models for complex analysis.',
      icon: Cpu,
    },
    {
      title: 'Internal Operations Copilots',
      desc: 'Deliver streamlined web tools and internal interfaces that assist staff in querying internal databases, drafting specialized reports, and updating legacy records.',
      icon: Terminal,
    },
    {
      title: 'Automated Executive Report Synthesis',
      desc: 'Transform scattered metrics across ERPs, spreadsheets, and databases into coherent, structured weekly or monthly executive intelligence briefings.',
      icon: BarChart3,
    },
    {
      title: 'Legacy API & Database Modernisation',
      desc: 'Wrap older enterprise software in intelligent API layers and natural language interfaces without requiring costly multi-year ERP replacement projects.',
      icon: Binary,
    },
    {
      title: 'Complex Document Extraction Engines',
      desc: 'Extract nested data from intricate contracts, customs manifests, and technical blueprints into strictly validated JSON schemas.',
      icon: FileCode2,
    },
  ];

  const customAiSteps = [
    { step: '01', title: 'Operational Scoping & Feasibility', desc: 'We dissect your exact data structures, compliance boundaries, and business logic to establish clear technical specifications.' },
    { step: '02', title: 'Data Pipeline & Indexing', desc: 'Build automated cleaning, chunking, and embedding pipelines to turn raw unstructured business assets into search-ready vector databases.' },
    { step: '03', title: 'Model Selection & Prompt Schemas', desc: 'Select the optimal combination of commercial or open-weight models, defining strict JSON schemas to eliminate hallucinations.' },
    { step: '04', title: 'Custom Tool & Interface Build', desc: 'Develop user-friendly internal web interfaces, API endpoints, or Slack/Teams integrations tailored for internal teams.' },
    { step: '05', title: 'Security Guardrails & RBAC', desc: 'Enforce enterprise Role-Based Access Controls (RBAC), data masking, zero-retention policies, and sandboxed execution.' },
    { step: '06', title: 'Telemetry & Cost Optimization', desc: 'Deploy continuous observability to monitor token consumption, response latency, and output accuracy over time.' },
  ];

  const engineeringPrinciples = [
    { title: 'Model-Agnostic Architecture', desc: 'We do not lock you into a single AI provider. Systems are built with provider abstraction layers so you can swap models as technology improves.' },
    { title: 'Zero Model Training on Client Data', desc: 'All commercial LLM API agreements are configured with zero-retention and zero-training guarantees. Your proprietary IP stays strictly yours.' },
    { title: 'Maintainable, Documented Code', desc: 'We deliver clean, modular codebases with full technical documentation, unit tests, and architecture diagrams that your team can own.' },
    { title: 'Granular Cost & Token Observability', desc: 'Token usage, latency, and cost per execution are measured on every call, preventing unexpected month-end cloud bills.' },
  ];

  return (
    <div className="capability-detail-page">
      <PageHeader
        eyebrow="CUSTOM AI SOLUTIONS"
        badgeText="Purpose-Built Engineering"
        badgeType="purple"
        title="Bespoke AI systems for operational requirements that off-the-shelf software cannot solve."
        description="When commercial SaaS platforms and generic AI chatbots fall short of your business constraints, Hutomate designs custom AI pipelines, internal tools, and intelligent data architectures tailored to your exact workflows."
      >
        <Button variant="primary" size="md" arrow href="/start-project">
          Scope a Custom System
        </Button>
        <Button variant="secondary" size="md" href="/process">
          How We Work
        </Button>
      </PageHeader>

      {/* Applications Section */}
      <section className="section detail-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Tailored Solutions</span>
            <h2 className="section-heading">Custom AI architectures built around your business</h2>
            <p className="section-body">
              Targeted solutions engineered to solve specific operational bottlenecks that generic pre-packaged software cannot handle.
            </p>
          </div>

          <div className="detail-cards-grid">
            {useCases.map((uc, i) => {
              const IconComp = uc.icon;
              return (
                <div key={i} className="detail-card card">
                  <div className="detail-card-icon-wrap">
                    <IconComp size={20} />
                  </div>
                  <h3 className="detail-card-title">{uc.title}</h3>
                  <p className="detail-card-desc">{uc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Lifecycle */}
      <section className="section detail-section bg-secondary-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label section-label-green">Engineering Roadmap</span>
            <h2 className="section-heading">From initial architecture to production deployment</h2>
            <p className="section-body section-body-center">
              Our engineering lifecycle prioritizes rigorous verification, clean system boundaries, and continuous cost oversight.
            </p>
          </div>

          <div className="timeline-steps-grid">
            {customAiSteps.map((st) => (
              <div key={st.step} className="timeline-step-card card">
                <span className="timeline-step-number">{st.step}</span>
                <h3 className="timeline-step-title">{st.title}</h3>
                <p className="timeline-step-desc">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="section detail-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label section-label-blue">Design Standards</span>
            <h2 className="section-heading">Engineering principles we stand by</h2>
            <p className="section-body">
              We design custom AI systems with the same architectural discipline as mission-critical enterprise software.
            </p>
          </div>

          <div className="boundaries-grid">
            {engineeringPrinciples.map((p, i) => (
              <div key={i} className="boundary-card card">
                <ShieldCheck size={20} className="boundary-icon" />
                <h3 className="boundary-title">{p.title}</h3>
                <p className="boundary-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Strip */}
      <section className="section detail-section bg-secondary-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Engagement Model</span>
            <h2 className="section-heading">How custom development projects proceed</h2>
            <p className="section-body section-body-center">
              Clear milestones, fixed sprint cadences, and continuous demonstrations ensure you always know what is being built.
            </p>
          </div>

          <div className="process-mini-strip">
            <div className="mini-step">
              <span className="mini-step-num">01</span>
              <span className="mini-step-name">Architecture Design</span>
              <span className="mini-step-sub">Deliver complete technical spec &amp; data model</span>
            </div>
            <div className="mini-arrow">→</div>
            <div className="mini-step">
              <span className="mini-step-num">02</span>
              <span className="mini-step-name">Core Engine Prototype</span>
              <span className="mini-step-sub">Validate accuracy on real business sample data</span>
            </div>
            <div className="mini-arrow">→</div>
            <div className="mini-step">
              <span className="mini-step-num">03</span>
              <span className="mini-step-name">Full Integration</span>
              <span className="mini-step-sub">Connect to databases, APIs, and auth layers</span>
            </div>
            <div className="mini-arrow">→</div>
            <div className="mini-step">
              <span className="mini-step-num">04</span>
              <span className="mini-step-name">Team Handover</span>
              <span className="mini-step-sub">Documentation, code delivery &amp; operator training</span>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a technical challenge that standard software can’t solve?"
        description="Share your requirements and technical architecture with our engineering team for an honest feasibility assessment."
        buttonText="Scope Custom AI"
        buttonHref="/start-project"
        secondaryButtonText="View Engagement Models"
        secondaryButtonHref="/engagement"
      />
    </div>
  );
}
