import React from 'react';
import { PhoneCall, Calendar, UserCheck, Clock, PhoneForwarded, FileText, CheckCircle2 } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import './CapabilityDetailPage.css';

export default function VoiceAiPage() {
  usePageMetadata({
    title: 'Voice AI Agents — Conversational Phone & Audio Automation',
    description: 'Natural voice AI designed to answer calls, qualify inbound leads, schedule appointments, and route complex inquiries with transparent human fallbacks.',
    path: '/capabilities/voice-ai',
  });

  useScrollReveal();

  const useCases = [
    {
      title: 'Inbound Call Answering & FAQs',
      desc: 'Answer incoming customer calls with zero queue wait times, providing instant verified answers to common operational questions.',
      icon: PhoneCall,
    },
    {
      title: 'After-Hours Triage & Dispatch',
      desc: 'Capture urgent service requests when your office is closed, categorize urgency, and trigger emergency on-call notifications.',
      icon: Clock,
    },
    {
      title: 'Automated Calendar Scheduling',
      desc: 'Coordinate appointment times conversationally over the phone, cross-reference calendar availability, and send SMS confirmations.',
      icon: Calendar,
    },
    {
      title: 'Pre-Screening & Lead Qualification',
      desc: 'Engage inbound callers with structured qualification questions, recording intent and budget parameters before escalating to sales staff.',
      icon: UserCheck,
    },
    {
      title: 'Order Status & Tracking Enquiries',
      desc: 'Look up shipping numbers and delivery updates securely by authenticating caller phone numbers or reference codes.',
      icon: FileText,
    },
    {
      title: 'Warm Human Call Escalation',
      desc: 'When callers request a human or voice sentiment indicates distress, cleanly transfer the call with a live briefing summary to a staff member.',
      icon: PhoneForwarded,
    },
  ];

  const pipelineSteps = [
    { step: '01', title: 'Audio Ingestion & VAD', desc: 'Real-time Voice Activity Detection (VAD) monitors caller speech with sub-100ms silence detection to handle natural interruptions.' },
    { step: '02', title: 'Streaming Speech-to-Text', desc: 'Inbound audio packets are transcribed in real time using ultra-low-latency neural speech recognition models.' },
    { step: '03', title: 'Context & Prompt Evaluation', desc: 'LLM reasoning models evaluate caller intent within conversational guardrails, querying business knowledge bases via function calling.' },
    { step: '04', title: 'Streaming Neural Voice Synthesis', desc: 'Natural voice models stream generated audio tokens back to the caller in milliseconds, ensuring a fluid conversational rhythm.' },
    { step: '05', title: 'Deterministic Tool Commit', desc: 'Appointments, CRM notes, or support tickets are committed via secure APIs during or immediately following the call.' },
    { step: '06', title: 'Call Transcript & Human Summary', desc: 'A structured recap, audio recording, and compliance transcript are archived and dispatched to your team.' },
  ];

  const safetyPrinciples = [
    { title: 'Transparent AI Identification', desc: 'Our voice agents always disclose their AI nature at the start of every call. We do not design deceptive synthetic personas.' },
    { title: 'Instant Human Escalation', desc: 'Callers can request a human specialist at any point. The agent immediately executes a warm transfer or schedules an immediate callback.' },
    { title: 'PCI & Privacy Guardrails', desc: 'Voice agents do not collect sensitive payment data over plain phone audio without specialized tokenized interactive voice response (IVR).' },
    { title: 'Deterministic Script Adherence', desc: 'For regulated industries, the agent stays strictly within approved conversational scripts and never speculates on legal or financial matters.' },
  ];

  return (
    <div className="capability-detail-page">
      <PageHeader
        eyebrow="VOICE AI"
        badgeText="Conversational Telephony"
        badgeType="blue"
        title="Intelligent voice agents for structured phone workflows."
        description="Natural conversational voice AI designed to answer calls, qualify inbound leads, schedule appointments, and route complex inquiries to human staff. Fast, responsive, and engineered with absolute transparency."
      >
        <Button variant="primary" size="md" arrow href="/start-project">
          Plan a Voice Agent
        </Button>
        <Button variant="secondary" size="md" href="/security">
          Voice Ethics &amp; Safety
        </Button>
      </PageHeader>

      {/* Editorial Voice Showcase */}
      <section className="editorial-showcase-section">
        <div className="container">
          <div className="editorial-showcase-split reveal-on-scroll">
            <div className="editorial-showcase-image-wrap reveal-image-mask">
              <img
                src="/images/voice-waveform.webp"
                alt="Audio waveform and voice interaction interface illustrating natural, low-latency conversational AI"
                className="editorial-showcase-img"
                width={800}
                height={500}
                loading="eager"
              />
            </div>
            <div className="editorial-showcase-content">
              <span className="editorial-showcase-tag">Sub-800ms Latency</span>
              <h2 className="editorial-showcase-title">
                Natural conversational cadence without awkward pauses.
              </h2>
              <p className="editorial-showcase-p">
                Real-world phone conversations require natural interruption handling and fluid response timing. We architect voice agents with low-latency streaming pipelines that transcribe, evaluate intent, and generate speech in milliseconds.
              </p>
              <div className="editorial-showcase-pillars">
                <div className="editorial-pillar-item">
                  <span className="editorial-pillar-dot" aria-hidden="true" />
                  <span><strong>Voice Activity Detection (VAD):</strong> Responds smoothly to human interruptions and natural conversation pauses.</span>
                </div>
                <div className="editorial-pillar-item">
                  <span className="editorial-pillar-dot" aria-hidden="true" />
                  <span><strong>Deterministic tool calling:</strong> Books calendar appointments and updates CRM records in real time during the call.</span>
                </div>
                <div className="editorial-pillar-item">
                  <span className="editorial-pillar-dot" aria-hidden="true" />
                  <span><strong>Warm human transfer:</strong> Instantly connects callers to live specialists with a real-time call summary whenever required.</span>
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
            <span className="section-label">Telephony Applications</span>
            <h2 className="section-heading">Where voice automation creates tangible value</h2>
            <p className="section-body">
              Eliminate missed calls and long queue wait times with voice systems trained specifically on your company's operational playbook.
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

      {/* Latency & Architecture Section */}
      <section className="section detail-section bg-secondary-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label section-label-blue">Low-Latency Telephony</span>
            <h2 className="section-heading">How our real-time voice pipeline functions</h2>
            <p className="section-body section-body-center">
              Natural conversation requires sub-800ms total round-trip response times. Here is how our streaming architecture delivers realistic dialog.
            </p>
          </div>

          <div className="timeline-steps-grid">
            {pipelineSteps.map((st) => (
              <div key={st.step} className="timeline-step-card card">
                <span className="timeline-step-number">{st.step}</span>
                <h3 className="timeline-step-title">{st.title}</h3>
                <p className="timeline-step-desc">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Ethics */}
      <section className="section detail-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label section-label-green">Ethical Telephony</span>
            <h2 className="section-heading">Engineered for caller trust and regulatory compliance</h2>
            <p className="section-body">
              We hold our voice implementations to strict standards of transparency, compliance, and user agency.
            </p>
          </div>

          <div className="boundaries-grid">
            {safetyPrinciples.map((p, i) => (
              <div key={i} className="boundary-card card">
                <CheckCircle2 size={20} className="boundary-icon" />
                <h3 className="boundary-title">{p.title}</h3>
                <p className="boundary-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Flow */}
      <section className="section detail-section bg-secondary-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Rollout Process</span>
            <h2 className="section-heading">Voice agent development roadmap</h2>
            <p className="section-body section-body-center">
              From script definition and voice persona selection to rigorous telephony testing and human-in-the-loop fallback drills.
            </p>
          </div>

          <div className="process-mini-strip">
            <div className="mini-step">
              <span className="mini-step-num">01</span>
              <span className="mini-step-name">Call Tree Audit</span>
              <span className="mini-step-sub">Identify top inbound caller intents</span>
            </div>
            <div className="mini-arrow">→</div>
            <div className="mini-step">
              <span className="mini-step-num">02</span>
              <span className="mini-step-name">Script &amp; Voice Design</span>
              <span className="mini-step-sub">Craft transparent dialog &amp; persona</span>
            </div>
            <div className="mini-arrow">→</div>
            <div className="mini-step">
              <span className="mini-step-num">03</span>
              <span className="mini-step-name">API &amp; CRM Wiring</span>
              <span className="mini-step-sub">Connect calendars &amp; customer databases</span>
            </div>
            <div className="mini-arrow">→</div>
            <div className="mini-step">
              <span className="mini-step-num">04</span>
              <span className="mini-step-name">Simulation Testing</span>
              <span className="mini-step-sub">Test accents, background noise &amp; interruptions</span>
            </div>
            <div className="mini-arrow">→</div>
            <div className="mini-step">
              <span className="mini-step-num">05</span>
              <span className="mini-step-name">Soft Launch</span>
              <span className="mini-step-sub">Reroute overflow calls with live supervision</span>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Explore how voice AI can handle your inbound volume"
        description="Let’s assess your phone call volume, common caller queries, and telephone infrastructure to scope an effective pilot."
        buttonText="Discuss Voice AI"
        buttonHref="/start-project"
        secondaryButtonText="Read Telephony Security"
        secondaryButtonHref="/security"
      />
    </div>
  );
}
