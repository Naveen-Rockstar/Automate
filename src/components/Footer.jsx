import React from 'react';
import { ArrowUp, Globe } from 'lucide-react';
import './Footer.css';

/**
 * Hutomate Connected Node Brand Symbol for Dark Surfaces
 */
export function FooterBrandSymbol({ size = 30, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`footer-brand-symbol ${className}`}
      aria-hidden="true"
    >
      {/* Network Connections */}
      <line x1="16" y1="6" x2="7" y2="17" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="16" y1="6" x2="25" y2="15" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="7" y1="17" x2="16" y2="26" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="25" y1="15" x2="16" y2="26" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="16" y1="6" x2="16" y2="26" stroke="var(--color-accent-purple, #7657E8)" strokeWidth="1.75" strokeDasharray="2 2" strokeLinecap="round" />
      
      {/* Network Nodes */}
      <circle cx="16" cy="6" r="3.25" fill="#FFFFFF" />
      <circle cx="7" cy="17" r="3" fill="#FFFFFF" />
      <circle cx="25" cy="15" r="3" fill="#FFFFFF" />
      <circle cx="16" cy="26" r="3.5" fill="var(--color-accent-purple, #7657E8)" />
      
      {/* Pulse ring */}
      <circle cx="16" cy="26" r="5.5" stroke="var(--color-accent-purple, #7657E8)" strokeWidth="1" strokeOpacity="0.45" />
    </svg>
  );
}

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
            <a href="#" className="footer-brand" aria-label="Hutomate home">
              <span className="footer-symbol-wrapper">
                <FooterBrandSymbol size={30} />
              </span>
              <span className="footer-wordmark">Hutomate</span>
            </a>

            <p className="footer-description">
              AI automation systems that help businesses simplify operations and grow faster.
            </p>

            <div className="footer-region-badge">
              <Globe size={14} className="footer-badge-icon" aria-hidden="true" />
              <span>India & United States</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <nav className="footer-col" aria-label="Footer Navigation">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#services" className="footer-link">Services</a>
              </li>
              <li>
                <a href="#solutions" className="footer-link">Solutions</a>
              </li>
              <li>
                <a href="#how-it-works" className="footer-link">How It Works</a>
              </li>
              <li>
                <a href="#about" className="footer-link">About</a>
              </li>
              <li>
                <a href="#contact" className="footer-link">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Column 3: Services */}
          <div className="footer-col" aria-label="Services List">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#services" className="footer-link">AI Agents</a>
              </li>
              <li>
                <a href="#services" className="footer-link">Workflow Automation</a>
              </li>
              <li>
                <a href="#services" className="footer-link">Voice AI</a>
              </li>
              <li>
                <a href="#services" className="footer-link">Custom AI Solutions</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Info */}
          <div className="footer-col" aria-label="Legal & Information">
            <h4 className="footer-col-title">Legal / Info</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href="#"
                  data-placeholder="true"
                  title="Coming soon - placeholder link"
                  className="footer-link footer-link--placeholder"
                  onClick={(e) => e.preventDefault()}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-placeholder="true"
                  title="Coming soon - placeholder link"
                  className="footer-link footer-link--placeholder"
                  onClick={(e) => e.preventDefault()}
                >
                  Terms of Service
                </a>
              </li>
              <li className="footer-info-item">
                <span
                  data-placeholder="true"
                  title="Coming soon - placeholder link"
                  className="footer-placeholder-note"
                >
                  Contact details coming soon
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 Hutomate. All rights reserved.
          </p>

          <div className="footer-bottom-actions">
            <div className="footer-status-pill">
              <span className="footer-status-dot" aria-hidden="true" />
              <span>All Systems Operational</span>
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
