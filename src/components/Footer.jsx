import React from 'react';
import { ArrowUp, Globe } from 'lucide-react';
import { Link } from '../router/Router';
import HutomateLogo, { HutomateSymbol } from './HutomateLogo';
import './Footer.css';

export function FooterBrandSymbol({ size = 30, className = '' }) {
  return <HutomateSymbol size={size} color="#FFFFFF" className={className} />;
}

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site Footer">
      <div className="footer-container">
        {/* 4-Column Grid on Desktop */}
        <div className="footer-grid">
          {/* Column 1: Brand & Bio */}
          <div className="footer-col footer-col--brand">
            <Link to="/" className="footer-brand" aria-label="Hutomate home">
              <HutomateLogo color="#FFFFFF" symbolSize={30} />
            </Link>

            <p className="footer-description">
              AI automation and implementation partner helping businesses identify repetitive work, connect existing tools, and deploy custom intelligent systems.
            </p>

            <div className="footer-region-badge">
              <Globe size={14} className="footer-badge-icon" aria-hidden="true" />
              <span>Global Client Delivery (USA, UK, Australia, India)</span>
            </div>
          </div>

          {/* Column 2: EXPLORE */}
          <nav className="footer-col" aria-label="Explore Links">
            <h4 className="footer-col-title">Explore</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/capabilities" className="footer-link">Capabilities</Link>
              </li>
              <li>
                <Link to="/use-cases" className="footer-link">Use Cases</Link>
              </li>
              <li>
                <Link to="/industries" className="footer-link">Industries</Link>
              </li>
              <li>
                <Link to="/blueprints" className="footer-link">Automation Blueprints</Link>
              </li>
            </ul>
          </nav>

          {/* Column 3: COMPANY */}
          <div className="footer-col" aria-label="Company Links">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/about" className="footer-link">About Hutomate</Link>
              </li>
              <li>
                <Link to="/process" className="footer-link">How We Work</Link>
              </li>
              <li>
                <Link to="/integrations" className="footer-link">Integrations</Link>
              </li>
              <li>
                <Link to="/engagement" className="footer-link">Engagement &amp; Pricing</Link>
              </li>
              <li>
                <Link to="/security" className="footer-link">Security &amp; Responsible AI</Link>
              </li>
              <li>
                <Link to="/faq" className="footer-link">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: GET IN TOUCH & LEGAL */}
          <div className="footer-col" aria-label="Contact and Legal Links">
            <h4 className="footer-col-title">Get In Touch</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/start-project" className="footer-link">Start a Project →</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>

            <h4 className="footer-col-title footer-col-title--sub">Legal</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="footer-link">Terms</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {CURRENT_YEAR} Hutomate. All rights reserved. Custom AI Automation &amp; Systems Implementation.
          </p>

          <div className="footer-bottom-actions">
            <div className="footer-status-pill">
              <span className="footer-status-dot" aria-hidden="true" />
              <span>Custom Implementations Scoped &amp; Built to Order</span>
            </div>

            <button
              type="button"
              className="footer-back-to-top"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={14} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
