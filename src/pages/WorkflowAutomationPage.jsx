import React from 'react';
import { RefreshCw, GitFork, CheckSquare, Zap, AlertOctagon, Layers, ShieldCheck } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import './CapabilityDetailPage.css';

export default function WorkflowAutomationPage() {
  usePageMetadata({
    title: 'Workflow Automation — System Integrations & Automated Handoffs',
    description: 'Connect existing business tools and eliminate manual operational bottlenecks with robust, event-driven workflow automation.',
    path: '/capabilities/workflow-automation',
  });

  useScrollReveal();

  const useCases = [
    {
      title: 'Cross-Platform Data Synchronisation',
      desc: 'Synchronise records seamlessly between CRMs, ERPs, accounting software, and billing engines without repetitive manual entry.',
      icon: RefreshCw,
    },
    {
      title: 'Automated Invoice & Document Routing',
      desc: 'Ingest incoming financial files, extract key line items, validate vendor IDs, and route directly into accounting ledgers for sign-off.',
      icon: Layers,
    },
    {
      title: 'Customer Onboarding Sequences',
      desc: 'Trigger multi-system setup sequences the instant a contract is signed—creating workspaces, provisioning accounts, and dispatching welcome briefs.',
      icon: GitFork,
    },
    {
      title: 'Multi-Department Approval Flows',
      desc: 'Coordinate reviews across Slack, Teams, or email with interactive approval buttons that automatically advance status across core systems.',
      icon: CheckSquare,
    },
    {
      title: 'Inventory & Order Alerting',
      desc: 'Monitor stock thresholds across e-commerce channels and notify procurement systems automatically before fulfillment bottlenecks occur.',
      icon: Zap,
    },
    {
      title: 'Incident & Exception Escalation',
      desc: 'Detect system timeouts, billing failures, or client discrepancies and instantly route alert payloads to on-call operational leads.',
      icon: AlertOctagon,
    },
  ];

  const workflowSteps = [
    { step: '01', title: 'Event Trigger Capture', desc: 'A webhook, schedule, or API event triggers the workflow immediately upon an action occurring in an upstream tool.' },
    { step: '02', title: 'Data Normalisation & Validation', desc: 'Inbound payloads are scrubbed, schema-validated, and mapped into standardized business entities.' },
    { step: '03', title: 'Rule Evaluation & Branching', desc: 'Configurable logic evaluates conditional paths based on contract value, customer tier, or risk score.' },
    { step: '04', title: 'Target Execution via APIs', desc: 'Idempotent API calls commit state updates to downstream endpoints, ensuring zero duplicated records.' },
    { step: '05', title: 'Automated Retry & Fallback', desc: 'Transient third-party API outages trigger exponential backoff retries with graceful alert notifications.' },
    { step: '06', title: 'Audit Trail & Telemetry', desc: 'Every transaction payload and delivery status is recorded in centralized logs for full operational visibility.' },
  ];

  const architecturalPillars = [
    { title: 'Idempotent Operations', desc: 'Workflows are engineered with idempotency keys so that duplicated webhooks or network retries never generate double charges or duplicated records.' },
    { title: 'Deterministic Retry Strategies', desc: 'When downstream SaaS services experience temporary downtime, automated queuing buffers requests and applies exponential backoff.' },
    { title: 'Strict Field Validation', desc: 'Data passing between systems is validated against schema definitions to prevent corrupted records from propagating through your pipeline.' },
    { title: 'Unified Operational Telemetry', desc: 'Real-time alerting and error logs give internal teams rapid diagnosis if an API key expires or a destination schema changes.' },
  ];

  return (
    <div className="capability-detail-page">
      <PageHeader
        eyebrow="WORKFLOW AUTOMATION"
        badgeText="Event-Driven Operations"
        badgeType="green"
        title="Connect existing tools and eliminate manual handoffs."
        description="Automate repetitive multi-step processes across systems so your team spends less time copying data, chasing updates, and running manual operational routines. Hutomate connects modern and legacy tools into resilient, automated pipelines."
      >
        <Button variant="primary" size="md" arrow href="/start-project">
          Plan an Automation
        </Button>
        <Button variant="secondary" size="md" href="/integrations">
          Explore Integrations
        </Button>
      </PageHeader>

      {/* Editorial System Showcase */}
      <section className="editorial-showcase-section">
        <div className="container">
          <div className="editorial-showcase-split reveal-on-scroll">
            <div className="editorial-showcase-image-wrap reveal-image-mask">
              <img
                src="/images/workflow-light-structures.webp"
                alt="Luminous vertical data conduits illustrating fast, interconnected business workflows"
                className="editorial-showcase-img"
                width={800}
                height={500}
                loading="eager"
              />
            </div>
            <div className="editorial-showcase-content">
              <span className="editorial-showcase-tag">Connected Architecture</span>
              <h2 className="editorial-showcase-title">
                Operational velocity across your complete software stack.
              </h2>
              <p className="editorial-showcase-p">
                When business data is trapped in disconnected tools, everyday operations slow down and manual errors accumulate. We engineer resilient event-driven conduits that synchronize state continuously across your systems, moving information with zero friction.
              </p>
              <div className="editorial-showcase-pillars">
                <div className="editorial-pillar-item">
                  <span className="editorial-pillar-dot" aria-hidden="true" />
                  <span><strong>Zero-latency triggers:</strong> Instantaneous event handling via webhooks and streaming APIs.</span>
                </div>
                <div className="editorial-pillar-item">
                  <span className="editorial-pillar-dot" aria-hidden="true" />
                  <span><strong>Idempotent safety:</strong> Guaranteed delivery mechanisms preventing duplicated records or lost payloads.</span>
                </div>
                <div className="editorial-pillar-item">
                  <span className="editorial-pillar-dot" aria-hidden="true" />
                  <span><strong>Defensive error handling:</strong> Exponential backoff retry queues with instant Slack alerting.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section detail-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Operational Workflows</span>
            <h2 className="section-heading">High-impact automation opportunities</h2>
            <p className="section-body">
              Eliminate operational friction where human teams are stuck acting as manual middleware between disconnected business tools.
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

      {/* 6-Step Workflow Lifecycle */}
      <section className="section detail-section bg-secondary-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label section-label-green">System Architecture</span>
            <h2 className="section-heading">How our automation pipelines execute</h2>
            <p className="section-body section-body-center">
              Predictable, fault-tolerant execution ensures business workflows complete reliably without manual oversight.
            </p>
          </div>

          <div className="timeline-steps-grid">
            {workflowSteps.map((st) => (
              <div key={st.step} className="timeline-step-card card">
                <span className="timeline-step-number">{st.step}</span>
                <h3 className="timeline-step-title">{st.title}</h3>
                <p className="timeline-step-desc">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Reliability */}
      <section className="section detail-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label section-label-blue">System Engineering</span>
            <h2 className="section-heading">Built for fault tolerance and data integrity</h2>
            <p className="section-body">
              Fragile automation scripts cause silent business failure. We build production-grade workflows with comprehensive error mitigation.
            </p>
          </div>

          <div className="boundaries-grid">
            {architecturalPillars.map((p, i) => (
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
            <span className="section-label">Implementation Flow</span>
            <h2 className="section-heading">How we implement workflow automation</h2>
            <p className="section-body section-body-center">
              A structured delivery framework designed to guarantee zero downtime and zero data loss during cutover.
            </p>
          </div>

          <div className="process-mini-strip">
            <div className="mini-step">
              <span className="mini-step-num">01</span>
              <span className="mini-step-name">Process Audit</span>
              <span className="mini-step-sub">Map data schemas &amp; handoff points</span>
            </div>
            <div className="mini-arrow">→</div>
            <div className="mini-step">
              <span className="mini-step-num">02</span>
              <span className="mini-step-name">API Verification</span>
              <span className="mini-step-sub">Inspect rate limits, webhooks &amp; auth</span>
            </div>
            <div className="mini-arrow">→</div>
            <div className="mini-step">
              <span className="mini-step-num">03</span>
              <span className="mini-step-name">Pipeline Build</span>
              <span className="mini-step-sub">Implement logic, retries &amp; validation</span>
            </div>
            <div className="mini-arrow">→</div>
            <div className="mini-step">
              <span className="mini-step-num">04</span>
              <span className="mini-step-name">Sandbox Testing</span>
              <span className="mini-step-sub">Simulate network breaks &amp; edge cases</span>
            </div>
            <div className="mini-arrow">→</div>
            <div className="mini-step">
              <span className="mini-step-num">05</span>
              <span className="mini-step-name">Production Cutover</span>
              <span className="mini-step-sub">Parallel run followed by full activation</span>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to automate repetitive operational handoffs?"
        description="Schedule a technical consultation to map out your current software stack and calculate the high-value integration opportunities."
        buttonText="Discuss Your Systems"
        buttonHref="/start-project"
        secondaryButtonText="Browse Blueprints"
        secondaryButtonHref="/blueprints"
      />
    </div>
  );
}
