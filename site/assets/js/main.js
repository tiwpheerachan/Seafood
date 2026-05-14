/* Ra Beung Lay — interactive layer */

(() => {
  'use strict';

  /* ---------- Move .nav__mobile OUT of .nav ----------
     .nav has backdrop-filter when scrolled, which creates a fixed-position
     containing block — that traps .nav__mobile inside the 64px nav and
     causes its content to overflow into the page. Re-parent to body. */
  const navMobileEl = document.querySelector('.nav__mobile');
  const navHostEl = document.querySelector('.nav');
  if (navMobileEl && navHostEl && navMobileEl.parentElement === navHostEl) {
    document.body.appendChild(navMobileEl);
  }

  /* ---------- Custom cursor (desktop only, opt-in) ---------- */
  const isTouch = matchMedia('(hover: none), (pointer: coarse)').matches || ('ontouchstart' in window);
  const supportsHover = !isTouch && matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (supportsHover) {
    document.body.classList.add('has-cursor');
    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'cursor';
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mx = -100, my = -100, rx = -100, ry = -100;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    document.addEventListener('mouseleave', () => { dot.style.opacity = ring.style.opacity = 0; });
    document.addEventListener('mouseenter', () => { dot.style.opacity = ring.style.opacity = 1; });

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    };
    tick();

    const interactive = 'a, button, [role="button"], .dish, .dish-pro, .review, .nav__cta, summary, input, textarea';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(interactive)) { dot.classList.add('active'); ring.classList.add('active'); }
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(interactive)) { dot.classList.remove('active'); ring.classList.remove('active'); }
    });
  }

  /* ---------- Scroll-aware nav ---------- */
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (window.scrollY > 30) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  if (nav) {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  const burger = document.querySelector('.nav__burger');
  const mobile = document.querySelector('.nav__mobile');
  if (burger && mobile) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-open');
      mobile.classList.toggle('is-open');
      document.body.style.overflow = mobile.classList.contains('is-open') ? 'hidden' : '';
    });
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      burger.classList.remove('is-open');
      mobile.classList.remove('is-open');
      document.body.style.overflow = '';
    }));
  }

  /* ---------- Language toggle (EN / ไทย) ---------- */
  const langButtons = document.querySelectorAll('[data-lang]');
  const setLang = (lang) => {
    document.documentElement.dataset.lang = lang;
    langButtons.forEach(b => b.classList.toggle('is-active', b.dataset.lang === lang));
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = el.dataset[lang] || el.textContent;
    });
    try { localStorage.setItem('rabeunglay-lang', lang); } catch (_) {}
  };
  langButtons.forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));
  let stored = 'en';
  try { stored = localStorage.getItem('rabeunglay-lang') || 'en'; } catch (_) {}
  // Don't actually swap text yet — copy is bilingually visible. Just track toggle state.
  langButtons.forEach(b => b.classList.toggle('is-active', b.dataset.lang === stored));

  /* ---------- Scroll reveal ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- Menu nav (sticky pill scroll-spy) ---------- */
  const catLinks = document.querySelectorAll('.menu-nav__btn');
  const cats = document.querySelectorAll('.menu-cat');
  if (catLinks.length && cats.length) {
    catLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          catLinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + id));
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });
    cats.forEach(c => spy.observe(c));
  }

  /* ---------- Animated count-up ---------- */
  const countEls = document.querySelectorAll('[data-count]');
  const counter = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      counter.unobserve(e.target);
      const end = parseFloat(e.target.dataset.count);
      const decimals = (e.target.dataset.count.split('.')[1] || '').length;
      const dur = 1600;
      const start = performance.now();
      const step = (t) => {
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const value = (end * eased).toFixed(decimals);
        e.target.firstChild.nodeValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.5 });
  countEls.forEach(el => counter.observe(el));

  /* ---------- Hero parallax ---------- */
  const hero = document.querySelector('.hero');
  if (hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const sky = hero.querySelector('.hero__sky');
    const sun = hero.querySelector('.hero__sun');
    const karsts = hero.querySelector('.hero__karsts');
    const sea = hero.querySelector('.hero__sea');
    const content = hero.querySelector('.hero__content');
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > window.innerHeight) return;
      if (sun) sun.style.transform = `translateY(${y * 0.25}px)`;
      if (karsts) karsts.style.transform = `translateY(${y * 0.12}px)`;
      if (sea) sea.style.transform = `translateY(${y * -0.05}px)`;
      if (content) content.style.transform = `translateY(${y * 0.18}px)`;
      if (sky) sky.style.opacity = Math.max(0, 1 - y / (window.innerHeight * 0.8));
    }, { passive: true });
  }

  /* ---------- Subtle parallax on .parallax__bg ---------- */
  const parallaxEls = document.querySelectorAll('.parallax__bg');
  if (parallaxEls.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const update = () => {
      parallaxEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.15;
        el.style.transform = `translateY(${offset}px)`;
      });
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ---------- Cursor magnetic CTAs ---------- */
  const magnets = document.querySelectorAll('[data-magnet]');
  magnets.forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });

  /* ---------- Year ---------- */
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
