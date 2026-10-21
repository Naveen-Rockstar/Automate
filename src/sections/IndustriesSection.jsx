import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from '../router/Router';
import { INDUSTRIES_DATA, INDUSTRY_CATEGORIES } from '../data/industriesData';
import './IndustriesSection.css';

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState('all');

  const displayedIndustries = activeTab === 'all'
    ? INDUSTRIES_DATA.slice(0, 6)
    : INDUSTRIES_DATA.filter((i) => i.category === activeTab).slice(0, 6);

  return (
    <section id="industries" className="industries-section" aria-labelledby="industries-heading">
      <div className="industries-container">
        {/* Header */}
        <header className="industries-header">
          <div className="industries-eyebrow reveal-on-scroll">
            <span className="industries-eyebrow-dot" aria-hidden="true" />
            <span>SPECIALIZED SECTORS</span>
          </div>

          <div className="industries-title-row">
            <div>
              <h2 id="industries-heading" className="industries-headline reveal-on-scroll reveal-delay-1">
                Automation tailored to your industry&apos;s exact workflows.
              </h2>
              <p className="industries-subhead reveal-on-scroll reveal-delay-2">
                Every sector operates with distinct software, compliance rules, and client communication patterns. We design bespoke systems that integrate with the tools you already rely upon.
              </p>
            </div>

            <div className="industries-header-action reveal-on-scroll reveal-delay-2">
              <Link to="/industries" className="industries-all-link">
                <span>Explore All 12 Industries</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </header>

        {/* Category Tabs */}
        <div className="industries-tabs-strip reveal-on-scroll reveal-delay-2" role="tablist">
          {INDUSTRY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeTab === cat.id}
              className={`industries-tab-btn ${activeTab === cat.id ? 'is-active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6-Card Responsive Grid */}
        <div className="industries-grid" role="list">
          {displayedIndustries.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <article
                key={item.id}
                className={`industry-card reveal-on-scroll reveal-delay-${(index % 3) + 1}`}
                role="listitem"
                tabIndex={0}
                aria-labelledby={`industry-title-${index}`}
              >
                {/* Top Row: Icon + Category Tag */}
                <div className="industry-card-header">
                  <div className="industry-icon-box" aria-hidden="true">
                    <IconComponent size={22} strokeWidth={2.2} />
                  </div>

                  <span className="industry-tag-text">{item.categoryLabel}</span>
                </div>

                {/* Industry Name */}
                <h3 id={`industry-title-${index}`} className="industry-name">
                  {item.name}
                </h3>
                <p className="industry-subtag-text">{item.tag}</p>

                {/* Challenge Description */}
                <div className="industry-detail-block industry-challenge-block">
                  <span className="industry-detail-label">The Operational Bottleneck</span>
                  <p className="industry-detail-text">{item.challenges[0]}</p>
                </div>

                {/* Solution */}
                <div className="industry-detail-block industry-solution-block">
                  <span className="industry-detail-label industry-detail-label--solution">
                    Automated Approach
                  </span>
                  <p className="industry-detail-text industry-solution-text">
                    {item.solution}
                  </p>
                </div>

                {/* Workflow Flow Badge */}
                <div className="industry-card-workflow">
                  <span className="industry-wf-label">Key Flow:</span>
                  <span className="industry-wf-text">{item.workflow}</span>
                </div>

                {/* Card Footer */}
                <div className="industry-card-footer">
                  <Link
                    to={`/start-project?industry=${item.id}`}
                    className="industry-explore-link"
                  >
                    <span>Discuss Implementation</span>
                    <ArrowUpRight size={15} />
                  </Link>

                  <div className="industry-stack-preview">
                    {item.stack.slice(0, 2).map((s, idx) => (
                      <span key={idx} className="industry-stack-mini-pill">{s}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner linking to full directory */}
        <div className="industries-bottom-bar reveal-on-scroll">
          <div className="industries-bottom-info">
            <CheckCircle2 size={18} color="#10B981" />
            <span>Looking for legal, healthcare, real estate, trades, accounting, or logistics details?</span>
          </div>
          <Link to="/industries" className="industries-bottom-cta">
            <span>Search Full Industry Directory</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
