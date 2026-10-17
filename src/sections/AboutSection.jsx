import React from 'react';
import {
  Wrench,
  Target,
  Link as LinkIcon,
  Brain,
  Eye,
  Shield,
  CheckCircle2
} from 'lucide-react';
import './AboutSection.css';

/**
 * Core principles guiding Hutomate engineering and client collaboration
 */
const PRINCIPLES = [
  {
    id: 'practical-implementation',
    icon: Wrench,
    title: 'Practical implementation',
    description: 'Engineered for real-world utility and immediate operational impact, not experimental novelty.',
    accent: '#7657E8'
  },
  {
    id: 'tailored-solutions',
    icon: Target,
    title: 'Tailored solutions',
    description: 'Custom-configured around your proprietary workflows rather than forcing rigid generic templates.',
    accent: '#25A86A'
  },
  {
    id: 'existing-tool-integration',
    icon: LinkIcon,
    title: 'Existing tool integration',
    description: 'Designed to unify your current CRM, spreadsheets, email, and ERP systems without disruption.',
    accent: '#4389F5'
  },
  {
    id: 'thoughtful-ai-use',
    icon: Brain,
    title: 'Thoughtful AI use',
    description: 'Deployed purposefully where intelligent reasoning provides measurable speed and accuracy advantage.',
    accent: '#E89A42'
  },
  {
    id: 'human-oversight',
    icon: Eye,
    title: 'Human oversight',
    description: 'Constructed with intuitive approval gates, audit logs, and exception handoffs to team members.',
    accent: '#F16B75'
  },
  {
    id: 'reliable-systems',
    icon: Shield,
    title: 'Reliable systems',
    description: 'Hardened against edge cases, with deterministic error handling and enterprise maintainability.',
    accent: '#7657E8'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="about-container">
        <div className="about-layout">
          {/* Left Column (60% on desktop): Editorial narrative */}
          <div className="about-content-column">
            <header className="about-header">
              <div className="about-eyebrow">
                <span className="about-eyebrow-dot" aria-hidden="true" />
                <span>06 / ABOUT</span>
              </div>
              
              <h2 id="about-heading" className="about-headline">
                Technology that starts{'\n'}with understanding.
              </h2>
            </header>

            <div className="about-body">
              <p className="about-paragraph about-paragraph--lead">
                Hutomate focuses on understanding business processes before recommending technology. We believe the best automation solutions come from deeply understanding how a business operates, what challenges it faces, and where intelligent systems can make a genuine difference.
              </p>

              <p className="about-paragraph">
                Our approach emphasizes practical implementation, solutions tailored to your specific requirements, thoughtful integration with your existing tools, and systems designed for reliability and maintainability.
              </p>
            </div>

            {/* Editorial Highlight Callout */}
            <div className="about-editorial-callout" role="region" aria-label="Our philosophy">
              <div className="about-callout-quote-mark" aria-hidden="true">“</div>
              <blockquote className="about-callout-quote">
                Automation should reduce friction, not introduce new layers of complexity.
              </blockquote>
              <div className="about-callout-footer">
                <div className="about-callout-badge">
                  <CheckCircle2 size={15} className="about-callout-check" aria-hidden="true" />
                  <span>Process-first methodology</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (40% on desktop): 6 Values/Principles list */}
          <div className="about-principles-column">
            <div className="about-principles-header">
              <span className="about-principles-caption">Guiding Principles</span>
              <span className="about-principles-count">6 Foundational Standards</span>
            </div>

            <ul className="about-principles-list" role="list">
              {PRINCIPLES.map((principle) => {
                const IconComp = principle.icon;
                return (
                  <li
                    key={principle.id}
                    className="about-principle-item"
                    style={{ '--item-accent': principle.accent }}
                  >
                    <div
                      className="about-principle-icon-wrap"
                      style={{ color: principle.accent }}
                      aria-hidden="true"
                    >
                      <IconComp size={20} strokeWidth={2.2} />
                    </div>

                    <div className="about-principle-content">
                      <h3 className="about-principle-title">
                        {principle.title}
                      </h3>
                      <p className="about-principle-desc">
                        {principle.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
