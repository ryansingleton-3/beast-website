/* ============================================
   B.E.A.S.T. — Shared Scroll Animations
   - IntersectionObserver fade-ins
   - Animated number counters
   ============================================ */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  // ----- Fade in observer ----------------------------------------------
  const fadeSelector = '.fade-in, .fade-in-left, .fade-in-right, .stagger-children';

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    document.querySelectorAll(fadeSelector).forEach((el) => {
      fadeObserver.observe(el);
    });
  } else {
    // Fallback: just show everything immediately
    document.querySelectorAll(fadeSelector).forEach((el) => {
      el.classList.add('is-visible');
    });
  }

  // ----- Counter animation ---------------------------------------------
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    if (isNaN(target)) return;

    const suffix = el.dataset.suffix || '';
    const duration = parseInt(el.dataset.duration, 10) || 1800;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('[data-counter]').forEach((el) => {
      // Initialize at zero so the user sees the count up
      const suffix = el.dataset.suffix || '';
      el.textContent = '0' + suffix;
      counterObserver.observe(el);
    });
  } else {
    // Fallback: show the final value immediately
    document.querySelectorAll('[data-counter]').forEach((el) => {
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      if (!isNaN(target)) el.textContent = target + suffix;
    });
  }

  // ----- Hero typewriter -----------------------------------------------
  // Targets the accent span inside .hero h1 (only Concept A uses this
  // structure — Concept B uses <em>, Concept C uses <div>, so this
  // selector is naturally scoped to Concept A only).
  function runTypewriter(el) {
    const fullText = el.textContent;
    el.textContent = '';
    el.classList.add('is-typing');

    const charDelay = 110; // ms per character
    const startDelay = 700; // ms wait before typing starts

    setTimeout(() => {
      let i = 0;
      function typeNext() {
        if (i < fullText.length) {
          el.textContent += fullText.charAt(i);
          i++;
          setTimeout(typeNext, charDelay);
        } else {
          // Done typing — let the caret blink for a moment, then remove it
          setTimeout(() => {
            el.classList.remove('is-typing');
            el.classList.add('is-typed');
          }, 1400);
        }
      }
      typeNext();
    }, startDelay);
  }

  const typewriterTarget = document.querySelector('.hero h1 span');
  if (typewriterTarget) {
    if (prefersReducedMotion) {
      // Reduced motion: skip animation, leave text in place
      typewriterTarget.classList.add('is-typed');
    } else {
      runTypewriter(typewriterTarget);
    }
  }
})();
