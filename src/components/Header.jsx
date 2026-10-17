import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import './Header.css';

/**
 * Connected Node Brand Symbol SVG
 */
export function BrandSymbol({ size = 30, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`brand-symbol-svg ${className}`}
      aria-hidden="true"
    >
      {/* Network Connections */}
      <line x1="16" y1="6" x2="7" y2="17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="16" y1="6" x2="25" y2="15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="7" y1="17" x2="16" y2="26" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="25" y1="15" x2="16" y2="26" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="16" y1="6" x2="16" y2="26" stroke="var(--accent-purple, #7657E8)" strokeWidth="1.75" strokeDasharray="2 2" strokeLinecap="round" />
      
      {/* Network Nodes */}
      <circle cx="16" cy="6" r="3.25" fill="#111111" />
      <circle cx="7" cy="17" r="3" fill="#111111" />
      <circle cx="25" cy="15" r="3" fill="#111111" />
      <circle cx="16" cy="26" r="3.5" fill="var(--accent-purple, #7657E8)" />
      
      {/* Pulse rings */}
      <circle cx="16" cy="26" r="5.5" stroke="var(--accent-purple, #7657E8)" strokeWidth="1" strokeOpacity="0.4" />
    </svg>
  );
}

/**
 * Sticky Header Navigation with Backdrop Blur and Accessible Mobile Menu
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleBtnRef = useRef(null);

  // Monitor scroll for subtle frosted-glass background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and handle Escape key when mobile menu is active
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        if (toggleBtnRef.current) {
          toggleBtnRef.current.focus();
        }
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-container">
        {/* Left: Brand Wordmark & Node Symbol */}
        <a href="#" className="header-brand" aria-label="Hutomate home">
          <span className="brand-symbol-wrapper">
            <BrandSymbol size={28} />
          </span>
          <span className="brand-wordmark">Hutomate</span>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary navigation" role="navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: CTA & Mobile Toggle */}
        <div className="header-actions">
          <div className="desktop-cta-wrap">
            <Button variant="primary" size="sm" arrow href="#contact">
              Discuss Your Project
            </Button>
          </div>

          {/* Hamburger button for mobile */}
          <button
            ref={toggleBtnRef}
            type="button"
            className={`mobile-menu-toggle ${isMenuOpen ? 'is-active' : ''}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            <span className="hamburger-line top-line" />
            <span className="hamburger-line mid-line" />
            <span className="hamburger-line bot-line" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-nav-backdrop ${isMenuOpen ? 'is-active' : ''}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <aside
        id="mobile-nav-panel"
        className={`mobile-nav-panel ${isMenuOpen ? 'is-open' : ''}`}
        aria-modal="true"
        role="dialog"
        aria-label="Mobile Navigation"
      >
        <div className="mobile-nav-inner">
          <div className="mobile-nav-header">
            <span className="brand-wordmark mobile-brand">Hutomate</span>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="mobile-nav-links" aria-label="Mobile links">
            <ul className="mobile-link-list">
              {navLinks.map((link) => (
                <li key={link.href} className="mobile-link-item">
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-nav-footer">
            <Button
              variant="primary"
              size="md"
              arrow
              href="#contact"
              className="mobile-cta-btn"
              onClick={handleLinkClick}
            >
              Discuss Your Project
            </Button>
            <p className="mobile-nav-caption">
              Intelligent automation for India & USA
            </p>
          </div>
        </div>
      </aside>
    </header>
  );
}
