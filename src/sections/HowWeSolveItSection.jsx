import React from 'react';
import { Link } from '../router/Router';
import './HowWeSolveItSection.css';

/**
 * Step 01 Illustration: Understand & Prioritise
 * Concept: Separate abstract elements converging into a clear, organised arrangement.
 */
function Step01Illustration() {
  return (
    <svg
      className="solve-step-svg"
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abstract dimensional illustration of disparate operational elements organizing into structured priority"
    >
      <defs>
        <linearGradient id="p1GradA" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="60%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient id="p1GradB" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BAE6FD" />
          <stop offset="60%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="p1Dark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>

      {/* Trajectory Guide Vectors (Left to Right Convergence) */}
      <path d="M 45 60 C 75 60, 110 85, 150 90" stroke="#93C5FD" strokeWidth="1.2" strokeDasharray="3 5" opacity="0.6" />
      <path d="M 50 145 C 80 140, 115 115, 150 110" stroke="#93C5FD" strokeWidth="1.2" strokeDasharray="3 5" opacity="0.6" />
      <path d="M 35 105 C 70 105, 110 100, 150 100" stroke="#60A5FA" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />

      {/* Dispersed Elements on Left (Unsorted Work) */}
      {/* Element A */}
      <g transform="translate(35, 48) rotate(-12)">
        <rect x="0" y="0" width="22" height="22" rx="4" fill="url(#p1GradB)" opacity="0.85" />
        <path d="M 0 0 L 6 -6 L 28 -6 L 22 0 Z" fill="#BAE6FD" opacity="0.9" />
        <path d="M 22 0 L 28 -6 L 28 16 L 22 22 Z" fill="#0284C7" />
      </g>

      {/* Element B */}
      <g transform="translate(25, 96) rotate(16)">
        <rect x="0" y="0" width="18" height="18" rx="3" fill="url(#p1GradA)" opacity="0.75" />
        <path d="M 0 0 L 5 -5 L 23 -5 L 18 0 Z" fill="#93C5FD" opacity="0.8" />
        <path d="M 18 0 L 23 -5 L 23 13 L 18 18 Z" fill="#1D4ED8" />
      </g>

      {/* Element C */}
      <g transform="translate(42, 138) rotate(-6)">
        <rect x="0" y="0" width="20" height="20" rx="3.5" fill="url(#p1GradB)" opacity="0.8" />
        <path d="M 0 0 L 5 -5 L 25 -5 L 20 0 Z" fill="#BAE6FD" opacity="0.9" />
        <path d="M 20 0 L 25 -5 L 25 15 L 20 20 Z" fill="#0369A1" />
      </g>

      {/* Aligned, Prioritised Matrix on Right */}
      {/* Base Tier Block */}
      <g transform="translate(145, 125)">
        <path d="M 0 10 L 40 26 L 80 10 L 40 -6 Z" fill="url(#p1Dark)" />
        <path d="M 0 10 L 40 26 L 40 40 L 0 24 Z" fill="#1D4ED8" />
        <path d="M 80 10 L 40 26 L 40 40 L 80 24 Z" fill="#0F172A" />
      </g>

      {/* Middle Tier Block */}
      <g transform="translate(145, 90)">
        <path d="M 0 10 L 40 26 L 80 10 L 40 -6 Z" fill="url(#p1GradA)" />
        <path d="M 0 10 L 40 26 L 40 38 L 0 22 Z" fill="#2563EB" />
        <path d="M 80 10 L 40 26 L 40 38 L 80 22 Z" fill="#1E3A8A" />
        {/* Highlight Ridge */}
        <path d="M 0 10 L 40 26 L 80 10" stroke="#BAE6FD" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      </g>

      {/* Apex Tier Block (Priority Focus) */}
      <g transform="translate(155, 55)">
        <path d="M 0 8 L 30 20 L 60 8 L 30 -4 Z" fill="url(#p1GradB)" />
        <path d="M 0 8 L 30 20 L 30 30 L 0 18 Z" fill="#0284C7" />
        <path d="M 60 8 L 30 20 L 30 30 L 60 18 Z" fill="#0369A1" />
        <path d="M 0 8 L 30 20 L 60 8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="30" cy="-4" r="3.5" fill="#E0F2FE" filter="drop-shadow(0 0 5px #38BDF8)" />
      </g>
    </svg>
  );
}

/**
 * Step 02 Illustration: Design the Workflow
 * Concept: Connected geometric components forming a coordinated, architectural structure.
 */
