import React from 'react';
import {
  Briefcase,
  Home,
  Heart,
  ShoppingBag,
  Headphones,
  Settings,
  ArrowUpRight
} from 'lucide-react';
import './IndustriesSection.css';

/**
 * Industry specifications and bespoke automation solutions
 */
const INDUSTRIES = [
  {
    id: 'professional-services',
    name: 'Professional Services',
    icon: Briefcase,
    accent: '#7657E8', // Purple
    accentTint: 'rgba(118, 87, 232, 0.08)',
    accentBorder: 'rgba(118, 87, 232, 0.3)',
    tag: 'Legal, Consulting & Finance',
    challenge: 'Manual client intake, fragmented documentation, and billable hours wasted on repetitive follow-ups and file organization.',
    solution: 'Automate client onboarding, document handling, and follow-up processes with intelligent intake verification and proactive CRM logging.'
  },
  {
    id: 'home-services',
    name: 'Home Services',
    icon: Home,
    accent: '#25A86A', // Green
    accentTint: 'rgba(37, 168, 106, 0.08)',
    accentBorder: 'rgba(37, 168, 106, 0.3)',
    tag: 'HVAC, Plumbing & Electrical',
    challenge: 'Missed inbound calls during active jobs, double-booked field technicians, and delayed dispatch updates causing lost bookings.',
    solution: 'Streamline scheduling, customer communication, and job management with 24/7 autonomous phone agents and live calendar sync.'
  },
  {
    id: 'healthcare-admin',
    name: 'Healthcare Administration',
    icon: Heart,
    accent: '#4389F5', // Blue
    accentTint: 'rgba(67, 137, 245, 0.08)',
    accentBorder: 'rgba(67, 137, 245, 0.3)',
    tag: 'Clinics & Care Practices',
    challenge: 'High appointment no-show rates, manual patient intake transcription, and staff overload navigating compliance and records.',
    solution: 'Simplify appointment booking, patient communication, and administrative workflows while maintaining strict data confidentiality.'
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    icon: ShoppingBag,
    accent: '#E89A42', // Warm Orange
    accentTint: 'rgba(232, 154, 66, 0.08)',
    accentBorder: 'rgba(232, 154, 66, 0.3)',
    tag: 'Direct-to-Consumer & B2B Stores',
    challenge: 'Mismatched inventory tallies across channels, slow order fulfillment routing, and repetitive where-is-my-order support tickets.',
    solution: 'Automate order processing, inventory updates, and customer support responses with instant ERP integration and tracking dispatch.'
  },
  {
    id: 'sales-support',
    name: 'Sales & Customer Support',
    icon: Headphones,
    accent: '#F16B75', // Soft Coral
    accentTint: 'rgba(241, 107, 117, 0.08)',
    accentBorder: 'rgba(241, 107, 117, 0.3)',
    tag: 'High-Velocity Teams',
    challenge: 'Warm leads going cold outside standard office hours, inconsistent triage across channels, and repetitive tier-one inquiries.',
    solution: 'Qualify leads faster, route enquiries, and respond to customers around the clock with human-grade conversational intelligence.'
  },
  {
    id: 'internal-operations',
    name: 'Internal Operations',
    icon: Settings,
    accent: '#7657E8', // Purple
    accentTint: 'rgba(118, 87, 232, 0.08)',
    accentBorder: 'rgba(118, 87, 232, 0.3)',
    tag: 'Cross-Functional Back-Office',
    challenge: 'Disconnected SaaS tools, error-prone manual spreadsheets, and days consumed compiling weekly performance and status reports.',
    solution: 'Connect internal tools, automate reporting, and reduce manual data entry through unified event-driven integration pipelines.'
  }
];

export default function IndustriesSection() {
  return (
    <section id="solutions" className="industries-section" aria-labelledby="industries-heading">
      <div className="industries-container">
        {/* Header */}
        <header className="industries-header">
          <div className="industries-eyebrow">
            <span className="industries-eyebrow-dot" aria-hidden="true" />
            <span>05 / INDUSTRIES</span>
          </div>
          
          <h2 id="industries-heading" className="industries-headline">
            Automation that adapts{'\n'}to your industry.
          </h2>
          
          <p className="industries-subhead">
            Every sector faces distinct operational friction. We design specialized autonomous systems that integrate with the software tools your team already relies upon.
          </p>
        </header>

        {/* 6-Card Responsive Grid (3x2 Desktop, 2x3 Tablet, 1x6 Mobile) */}
        <div className="industries-grid" role="list">
          {INDUSTRIES.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <article
                key={item.id}
                className="industry-card"
                style={{
                  '--card-accent': item.accent,
                  '--card-accent-tint': item.accentTint,
                  '--card-accent-border': item.accentBorder
                }}
                role="listitem"
                tabIndex={0}
                aria-labelledby={`industry-title-${index}`}
              >
                {/* Card Top Row: Icon + Subtle Accent Indicator */}
                <div className="industry-card-header">
                  <div
                    className="industry-icon-box"
                    style={{ backgroundColor: item.accentTint, color: item.accent }}
                    aria-hidden="true"
                  >
                    <IconComponent size={24} strokeWidth={2.2} />
                  </div>

                  <div className="industry-badge">
                    <span
                      className="industry-accent-dot"
                      style={{ backgroundColor: item.accent }}
                      aria-hidden="true"
                    />
                    <span className="industry-tag-text">{item.tag}</span>
                  </div>
                </div>

                {/* Industry Name */}
                <h3 id={`industry-title-${index}`} className="industry-name">
                  {item.name}
                </h3>

                {/* Challenge Description */}
                <div className="industry-detail-block industry-challenge-block">
                  <span className="industry-detail-label">The Challenge</span>
                  <p className="industry-detail-text">{item.challenge}</p>
                </div>

                {/* Automation Solution Approach */}
                <div className="industry-detail-block industry-solution-block">
                  <span
                    className="industry-detail-label industry-detail-label--solution"
                    style={{ color: item.accent }}
                  >
                    Automated Approach
                  </span>
                  <p className="industry-detail-text industry-solution-text">
                    {item.solution}
                  </p>
                </div>

                {/* Card Footer: Subtle explore hint */}
                <div className="industry-card-footer" aria-hidden="true">
                  <span className="industry-explore-label">Engineered for reliability</span>
                  <ArrowUpRight size={16} className="industry-arrow-icon" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
