import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Globe, Bot, GitBranch, Mic, Cpu } from 'lucide-react';
import { BrandSymbol } from './Header';
import './WorkflowDiagram.css';

const INCOMING_CHANNELS = [
  {
    id: 'emails',
    label: 'Emails',
    sublabel: 'Inbound & triage',
    pill: 'Direct & API',
    Icon: Mail,
    color: '#4389F5',
    lightBg: 'rgba(67, 137, 245, 0.1)',
    yDesktop: 34,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    sublabel: 'Customer messaging',
    pill: '24/7 Webhooks',
    Icon: MessageSquare,
    color: '#25A86A',
    lightBg: 'rgba(37, 168, 106, 0.1)',
    yDesktop: 118,
  },
  {
    id: 'phone',
    label: 'Phone Calls',
    sublabel: 'Inbound voice streams',
    pill: 'Live Audio',
    Icon: Phone,
    color: '#E89A42',
    lightBg: 'rgba(232, 154, 66, 0.1)',
    yDesktop: 202,
  },
  {
    id: 'website',
    label: 'Website Leads',
    sublabel: 'Forms & interactions',
    pill: 'Instant Capture',
    Icon: Globe,
    color: '#7657E8',
    lightBg: 'rgba(118, 87, 232, 0.1)',
    yDesktop: 286,
  },
];

const CORE_SERVICES = [
  {
    id: 'ai-agents',
    label: 'AI Agents',
    sublabel: 'Autonomous Decisions & Tasks',
    pill: 'Reasoning',
    Icon: Bot,
    color: '#7657E8',
    lightBg: 'rgba(118, 87, 232, 0.1)',
    yDesktop: 34,
  },
  {
    id: 'workflow-auto',
    label: 'Workflow Automation',
    sublabel: 'End-to-End System Sync',
    pill: 'Orchestration',
    Icon: GitBranch,
    color: '#25A86A',
    lightBg: 'rgba(37, 168, 106, 0.1)',
    yDesktop: 118,
  },
  {
    id: 'voice-ai',
    label: 'Voice AI',
    sublabel: 'Natural Voice & Call Handling',
    pill: 'Conversational',
    Icon: Mic,
    color: '#4389F5',
    lightBg: 'rgba(67, 137, 245, 0.1)',
    yDesktop: 202,
  },
  {
    id: 'custom-ai',
    label: 'Custom AI Solutions',
    sublabel: 'Bespoke Model Architecture',
    pill: 'Tailored',
    Icon: Cpu,
    color: '#E89A42',
    lightBg: 'rgba(232, 154, 66, 0.1)',
    yDesktop: 286,
  },
];