function Step02Illustration() {
  return (
    <svg
      className="solve-step-svg"
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abstract dimensional illustration of connected workflow nodes forming a coordinated system"
    >
      <defs>
        <linearGradient id="p2RibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient id="p2NodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>

      {/* Fluid Coordination Conduit / Pipeline Ribbon */}
      <path
        d="M 50 140 C 50 70, 110 50, 140 80 C 170 110, 190 70, 190 120 C 190 170, 100 175, 50 140 Z"
        stroke="url(#p2RibbonGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M 50 140 C 50 70, 110 50, 140 80 C 170 110, 190 70, 190 120 C 190 170, 100 175, 50 140 Z"
        stroke="#BAE6FD"
        strokeWidth="1.5"
        strokeDasharray="4 8"
        opacity="0.8"
      />

      {/* Primary Orchestration Node 1 (Input/Trigger) */}
      <g transform="translate(50, 140)">
        <circle cx="0" cy="0" r="18" fill="url(#p2NodeGrad)" />
        <circle cx="0" cy="0" r="24" stroke="#60A5FA" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />
        <circle cx="0" cy="0" r="7" fill="#FFFFFF" />
      </g>

      {/* Primary Orchestration Node 2 (Logic / Flow Branch) */}
      <g transform="translate(140, 80)">
        {/* Isometric Cube Node */}
        <path d="M 0 -14 L 16 -5 L 16 12 L 0 21 L -16 12 L -16 -5 Z" fill="#1E3A8A" />
        <path d="M 0 -14 L 16 -5 L 0 4 L -16 -5 Z" fill="#60A5FA" />
        <path d="M 0 4 L 16 -5 L 16 12 L 0 21 Z" fill="#1D4ED8" />
        <path d="M 0 4 L -16 -5 L -16 12 L 0 21 Z" fill="#2563EB" />
        <circle cx="0" cy="-5" r="3.5" fill="#E0F2FE" />
      </g>

      {/* Primary Orchestration Node 3 (Output / Action Execution) */}
      <g transform="translate(190, 120)">
        <circle cx="0" cy="0" r="15" fill="url(#p2NodeGrad)" />
        <circle cx="0" cy="0" r="20" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
        <circle cx="0" cy="0" r="6" fill="#FFFFFF" />
      </g>

      {/* Data Flow Pulse Particles */}
      <circle cx="95" cy="58" r="3.5" fill="#BAE6FD" filter="drop-shadow(0 0 5px #38BDF8)" />
      <circle cx="168" cy="92" r="3.5" fill="#BAE6FD" filter="drop-shadow(0 0 5px #38BDF8)" />
      <circle cx="120" cy="165" r="4" fill="#BAE6FD" filter="drop-shadow(0 0 6px #38BDF8)" />
    </svg>
  );
}

/**
 * Step 03 Illustration: Build & Validate
 * Concept: An assembled abstract structure with clearly aligned components and validation ring.
 */
function Step03Illustration() {
  return (
    <svg
      className="solve-step-svg"
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abstract dimensional illustration of an interlocking structure verified by precision validation geometry"
    >
      <defs>
        <linearGradient id="p3PrismA" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient id="p3PrismB" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="60%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="p3RingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0284C7" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Orbiting Validation Ring (Back Half) */}
      <path
        d="M 40 105 C 40 70, 200 70, 200 105"
        stroke="url(#p3RingGrad)"
        strokeWidth="3"
        strokeDasharray="4 6"
        opacity="0.5"
      />

      {/* Assembled Interlocking Isometric Monolith */}
      {/* Lower Base Component */}
      <g transform="translate(120, 130)">
        <path d="M -45 0 L 0 24 L 45 0 L 0 -24 Z" fill="#1E3A8A" />
        <path d="M -45 0 L 0 24 L 0 46 L -45 22 Z" fill="#1D4ED8" />
        <path d="M 45 0 L 0 24 L 0 46 L 45 22 Z" fill="#0F172A" />
      </g>

      {/* Middle Interlocking Core Component */}
      <g transform="translate(120, 95)">
        <path d="M -32 0 L 0 17 L 32 0 L 0 -17 Z" fill="url(#p3PrismA)" />
        <path d="M -32 0 L 0 17 L 0 35 L -32 18 Z" fill="#2563EB" />
        <path d="M 32 0 L 0 17 L 0 35 L 32 18 Z" fill="#1E3A8A" />
        <path d="M -32 0 L 0 17 L 32 0" stroke="#BAE6FD" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Apex Precision Keystone Component */}
      <g transform="translate(120, 60)">
        <path d="M -20 0 L 0 11 L 20 0 L 0 -11 Z" fill="#BAE6FD" />
        <path d="M -20 0 L 0 11 L 0 22 L -20 11 Z" fill="#38BDF8" />
        <path d="M 20 0 L 0 11 L 0 22 L 20 11 Z" fill="#0284C7" />
        <circle cx="0" cy="-11" r="3.5" fill="#FFFFFF" filter="drop-shadow(0 0 6px #60A5FA)" />
      </g>

      {/* Orbiting Validation Ring (Front Half — Passing through assembly) */}
      <path
        d="M 200 105 C 200 140, 40 140, 40 105"
        stroke="url(#p3RingGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        filter="drop-shadow(0 0 6px rgba(56, 189, 248, 0.6))"
      />

      {/* Precision Validation Targets / Crosshairs */}
      <circle cx="40" cy="105" r="5" fill="#E0F2FE" />
      <circle cx="200" cy="105" r="5" fill="#E0F2FE" />
      <circle cx="120" cy="138" r="4" fill="#38BDF8" filter="drop-shadow(0 0 5px #38BDF8)" />
    </svg>
  );
}

