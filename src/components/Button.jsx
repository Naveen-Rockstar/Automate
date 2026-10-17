import React from 'react';
import './Button.css';

/**
 * Reusable Button component for Hutomate
 * 
 * @param {'primary' | 'secondary' | 'ghost'} variant - Visual appearance
 * @param {'sm' | 'md' | 'lg'} size - Button size
 * @param {string} href - If provided, renders as <a> link, otherwise <button>
 * @param {boolean} arrow - Appends a smooth animating arrow icon
 * @param {React.ReactNode} icon - Optional leading icon
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  className = '',
  icon,
  arrow = false,
  type = 'button',
  target,
  rel,
  disabled = false,
  ...restProps
}) {
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {icon && <span className="btn-icon" aria-hidden="true">{icon}</span>}
      <span className="btn-text">{children}</span>
      {arrow && (
        <span className="btn-arrow" aria-hidden="true">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 1.5L13 6M13 6L8.5 10.5M13 6H1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        {...restProps}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {content}
    </button>
  );
}
