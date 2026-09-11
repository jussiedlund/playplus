const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function initMotion() {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia(reducedMotionQuery).matches;

  root.dataset.motion = reduceMotion ? 'reduced' : 'enabled';
  initFloatingNavigation();
  if (reduceMotion) return;

  initRevealUtility();
  initHeroMotion();
}

function initRevealUtility() {
  const targets = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach((target) => target.setAttribute('data-revealed', ''));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      (entry.target as HTMLElement).setAttribute('data-revealed', '');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.25 });

  targets.forEach((target) => observer.observe(target));
}

function initFloatingNavigation() {
  const navigation = document.querySelector<HTMLElement>('[data-floating-nav]');
  if (!navigation) return;

  const sectionLabel = navigation.querySelector<HTMLElement>('[data-current-section]');
  const sections = [...document.querySelectorAll<HTMLElement>('[data-section-label]')];
  const hero = document.querySelector<HTMLElement>('.hero');
  let frame = 0;

  const update = () => {
    frame = 0;
    const heroBoundary = hero ? hero.offsetTop + hero.offsetHeight : 120;
    const visible = window.scrollY > heroBoundary;
    navigation.toggleAttribute('data-visible', visible);
    navigation.setAttribute('aria-hidden', String(!visible));
    navigation.toggleAttribute('inert', !visible);

    if (!sectionLabel) return;
    const active = sections.reduce<HTMLElement | undefined>((current, section) => (
      section.getBoundingClientRect().top <= window.innerHeight * 0.42 ? section : current
    ), undefined);
    if (active) sectionLabel.textContent = active.dataset.sectionLabel ?? '';
  };

  const requestUpdate = () => {
    if (!frame) frame = window.requestAnimationFrame(update);
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate, { passive: true });
  update();
}

function initHeroMotion() {
  const hero = document.querySelector<HTMLElement>('.hero');
  const book = document.querySelector<HTMLElement>('[data-parallax="hero-book"]');
  const reveals = [...document.querySelectorAll<HTMLElement>('[data-hero-reveal]')];
  if (!hero || !book) return;

  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  let heroInView = true;
  let pageVisible = !document.hidden;
  let frame = 0;
  let pointerX = 0;
  let pointerY = 0;

  const syncBookAnimation = () => {
    book.toggleAttribute('data-motion-paused', !heroInView || !pageVisible);
  };

  const revealHeroCopy = () => {
    const storageKey = 'play-plus-hero-revealed';
    let alreadyRevealed = false;
    try {
      alreadyRevealed = window.sessionStorage.getItem(storageKey) === 'true';
    } catch {
      // Motion is an enhancement; private browsing must not prevent the page from working.
    }

    if (alreadyRevealed) {
      reveals.forEach((target) => target.setAttribute('data-hero-revealed', ''));
      return;
    }

    window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
      reveals.forEach((target) => target.setAttribute('data-hero-revealed', ''));
      try {
        window.sessionStorage.setItem(storageKey, 'true');
      } catch {
        // Keep the reveal as a one-time effect for this document if storage is unavailable.
      }
    }));
  };

  const updateBook = () => {
    frame = 0;
    if (!heroInView || !pageVisible) return;

    const heroTop = hero.getBoundingClientRect().top;
    const scrollProgress = clamp(-heroTop / Math.max(hero.offsetHeight, 1), 0, 1);
    const maxParallax = parseFloat(getComputedStyle(book).getPropertyValue('--book-parallax-max')) || 40;
    const parallax = scrollProgress * maxParallax;
    book.style.setProperty('--book-parallax-y', `${parallax.toFixed(2)}px`);
    book.style.setProperty('--book-shadow-opacity', `${(.62 - scrollProgress * .16).toFixed(2)}`);
    book.style.setProperty('--book-tilt-x', `${pointerY.toFixed(2)}deg`);
    book.style.setProperty('--book-tilt-y', `${pointerX.toFixed(2)}deg`);
  };

  const requestBookUpdate = () => {
    if (!frame) frame = window.requestAnimationFrame(updateBook);
  };

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      heroInView = entry.isIntersecting;
      syncBookAnimation();
      if (heroInView) requestBookUpdate();
    }, { threshold: 0 }).observe(hero);
  }

  document.addEventListener('visibilitychange', () => {
    pageVisible = !document.hidden;
    syncBookAnimation();
    if (pageVisible) requestBookUpdate();
  });
  window.addEventListener('scroll', requestBookUpdate, { passive: true });
  window.addEventListener('resize', requestBookUpdate, { passive: true });

  if (hasFinePointer) {
    hero.addEventListener('pointermove', (event) => {
      const bounds = hero.getBoundingClientRect();
      const tiltLimit = parseFloat(getComputedStyle(book).getPropertyValue('--book-tilt-max')) || 2;
      pointerX = clamp(((event.clientX - bounds.left) / bounds.width - .5) * tiltLimit * 2, -tiltLimit, tiltLimit);
      pointerY = clamp(((event.clientY - bounds.top) / bounds.height - .5) * tiltLimit * -2, -tiltLimit, tiltLimit);
      book.setAttribute('data-pointer-active', '');
      requestBookUpdate();
    });
    hero.addEventListener('pointerleave', () => {
      pointerX = 0;
      pointerY = 0;
      book.removeAttribute('data-pointer-active');
      requestBookUpdate();
    });
  }

  revealHeroCopy();
  syncBookAnimation();
  updateBook();
}