export default function WorkflowDiagram() {
  const [activeHoverNode, setActiveHoverNode] = useState(null);

  return (
    <div
      className="workflow-diagram"
      aria-label="Connected workflow architecture diagram showing incoming business channels transforming through Hutomate into autonomous intelligent capabilities"
    >
      {/* DESKTOP CONNECTED FLOW */}
      <div className="diagram-desktop-stage">
        {/* Left Column: 4 Incoming Business Channels */}
        <div className="diagram-col diagram-col-left">
          <div className="col-header-tag">
            <span className="col-tag-dot col-tag-dot-in" />
            <span>INCOMING CHANNELS</span>
          </div>

          <div className="nodes-vertical-stack">
            {INCOMING_CHANNELS.map((channel) => {
              const { Icon } = channel;
              const isHovered = activeHoverNode === channel.id;
              return (
                <div
                  key={channel.id}
                  className={`wf-node-card wf-node-left wf-node-${channel.id} ${
                    isHovered ? 'is-active-hover' : ''
                  }`}
                  onMouseEnter={() => setActiveHoverNode(channel.id)}
                  onMouseLeave={() => setActiveHoverNode(null)}
                  data-node-id={channel.id}
                >
                  <div
                    className="wf-icon-box"
                    style={{ backgroundColor: channel.lightBg, color: channel.color }}
                  >
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                  <div className="wf-node-meta">
                    <div className="wf-title-row">
                      <span className="wf-node-name">{channel.label}</span>
                      <span className="wf-micro-pill">{channel.pill}</span>
                    </div>
                    <span className="wf-node-desc">{channel.sublabel}</span>
                  </div>
                  <span
                    className="wf-anchor-port port-right"
                    style={{
                      borderColor: channel.color,
                      backgroundColor: isHovered ? channel.color : '#FFFFFF',
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Central SVG Connection Conduits with Animated Energy Beacons */}
        <div className="diagram-conduit-space" aria-hidden="true">
          <svg
            className="wf-conduit-svg"
            viewBox="0 0 540 330"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="inboundGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DFDCD4" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#DFDCD4" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#7657E8" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="outboundPurple" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7657E8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#7657E8" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="outboundGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7657E8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#25A86A" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="outboundBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7657E8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#4389F5" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="outboundOrange" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7657E8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#E89A42" stopOpacity="1" />
              </linearGradient>

              {/* Glow filter for energy pulses */}
              <filter id="energyGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Left to Center Inbound Paths (Center intake target is at X: 215, Y: 165) */}
            <path
              id="path-in-0"
              d="M 0 34 C 110 34, 140 165, 215 165"
              className={`conduit-wire conduit-in ${activeHoverNode === 'emails' ? 'is-active-wire' : ''}`}
              stroke={activeHoverNode === 'emails' ? '#4389F5' : 'url(#inboundGrad)'}
              strokeWidth={activeHoverNode === 'emails' ? '2.5' : '1.5'}
            />
            <path
              id="path-in-1"
              d="M 0 118 C 90 118, 145 165, 215 165"
              className={`conduit-wire conduit-in ${activeHoverNode === 'whatsapp' ? 'is-active-wire' : ''}`}
              stroke={activeHoverNode === 'whatsapp' ? '#25A86A' : 'url(#inboundGrad)'}
              strokeWidth={activeHoverNode === 'whatsapp' ? '2.5' : '1.5'}
            />
            <path
              id="path-in-2"
              d="M 0 202 C 90 202, 145 165, 215 165"
              className={`conduit-wire conduit-in ${activeHoverNode === 'phone' ? 'is-active-wire' : ''}`}
              stroke={activeHoverNode === 'phone' ? '#E89A42' : 'url(#inboundGrad)'}
              strokeWidth={activeHoverNode === 'phone' ? '2.5' : '1.5'}
            />
            <path
              id="path-in-3"
              d="M 0 286 C 110 286, 140 165, 215 165"
              className={`conduit-wire conduit-in ${activeHoverNode === 'website' ? 'is-active-wire' : ''}`}
              stroke={activeHoverNode === 'website' ? '#7657E8' : 'url(#inboundGrad)'}
              strokeWidth={activeHoverNode === 'website' ? '2.5' : '1.5'}
            />

            {/* Flowing animated light pulses (Left to Center) */}
            <circle r="3.5" fill="#4389F5" filter="url(#energyGlow)">
              <animateMotion
                dur="2.4s"
                repeatCount="indefinite"
                path="M 0 34 C 110 34, 140 165, 215 165"
              />
            </circle>
            <circle r="3.5" fill="#25A86A" filter="url(#energyGlow)">
              <animateMotion
                dur="2.8s"
                begin="0.6s"
                repeatCount="indefinite"
                path="M 0 118 C 90 118, 145 165, 215 165"
              />
            </circle>
            <circle r="3.5" fill="#E89A42" filter="url(#energyGlow)">
              <animateMotion
                dur="2.6s"
                begin="1.2s"
                repeatCount="indefinite"
                path="M 0 202 C 90 202, 145 165, 215 165"
              />
            </circle>
            <circle r="3.5" fill="#7657E8" filter="url(#energyGlow)">
              <animateMotion
                dur="2.7s"
                begin="1.8s"
                repeatCount="indefinite"
                path="M 0 286 C 110 286, 140 165, 215 165"
              />
            </circle>

            {/* Center to Right Outbound Paths (Center output origin is at X: 325, Y: 165) */}
            <path
              id="path-out-0"
              d="M 325 165 C 400 165, 430 34, 540 34"
              className={`conduit-wire conduit-out ${activeHoverNode === 'ai-agents' ? 'is-active-wire' : ''}`}
              stroke="url(#outboundPurple)"
              strokeWidth={activeHoverNode === 'ai-agents' ? '2.5' : '1.75'}
            />
            <path
              id="path-out-1"
              d="M 325 165 C 395 165, 450 118, 540 118"
              className={`conduit-wire conduit-out ${activeHoverNode === 'workflow-auto' ? 'is-active-wire' : ''}`}
              stroke="url(#outboundGreen)"
              strokeWidth={activeHoverNode === 'workflow-auto' ? '2.5' : '1.75'}
            />
            <path
              id="path-out-2"
              d="M 325 165 C 395 165, 450 202, 540 202"
              className={`conduit-wire conduit-out ${activeHoverNode === 'voice-ai' ? 'is-active-wire' : ''}`}
              stroke="url(#outboundBlue)"
              strokeWidth={activeHoverNode === 'voice-ai' ? '2.5' : '1.75'}
            />
            <path
              id="path-out-3"
              d="M 325 165 C 400 165, 430 286, 540 286"
              className={`conduit-wire conduit-out ${activeHoverNode === 'custom-ai' ? 'is-active-wire' : ''}`}
              stroke="url(#outboundOrange)"
              strokeWidth={activeHoverNode === 'custom-ai' ? '2.5' : '1.75'}
            />

            {/* Flowing animated light pulses (Center to Right) */}
            <circle r="3.5" fill="#7657E8" filter="url(#energyGlow)">
              <animateMotion
                dur="2.4s"
                begin="0.3s"
                repeatCount="indefinite"
                path="M 325 165 C 400 165, 430 34, 540 34"
              />
            </circle>
            <circle r="3.5" fill="#25A86A" filter="url(#energyGlow)">
              <animateMotion
                dur="2.5s"
                begin="0.9s"
                repeatCount="indefinite"
                path="M 325 165 C 395 165, 450 118, 540 118"
              />
            </circle>
            <circle r="3.5" fill="#4389F5" filter="url(#energyGlow)">
              <animateMotion
                dur="2.6s"
                begin="1.5s"
                repeatCount="indefinite"
                path="M 325 165 C 395 165, 450 202, 540 202"
              />
            </circle>
            <circle r="3.5" fill="#E89A42" filter="url(#energyGlow)">
              <animateMotion
                dur="2.7s"
                begin="2.1s"
                repeatCount="indefinite"
                path="M 325 165 C 400 165, 430 286, 540 286"
              />
            </circle>
          </svg>
        </div>

        {/* Central Core: Commanding Hutomate Engine */}
        <div className="diagram-col diagram-col-center">
          <div className="core-engine-module">
            {/* Ambient telemetry orbital rings */}
            <div className="core-orbit-ring ring-1" aria-hidden="true" />
            <div className="core-orbit-ring ring-2" aria-hidden="true" />

            <div className="core-card-body">
              {/* Left & Right connection anchor points */}
              <span className="core-anchor core-anchor-in" aria-hidden="true" />
              <span className="core-anchor core-anchor-out" aria-hidden="true" />

              <div className="core-status-pill">
                <span className="core-status-beacon" />
                <span className="core-status-text">Autonomous Core</span>
              </div>

              <div className="core-symbol-frame">
                <div className="core-symbol-glow" />
                <BrandSymbol size={36} />
              </div>

              <div className="core-title-block">
                <span className="core-engine-brand">Hutomate Engine</span>
                <span className="core-engine-tagline">Real-Time Autonomous Sync</span>
              </div>

              <div className="core-pipeline-tags">
                <span className="tag-step">
                  <span className="step-num">1</span> Intake
                </span>
                <span className="step-arrow">→</span>
                <span className="tag-step">
                  <span className="step-num">2</span> Reason
                </span>
                <span className="step-arrow">→</span>
                <span className="tag-step">
                  <span className="step-num">3</span> Orchestrate
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Autonomous Hutomate Capabilities */}
        <div className="diagram-col diagram-col-right">
          <div className="col-header-tag">
            <span className="col-tag-dot col-tag-dot-out" />
            <span>AUTONOMOUS CAPABILITIES</span>
          </div>

          <div className="nodes-vertical-stack">
            {CORE_SERVICES.map((service) => {
              const { Icon } = service;
              const isHovered = activeHoverNode === service.id;
              return (
                <a
                  key={service.id}
                  href="#services"
                  className={`wf-node-card wf-node-right wf-node-${service.id} ${
                    isHovered ? 'is-active-hover' : ''
                  }`}
                  onMouseEnter={() => setActiveHoverNode(service.id)}
                  onMouseLeave={() => setActiveHoverNode(null)}
                  data-node-id={service.id}
                >
                  <span
                    className="wf-anchor-port port-left"
                    style={{
                      borderColor: service.color,
                      backgroundColor: isHovered ? service.color : '#FFFFFF',
                    }}
                  />
                  <div
                    className="wf-icon-box"
                    style={{ backgroundColor: service.lightBg, color: service.color }}
                  >
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                  <div className="wf-node-meta">
                    <div className="wf-title-row">
                      <span className="wf-node-name">{service.label}</span>
                      <span
                        className="wf-service-pill"
                        style={{
                          color: service.color,
                          backgroundColor: service.lightBg,
                          borderColor: `${service.color}40`,
                        }}
                      >
                        {service.pill}
                      </span>
                    </div>
                    <span className="wf-node-desc">{service.sublabel}</span>
                  </div>
                  <span
                    className="wf-accent-edge"
                    style={{ backgroundColor: service.color }}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* MOBILE RESPONSIVE WORKFLOW (Visible <= 768px) */}
      <div className="diagram-mobile-stage" aria-label="Mobile workflow structure">
        {/* Step 1: Channels */}
        <div className="mobile-group">
          <div className="mobile-group-header">
            <span className="mobile-badge-index">01</span>
            <span className="mobile-group-title">Incoming Business Channels</span>
          </div>
          <div className="mobile-nodes-grid">
            {INCOMING_CHANNELS.map((ch) => {
              const { Icon } = ch;
              return (
                <div key={ch.id} className="mobile-node-tile">
                  <div
                    className="mobile-node-icon"
                    style={{ backgroundColor: ch.lightBg, color: ch.color }}
                  >
                    <Icon size={16} strokeWidth={2.2} />
                  </div>
                  <span className="mobile-node-text">{ch.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transition conduit */}
        <div className="mobile-flow-conduit" aria-hidden="true">
          <div className="mobile-flow-line" />
          <div className="mobile-pulse-particle" />
        </div>

        {/* Step 2: Hutomate Core */}
        <div className="mobile-core-card">
          <div className="core-status-pill">
            <span className="core-status-beacon" />
            <span>Autonomous Intelligence Core</span>
          </div>
          <div className="mobile-core-row">
            <BrandSymbol size={28} />
            <div className="mobile-core-text">
              <span className="mobile-core-name">Hutomate Engine</span>
              <span className="mobile-core-sub">Orchestrates workflows across India & USA</span>
            </div>
          </div>
        </div>

        {/* Transition conduit */}
        <div className="mobile-flow-conduit" aria-hidden="true">
          <div className="mobile-flow-line" />
          <div className="mobile-pulse-particle" />
        </div>

        {/* Step 3: Four Core Capabilities */}
        <div className="mobile-group">
          <div className="mobile-group-header">
            <span className="mobile-badge-index">02</span>
            <span className="mobile-group-title">Autonomous Services Delivered</span>
          </div>
          <div className="mobile-services-grid">
            {CORE_SERVICES.map((srv) => {
              const { Icon } = srv;
              return (
                <a
                  key={srv.id}
                  href="#services"
                  className="mobile-service-tile"
                  style={{ borderLeftColor: srv.color }}
                >
                  <div
                    className="mobile-node-icon"
                    style={{ backgroundColor: srv.lightBg, color: srv.color }}
                  >
                    <Icon size={16} strokeWidth={2.2} />
                  </div>
                  <div className="mobile-service-info">
                    <span className="mobile-service-name">{srv.label}</span>
                    <span className="mobile-service-sub">{srv.sublabel}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
