(function () {
  'use strict';

  const isMobile = window.innerWidth <= 460;
  const isLargeScreen = window.innerWidth >= 1920;

  /* ---------- IKONE U NAVBARU ---------- */
  const NAVBAR_ICONS = isMobile ? [
    { type: 'blueberry', left: 60, top: 13, size: 9, rotation: 15, opacity: 0.32 },
    { type: 'donut',     left: 65, top: 68, size: 12, rotation: -15, opacity: 0.44 },
    { type: 'coffee',    left: 88, top: 90, size: 10, rotation: 25, opacity: 0.38 },
    { type: 'blueberry', left: 38, top: 80, size: 10, rotation: 0, opacity: 0.38 },
    { type: 'coffee',    left: 9, top: 82, size: 8, rotation: 20, opacity: 0.26 },
  ] : [
    { type: 'blueberry', left: 18, top: 90, size: 30, rotation: 15, opacity: 0.55 },
    { type: 'coffee', left: 28, top: 95, size: 25, rotation: 45, opacity: 0.40 },
    { type: 'blueberry', left: 37, top: 30, size: 32, rotation: 0, opacity: 0.55 },
    { type: 'blueberry', left: 40, top: 96, size: 30, rotation: 15, opacity: 0.55 },
    { type: 'blueberry', left: 68, top: 96, size: 30, rotation: 15, opacity: 0.55 },
    { type: 'donut', left: 55, top: 95, size: 32, rotation: 8, opacity: 0.20 },
    { type: 'donut', left: 88, top: 95, size: 32, rotation: 12, opacity: 0.40 },
    { type: 'donut', left: 55, top: 20, size: 32, rotation: -20, opacity: 0.24 },
    { type: 'coffee', left: 75, top: 16, size: 33, rotation: 35, opacity: 0.35 },
    { type: 'coffee', left: 80, top: 96, size: 33, rotation: 35, opacity: 0.35 },
    { type: 'donut', left: 25, top: 55, size: 30, rotation: 15, opacity: 0.40 },
    { type: 'blueberry', left: 88, top: 20, size: 34, rotation: 25, opacity: 0.60 },
    { type: 'coffee', left: 95, top: 75, size: 25, rotation: -30, opacity: 0.40 },
  ];

  /* ---------- IKONE U HERO SEKCIJI ---------- */
  const HERO_ICONS = isMobile ? [
    { type: 'donut',     left: 90, top: 18, size: 12, rotation: -10, opacity: 0.20 },
    { type: 'blueberry', left: 16, top: 56, size: 10, rotation: 0, opacity: 0.16 },
    { type: 'coffee',    left: 8, top: 26, size: 12, rotation: 20, opacity: 0.16 },
    { type: 'blueberry', left: 92, top: 50, size: 16, rotation: 0, opacity: 0.14 },
    { type: 'donut',     left: 56, top: 66, size: 10, rotation: 12, opacity: 0.12 },
  ] : [
    { type: 'donut', left: 5, top: 46, size: 30, rotation: -10, opacity: 0.40 },
    { type: 'blueberry', left: 14, top: 32, size: 28, rotation: 0, opacity: 0.47 },
    { type: 'blueberry', left: 37, top: 32, size: 26, rotation: 0, opacity: 0.50 },
    { type: 'blueberry', left: 54, top: 37, size: 25, rotation: -50, opacity: 0.60 },
    { type: 'coffee', left: 22, top: 5, size: 30, rotation: -25, opacity: 0.35 },
    { type: 'donut', left: 15, top: 73, size: 32, rotation: -10, opacity: 0.40 },
    { type: 'blueberry', left: 95, top: 28, size: 26, rotation: 20, opacity: 0.48 },
    { type: 'coffee', left: 54, top: 55, size: 32, rotation: 160, opacity: 0.50 },
    { type: 'donut', left: 45, top: 38, size: 31, rotation: 20, opacity: 0.30 },
    { type: 'blueberry', left: 70, top: 80, size: 30, rotation: 30, opacity: 0.50 },
    { type: 'blueberry', left: 50, top: 76, size: 30, rotation: 30, opacity: 0.58 },
    { type: 'coffee', left: 78, top: 15, size: 28, rotation: -40, opacity: 0.35 },
    { type: 'donut', left: 98, top: 55, size: 20, rotation: -25, opacity: 0.49 },
    { type: 'blueberry', left: 95, top: 72, size: 34, rotation: 0, opacity: 0.58 },
  ];

  if (isLargeScreen) {
    HERO_ICONS.push(
  
      { type: 'blueberry', left: 8, top: 22, size: 20, rotation: 10, opacity: 0.72 },
      { type: 'coffee', left: 18, top: 82, size: 24, rotation: 30, opacity: 0.60 },
      { type: 'donut', left: 30, top: 18, size: 24, rotation: -20, opacity: 0.58 },
  
      { type: 'blueberry', left: 42, top: 82, size: 18, rotation: 0, opacity: 0.68 },
      { type: 'coffee', left: 62, top: 30, size: 18, rotation: 120, opacity: 0.62 },
  
      { type: 'donut', left: 85, top: 85, size: 26, rotation: 15, opacity: 0.55 },
      { type: 'donut', left: 58, top: 80, size: 26, rotation: -15, opacity: 0.55 },

      { type: 'blueberry', left: 86, top: 10, size: 20, rotation: 18, opacity: 0.75 },
  
      { type: 'coffee', left: 4, top: 72, size: 22, rotation: -30, opacity: 0.60 },
      { type: 'coffee', left: 44, top: 22, size: 22, rotation: 30, opacity: 0.60 },
      { type: 'coffee', left: 20, top: 22, size: 18, rotation: -30, opacity: 0.60 },
      { type: 'donut', left: 2, top: 22, size: 20 },
      { type: 'donut', left: 55, top: 22, size: 20 },
      { type: 'donut', left: 30, top: 80, size: 20, rotation: -20 },
      { type: 'donut', left: 44, top: 70, size: 23, rotation: 20 },
      { type: 'blueberry', left: 8, top: 80, size: 18, rotation: 20, opacity: 0.55 }
    );
  
    HERO_ICONS.forEach(icon => {
      icon.opacity = Math.min(icon.opacity + 0.15, 0.85);
    });
  }

  const SOURCES = {
    blueberry: 'assets/icons/decorative/blueberry.svg',
    coffee: 'assets/icons/decorative/coffe.svg',
    donut: 'assets/icons/decorative/smalldonut.svg',
  };

  function renderIcons(layerId, icons) {
    const layer = document.getElementById(layerId);

    if (!layer) {
      console.warn('decor: layer not found:', layerId);
      return;
    }

    layer.innerHTML = '';

    const frag = document.createDocumentFragment();

    icons.forEach((ic, i) => {
      const src = SOURCES[ic.type];

      if (!src) {
        console.warn('decor: unknown type', ic.type, 'at index', i);
        return;
      }

      const img = document.createElement('img');

      img.classList.add('decor-icon');

      img.src = src;
      img.alt = '';
      img.setAttribute('aria-hidden', 'true');

      img.style.position = 'absolute';
      img.style.left = ic.left + '%';
      img.style.top = ic.top + '%';
      img.style.width = ic.size + 'px';
      img.style.height = 'auto';
      img.style.opacity = ic.opacity;

      img.style.setProperty('--rot', ic.rotation + 'deg');
      img.style.transform = `translate(-50%, -50%) rotate(var(--rot))`;

      img.style.pointerEvents = 'none';

      frag.appendChild(img);
    });

    layer.appendChild(frag);
  }

  function init() {
    renderIcons('decor-nav', NAVBAR_ICONS);
    renderIcons('decor-hero', HERO_ICONS);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();