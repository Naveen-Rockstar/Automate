import React from 'react';
import './OpportunitySection.css';

/**
 * Custom Abstract Blue 3D Sculptural Ribbon SVG Visual
 * Inspired by NuPlay's organic dimensional structures, specular depth, and fluid operational dynamics.
 */
function OpportunitySculpturalVisual() {
  return (
    <div className="opp-sculpture-wrapper">
      <div className="opp-sculpture-ambient-glow" aria-hidden="true" />
      <svg
        className="opp-sculpture-svg"
        viewBox="0 0 460 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Abstract dimensional blue sculptural ribbon representing connected operational workflows and intelligent momentum"
      >
        <defs>
          {/* Main Royal to Cobalt Gradient */}
          <linearGradient id="sculptureBlueGrad" x1="15%" y1="10%" x2="85%" y2="90%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="25%" stopColor="#3B82F6" />
            <stop offset="65%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          {/* Cyan Glow & Highlight Gradient */}
          <linearGradient id="sculptureHighlightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#38BDF8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1E40AF" stopOpacity="0" />
          </linearGradient>

          {/* Deep Underside Shadow Gradient */}
          <linearGradient id="sculptureShadowGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#0F172A" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#020617" stopOpacity="0.98" />
          </linearGradient>

          {/* Tertiary Twist Accent */}
          <linearGradient id="sculptureAccentGrad" x1="20%" y1="80%" x2="80%" y2="20%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#7DD3FC" />
          </linearGradient>

          {/* Soft Surface Filter */}
          <filter id="sculptureDrop" x="-15%" y="-15%" width="130%" height="135%">
            <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#0F172A" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Dynamic Structural Grid Coordinates in Background */}
        <g opacity="0.35">
          <ellipse cx="230" cy="240" rx="190" ry="120" stroke="#93C5FD" strokeWidth="1" strokeDasharray="4 8" />
          <ellipse cx="230" cy="240" rx="140" ry="170" stroke="#60A5FA" strokeWidth="0.75" strokeDasharray="2 6" transform="rotate(-25 230 240)" />
          <circle cx="230" cy="240" r="130" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="1 5" />
        </g>

        {/* Back Layer of Ribbon (Shadow & Depth) */}
        <path
          d="M 110 310 C 80 230, 110 130, 200 90 C 290 50, 370 110, 390 190 C 405 250, 360 320, 290 370 C 220 420, 140 390, 110 310 Z"
          fill="url(#sculptureShadowGrad)"
          filter="url(#sculptureDrop)"
        />

        {/* Core Front Flowing Sculptural Loop */}
        <path
          d="M 130 290 C 90 200, 140 110, 230 80 C 320 50, 390 130, 370 230 C 350 330, 260 410, 170 380 C 120 360, 100 310, 130 290 Z"
          fill="url(#sculptureBlueGrad)"
        />

        {/* Organic Frontal Fold / Dimensional Wave */}
        <path
          d="M 130 290 C 180 340, 270 360, 340 300 C 410 240, 410 150, 350 110 C 290 70, 200 90, 150 160 C 110 220, 100 270, 130 290 Z"
          fill="url(#sculptureAccentGrad)"
          opacity="0.88"
        />

        {/* Specular Edge Highlight Crest */}
        <path
          d="M 145 170 C 190 100, 275 80, 340 115 C 385 145, 390 205, 360 275"
          stroke="url(#sculptureHighlightGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="drop-shadow(0 0 8px rgba(186, 230, 253, 0.6))"
        />

        {/* Secondary Delicate Flow Lines across Form */}
        <path
          d="M 170 200 C 210 150, 280 135, 330 160 C 365 180, 370 225, 345 280"
          stroke="#BAE6FD"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          opacity="0.75"
        />

        <path
          d="M 125 275 C 160 320, 230 340, 290 315 C 340 295, 360 250, 340 210"
          stroke="#93C5FD"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Spherical Precision Nodes (Intelligence Points) */}
        <g>
          <circle cx="150" cy="165" r="7" fill="#E0F2FE" filter="drop-shadow(0 0 6px #38BDF8)" />
          <circle cx="150" cy="165" r="3.5" fill="#0284C7" />

          <circle cx="340" cy="115" r="6" fill="#E0F2FE" filter="drop-shadow(0 0 6px #38BDF8)" />
          <circle cx="340" cy="115" r="3" fill="#0369A1" />

          <circle cx="355" cy="275" r="8" fill="#E0F2FE" filter="drop-shadow(0 0 8px #38BDF8)" />
          <circle cx="355" cy="275" r="4" fill="#1D4ED8" />

          <circle cx="210" cy="360" r="5" fill="#E0F2FE" filter="drop-shadow(0 0 5px #38BDF8)" />
          <circle cx="210" cy="360" r="2.5" fill="#2563EB" />
        </g>
      </svg>
    </div>
  );
}

export default function OpportunitySection() {
  const metrics = [
    {
      figure: '80%',
      label: 'The capacity gap',
      description: 'Of the global workforce surveyed by Microsoft reported lacking enough time or energy to do their work.',
    },
    {
      figure: 'Every 2 min',
      label: 'Constant interruptions',
      description: 'Microsoft reported that employees were interrupted by a meeting, email or notification at this average frequency during the workday.',
    },
    {
      figure: '44%',
      label: 'Disconnected technology',
      description: 'Of service leaders with AI surveyed by Salesforce said technology silos had delayed or limited their AI initiatives.',
    },
    {
      figure: '18%',
      label: 'Time lost to administration',
      description: 'Of working hours were estimated to be wasted on administrative duties by mobile workers in Salesforce\'s field-service research.',
    },
  ];

  return (
    <section className="opportunity-section" id="opportunity" aria-labelledby="opportunity-title">
      <div className="opportunity-container">
        {/* Editorial Section Header */}
        <header className="opp-header-layout reveal-on-scroll">
          <div className="opp-intro-left">
            <div className="opp-eyebrow">
              <span>THE OPPORTUNITY</span>
            </div>
            <h2 id="opportunity-title" className="opp-headline">
              Work is moving faster. Business processes need to catch up.
            </h2>
          </div>

          <div className="opp-intro-right">
            <p className="opp-supporting-copy">
              Teams are under pressure to do more with their time. Yet repetitive administration, constant interruptions and disconnected systems can make everyday work harder than it needs to be.
            </p>
          </div>
        </header>

        {/* Asymmetrical Content: Dimensional Sculptural Artwork + 4 Integrated Editorial Metrics */}
        <div className="opp-content-composition reveal-on-scroll">
          <div className="opp-visual-column">
            <OpportunitySculpturalVisual />
          </div>

          <div className="opp-metrics-grid">
            {metrics.map((item, index) => (
              <div key={index} className="opp-metric-block">
                <div className="opp-metric-figure-row">
                  <span className="opp-metric-figure">{item.figure}</span>
                </div>
                <div className="opp-metric-label">
                  <span className="opp-metric-label-dot" aria-hidden="true" />
                  <span>{item.label}</span>
                </div>
                <p className="opp-metric-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accessible Research Source Note */}
        <footer className="opp-source-footer reveal-on-scroll">
          <p className="opp-source-note">
            <span className="opp-source-strong">Sources:</span> Microsoft 2025 Work Trend Index; Salesforce 2025 State of Service. Findings reflect different populations and methodologies. These are external research findings, not Hutomate performance claims.
          </p>
        </footer>
      </div>
    </section>
  );
}
