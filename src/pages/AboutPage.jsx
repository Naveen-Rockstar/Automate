import React from 'react';
import { Globe } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import CtaBanner from '../components/CtaBanner';
import './AboutPage.css';

export default function AboutPage() {
  usePageMetadata({
    title: 'About Hutomate — Engineering Practical AI Systems',
    description: 'Hutomate is an early-stage AI implementation partner focused on engineering reliable automation architectures that solve real operational friction.',
    path: '/about',
  });

  useScrollReveal();

  const principles = [
    {
      num: '01',
      title: 'Operational Feasibility First',
      desc: 'We never sell generative AI where a deterministic script, clean webhook, or simple automation rule is faster, cheaper, and more reliable.',
    },
    {
      num: '02',
      title: 'Human-in-the-Loop by Design',
      desc: 'Autonomous does not mean unsupervised. We design systems that empower internal teams, escalating edge cases and preserving human agency at critical junctures.',
    },
    {
      num: '03',
      title: 'Radical Honesty & Transparency',
      desc: 'We do not fabricate fake case studies, invent vanity metrics, or disguise early concepts as deployed software. We build credibility through engineering rigor.',
    },
    {
      num: '04',
      title: 'Model & Platform Agnosticism',
      desc: 'We never lock you into a single proprietary ecosystem. We select the best models and infrastructure for your exact performance, latency, and budget requirements.',
    },
    {
      num: '05',
      title: 'Production Engineering Rigor',
      desc: 'We apply software engineering standards—schema validation, automated retries, rate limiting, and observability—to every automation pipeline we deliver.',
    },
    {
      num: '06',
      title: 'Client Data Sovereignty',
      desc: 'Your data is never used to train public foundational models. All API integrations are configured with zero-retention policies and enterprise privacy guarantees.',
    },
  ];

  return (
    <div className="about-page">
      <PageHeader
        eyebrow="ABOUT HUTOMATE"
        badgeText="Our Foundation"
        badgeType="purple"
        title="Engineering practical AI systems for modern business operations."
        description="Businesses don't need speculative AI gimmicks or hype-driven experiments. They need reliable, maintainable software architectures that eliminate tedious work and integrate cleanly into the tools they already use."
      >
        <Button variant="primary" size="md" arrow href="/start-project">
          Work with Hutomate
        </Button>
        <Button variant="secondary" size="md" href="/process">
          Explore Delivery Process
        </Button>
      </PageHeader>

      <section className="section detail-section">
        <div className="container">
          <div className="about-intro-grid reveal-on-scroll">
            <h2 className="about-intro-title reveal-on-scroll reveal-delay-1">
              Bridging the gap between frontier AI and everyday operational execution.
            </h2>
            <div className="about-intro-text reveal-on-scroll reveal-delay-2">
              <p>
                Hutomate is an early-stage AI automation and implementation partner. We work directly with founders, operations leaders, and department heads to analyze manual bottlenecks and engineer production-grade AI pipelines.
              </p>
              <p>
                Our business model is hybrid: we build bespoke, high-impact custom automations for client organizations today, while continuously identifying repeatable operational challenges that form the foundation for modular, reusable solutions.
              </p>
            </div>
          </div>

          <div className="section-header reveal-on-scroll">
            <span className="section-label reveal-on-scroll reveal-delay-1">Core Philosophy</span>
            <h2 className="section-heading reveal-on-scroll reveal-delay-2">Principles that guide our engineering</h2>
            <p className="section-body reveal-on-scroll reveal-delay-3">
              How we approach every client engagement, architecture decision, and line of code.
            </p>
          </div>

          <div className="principles-grid">
            {principles.map((pr, idx) => (
              <div key={pr.num} className={`principle-card card reveal-on-scroll reveal-delay-${(idx % 3) + 1}`}>
                <span className="principle-num">{pr.num}</span>
                <h3 className="principle-title">{pr.title}</h3>
                <p className="principle-desc">{pr.desc}</p>
              </div>
            ))}
          </div>

          <div className="global-reach-box reveal-on-scroll">
            <div className="global-reach-text">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Globe size={20} className="section-label-blue" />
                <h3 style={{ margin: 0 }}>Serving Global Operational Teams</h3>
              </div>
              <p>
                Hutomate partners with forward-thinking organizations across key global markets, adapting to regional compliance frameworks, business hours, and operational cadences.
              </p>
            </div>

            <div className="regions-tags">
              <span className="region-tag">United States</span>
              <span className="region-tag">United Kingdom</span>
              <span className="region-tag">Australia</span>
              <span className="region-tag">European Union</span>
              <span className="region-tag">Global Remote</span>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to build practical automation for your team?"
        description="Let’s have an honest discussion about your current operational challenges and how tailored AI architectures can solve them."
        buttonText="Get in Touch"
        buttonHref="/start-project"
        secondaryButtonText="Read Our FAQs"
        secondaryButtonHref="/faq"
      />
    </div>
  );
}
