import React, { useState } from 'react';
import { Compass, Layers, Code2, Rocket } from 'lucide-react';
import './ProcessSection.css';

const STAGES = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand your business, workflows, pain points, and objectives through detailed consultation.',
    icon: Compass,
    accent: '#7657E8',
    deliverables: ['Workflow Audit', 'Pain-Point Mapping', 'Feasibility Assessment']
  },
  {
    step: '02',
    title: 'Design',
    description: 'Define the solution architecture, integrations, and implementation plan tailored to your needs.',
    icon: Layers,
    accent: '#4389F5',
    deliverables: ['System Architecture', 'API & Data Contracts', 'Implementation Roadmap']
  },
  {
    step: '03',
    title: 'Build',
    description: 'Develop and thoroughly test the agreed automation system with regular progress updates.',
    icon: Code2,
    accent: '#25A86A',
    deliverables: ['Custom Development', 'Edge Case Validation', 'Staging Verification']
  },
  {
    step: '04',
    title: 'Deploy',
    description: 'Launch the solution, verify its behavior in production, and provide the agreed ongoing support.',
    icon: Rocket,
    accent: '#E89A42',
    deliverables: ['Production Cutover', 'Real-Time Monitoring', 'Continuous Optimization']
  }
];

export default function ProcessSection() {
  const [activeStage, setActiveStage] = useState(0);

  // Calculate SVG progress line endpoint based on current stage index (0 to 3)
  // Stage centers at 12.5%, 37.5%, 62.5%, 87.5% in a 1000-unit coordinate space
  const progressPercent = 125 + (activeStage / (STAGES.length - 1)) * (875 - 125);

  return (
    <section id="how-it-works" className="process-section" aria-labelledby="process-title">
      <div className="process-container">
        {/* Section Header */}
        <header className="process-header">
          <div className="process-eyebrow">
            <span className="process-eyebrow-dot"></span>
            <span>04 / PROCESS</span>
          </div>
          <h2 id="process-title" className="process-title">
            From business challenge{'\n'}to intelligent solution.
          </h2>
          <p className="process-intro">
            A proven, four-stage delivery framework engineered to move smoothly from initial discovery to reliable production deployment.
          </p>
        </header>

        {/* Timeline Component */}
        <div className="process-timeline-wrapper">
          {/* Connecting SVG line behind nodes on Desktop */}
          <svg
            className="process-svg-track"
            viewBox="0 0 1000 6"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Background dashed path */}
            <line
              x1="125"
              y1="3"
              x2="875"
              y2="3"
              className="process-track-bg"
            />
            {/* Active progress stroke */}
            <line
              x1="125"
              y1="3"
              x2={progressPercent}
              y2="3"
              className="process-track-progress"
              style={{ stroke: STAGES[activeStage]?.accent || '#7657E8' }}
            />
          </svg>

          {/* Stages List */}
          <div className="process-stages-grid" role="list">
            {STAGES.map((stage, index) => {
              const IconComponent = stage.icon;
              const isActive = activeStage === index;

              return (
                <div
                  key={stage.step}
                  className={`process-stage process-stage--${index + 1} ${isActive ? 'process-stage--active' : ''}`}
                  onClick={() => setActiveStage(index)}
                  onMouseEnter={() => setActiveStage(index)}
                  onFocus={() => setActiveStage(index)}
                  tabIndex={0}
                  role="listitem"
                  aria-label={`Stage ${stage.step}: ${stage.title}`}
                >
                  {/* Node Circle */}
                  <div className="process-node-container">
                    <div className="process-node">
                      <span>{stage.step}</span>
                      <div className="process-node-pulse"></div>
                    </div>
                  </div>

                  {/* Stage Card */}
                  <div className="process-card">
                    <div className="process-card-top">
                      <span className="process-stage-num-badge">
                        Stage {stage.step}
                      </span>
                      <div className="process-stage-icon">
                        <IconComponent size={18} strokeWidth={2.2} />
                      </div>
                    </div>

                    <h3 className="process-stage-title">{stage.title}</h3>
                    <p className="process-stage-desc">{stage.description}</p>

                    <div className="process-deliverables" aria-label="Key deliverables">
                      {stage.deliverables.map((item, itemIdx) => (
                        <span key={itemIdx} className="process-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
