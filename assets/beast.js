/* ============================================
   B.E.A.S.T. — scroll fade-ins, counters, hero typewriter
   Ported from the design reference, scoped to beast-* hooks.
   ============================================ */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fadeSel = '.beast-fade, .beast-stagger';

  if ('IntersectionObserver' in window && !reduce) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll(fadeSel).forEach(function (el) { obs.observe(el); });
  } else {
    document.querySelectorAll(fadeSel).forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Counters
  function animateCounter(el) {
    var target = parseInt(el.dataset.beastCounter, 10);
    if (isNaN(target)) return;
    var suffix = el.dataset.beastSuffix || '';
    var duration = parseInt(el.dataset.beastDuration, 10) || 1800;
    var start = performance.now();
    function step(now) {
      var p = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (p < 1) { requestAnimationFrame(step); } else { el.textContent = target + suffix; }
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window && !reduce) {
    var cObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCounter(e.target); cObs.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-beast-counter]').forEach(function (el) {
      el.textContent = '0' + (el.dataset.beastSuffix || ''); cObs.observe(el);
    });
  } else {
    document.querySelectorAll('[data-beast-counter]').forEach(function (el) {
      var t = parseInt(el.dataset.beastCounter, 10);
      if (!isNaN(t)) el.textContent = t + (el.dataset.beastSuffix || '');
    });
  }

  // Hero typewriter on the accent word
  var tw = document.querySelector('.beast-type');
  if (tw) {
    if (reduce) { tw.classList.add('is-typed'); }
    else {
      var full = tw.textContent; tw.textContent = ''; tw.classList.add('is-typing');
      setTimeout(function () {
        var i = 0;
        (function type() {
          if (i < full.length) { tw.textContent += full.charAt(i++); setTimeout(type, 110); }
          else { setTimeout(function () { tw.classList.remove('is-typing'); }, 1200); }
        })();
      }, 700);
    }
  }
})();
