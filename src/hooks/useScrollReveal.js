import { useEffect } from 'react';

/**
 * Custom hook for smooth, performant scroll-triggered reveals
 * Automatically handles cleanup, threshold detection, and reduced motion preferences.
 */
export function useScrollReveal(trigger) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      document.documentElement.classList.remove('js-scroll-enabled');
      document.querySelectorAll('.reveal-on-scroll, .reveal-group, .reveal-node').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // Enable JS scroll animation styles
    document.documentElement.classList.add('js-scroll-enabled');

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll, .reveal-group, .reveal-node').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Unobserve once revealed so it does not flicker when scrolling back and forth
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-group, .reveal-node');
    elements.forEach((el) => {
      // If element is already in viewport on mount (e.g. hero or top of page), reveal it immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-revealed');
      } else {
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [trigger]);
}
