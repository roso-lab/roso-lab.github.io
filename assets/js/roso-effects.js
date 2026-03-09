/* =====================================================
   ROSO Lab — Scroll Animations & Navigation Effects
   ===================================================== */

(function () {
  'use strict';

  /* --- 1. Scroll Animation Observer --- */
  function initScrollAnimations() {
    var animEls = document.querySelectorAll(
      '.anim-fade-up, .anim-fade-in, .anim-scale-in, .anim-slide-left, .anim-slide-right'
    );
    if (!animEls.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    animEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --- 2. Glassmorphism Nav on Scroll --- */
  function initNavScroll() {
    var masthead = document.getElementById('masthead');
    if (!masthead) return;

    var ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          if (window.scrollY > 50) {
            masthead.classList.add('masthead--scrolled');
          } else {
            masthead.classList.remove('masthead--scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial check
  }

  /* --- 3. Smooth Scroll-to-Top --- */
  function initScrollToTop() {
    var btn = document.querySelector('.scroll-to-top');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --- Init on DOM ready --- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initScrollAnimations();
    initNavScroll();
    initScrollToTop();
  }
})();