/**
 * Step 04 Illustration: Deploy & Improve
 * Concept: A flowing, connected form suggesting a completed system and continuous movement.
 */
function Step04Illustration() {
  return (
    <svg
      className="solve-step-svg"
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abstract dimensional illustration of a continuous infinity ribbon indicating ongoing deployment and iterative improvement"
    >
      <defs>
        <linearGradient id="p4InfinityA" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="35%" stopColor="#2563EB" />
          <stop offset="75%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="p4InfinityB" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#BAE6FD" />
          <stop offset="50%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="p4Glow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#BAE6FD" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>

      {/* Dynamic Background Orbital Vectors */}
      <ellipse cx="120" cy="100" rx="90" ry="50" stroke="#93C5FD" strokeWidth="0.75" strokeDasharray="3 7" opacity="0.4" transform="rotate(-8 120 100)" />

      {/* Infinity / Moebius Ribbon Form (Rear Pass) */}
      <path
        d="M 65 100 C 65 70, 95 65, 120 100 C 145 135, 175 130, 175 100"
        stroke="#1E3A8A"
        strokeWidth="16"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Infinity / Moebius Ribbon Form (Front Pass) */}
      <path
        d="M 175 100 C 175 70, 145 65, 120 100 C 95 135, 65 130, 65 100"
        stroke="url(#p4InfinityA)"
        strokeWidth="16"
        strokeLinecap="round"
      />

      {/* Specular Edge Highlighting (Momentum & Flow) */}
      <path
        d="M 68 96 C 68 74, 94 70, 120 100 C 146 130, 172 126, 172 104"
        stroke="url(#p4Glow)"
        strokeWidth="3"
        strokeLinecap="round"
        filter="drop-shadow(0 0 6px rgba(186, 230, 253, 0.7))"
      />

      {/* Subtle Directional Streamlines */}
      <path
        d="M 175 100 C 175 70, 145 65, 120 100"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        opacity="0.8"
      />

      {/* Continuous Progression Nodes */}
      <g>
        <circle cx="65" cy="100" r="5" fill="#E0F2FE" filter="drop-shadow(0 0 5px #38BDF8)" />
        <circle cx="65" cy="100" r="2.5" fill="#0284C7" />

        <circle cx="120" cy="100" r="6" fill="#FFFFFF" filter="drop-shadow(0 0 8px #60A5FA)" />
        <circle cx="120" cy="100" r="3" fill="#2563EB" />

        <circle cx="175" cy="100" r="5" fill="#E0F2FE" filter="drop-shadow(0 0 5px #38BDF8)" />
        <circle cx="175" cy="100" r="2.5" fill="#1D4ED8" />
      </g>
    </svg>
  );
}

export default function HowWeSolveItSection() {
  const steps = [
    {
      number: '01',
      heading: 'Understand & Prioritise',
      description: 'Identify repetitive work, operational bottlenecks and disconnected tools worth improving.',
      Illustration: Step01Illustration,
    },
    {
      number: '02',
      heading: 'Design the Workflow',
      description: 'Map a practical solution around your existing systems, requirements and business goals.',
      Illustration: Step02Illustration,
    },
    {
      number: '03',
      heading: 'Build & Validate',
      description: 'Implement the agreed workflow and test it against realistic scenarios before launch.',
      Illustration: Step03Illustration,
    },
    {
      number: '04',
      heading: 'Deploy & Improve',
      description: 'Launch when ready, then refine the solution through agreed support and feedback.',
      Illustration: Step04Illustration,
    },
  ];

  return (
    <section className="how-we-solve-it-section" id="how-we-solve-it" aria-labelledby="solve-title">
      <div className="solve-container">
        {/* Section Introduction */}
        <header className="solve-header reveal-on-scroll">
          <div className="solve-eyebrow">
            <span>HOW WE SOLVE IT</span>
          </div>
          <h2 id="solve-title" className="solve-headline">
            Find the friction. Design the workflow. Build the solution.
          </h2>
        </header>

        {/* 4-Step Process: Horizontal Row on Desktop, Deliberately Composed on Tablet/Mobile */}
        <div className="solve-steps-row">
          {steps.map((step, index) => {
            const IllustrationComp = step.Illustration;
            return (
              <div key={index} className={`solve-step-item reveal-on-scroll reveal-delay-${index + 1}`}>
                <div className="solve-illustration-wrap">
                  <IllustrationComp />
                </div>
                <div className="solve-step-header">
                  <span className="solve-step-number">{step.number}</span>
                  <div className="solve-step-divider" aria-hidden="true" />
                </div>
                <h3 className="solve-step-heading">{step.heading}</h3>
                <p className="solve-step-desc">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Understated Project CTA */}
        <div className="solve-cta-container reveal-on-scroll">
          <Link to="/start-project" className="solve-cta-link">
            <span>Discuss Your Project</span>
            <span className="solve-cta-arrow" aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
