import React from 'react';
import './SectionLabel.css';

/**
 * SectionLabel component for eyebrow tags (e.g. "01 / HERO")
 * 
 * @param {string} number - Optional section index string, e.g. "01"
 * @param {string} text - Eyebrow label text
 * @param {string} className - Optional custom class name
 */
export default function SectionLabel({ number, text, className = '' }) {
  return (
    <div className={`section-label ${className}`.trim()} aria-label={`${number ? number + ' ' : ''}${text || ''}`}>
      {number && <span className="section-label-number">{number}</span>}
      {number && text && <span className="section-label-divider" aria-hidden="true">/</span>}
      {text && <span className="section-label-text">{text.toUpperCase()}</span>}
    </div>
  );
}
