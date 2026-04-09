/* ============================================================
   PIECE OF ART — Main JavaScript
   Depends on: js/data.js (must load first)
   ============================================================ */

'use strict';

/* ── STATE ───────────────────────────────────────────────── */
let currentLang   = localStorage.getItem('poa-lang') || 'en';
let currentFilter = 'all';


/* ── ICONS ───────────────────────────────────────────────── */
/*
 * All icons: 24×24 viewBox, stroke-width 1.5, no fill.
 * Optional SVG fragments (service cards currently use inline SVGs).
 */
var SVG_ATTRS = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';

var ICONS = {

  /* ── Service icons ─────────────── */

  arch: '<svg ' + SVG_ATTRS + '>' +
    '<path d="M3 10.5L12 4l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V10.5z"/>' +
    '<path d="M9 21V13h6v8"/>' +
    '</svg>',

  interior: '<svg ' + SVG_ATTRS + '>' +
    '<path d="M12 3L2 8l10 5 10-5-10-5z"/>' +
    '<path d="M2 17l10 5 10-5"/>' +
    '<path d="M2 12l10 5 10-5"/>' +
    '</svg>',

  management: '<svg ' + SVG_ATTRS + '>' +
    '<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>' +
    '<rect x="9" y="3" width="6" height="4" rx="1"/>' +
    '<path d="M9 12l2 2 4-4"/>' +
    '<line x1="9" y1="17" x2="13" y2="17"/>' +
    '</svg>',

  /* ── Stat icons ────────────────── */

  years: '<svg ' + SVG_ATTRS + '>' +
    '<circle cx="12" cy="12" r="9"/>' +
    '<polyline points="12 7 12 12 15.5 14.5"/>' +
    '</svg>',

  projects: '<svg ' + SVG_ATTRS + '>' +
    '<line x1="3" y1="21" x2="21" y2="21"/>' +
    '<path d="M5 21V10l7-7 7 7v11"/>' +
    '<path d="M10 21v-5h4v5"/>' +
    '</svg>',

  clients: '<svg ' + SVG_ATTRS + '>' +
    '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>' +
    '<circle cx="9" cy="7" r="4"/>' +
    '<path d="M23 21v-2a4 4 0 00-3-3.87"/>' +
    '<path d="M16 3.13a4 4 0 010 7.75"/>' +
    '</svg>',

  /* ── Footer / contact icons ────── */

  phone: '<svg ' + SVG_ATTRS + '>' +
    '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 6.18 2 2 0 014.96 4h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L9.09 11a16 16 0 006.86 6.86l1.27-1.12a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 19z"/>' +
    '</svg>',

  email: '<svg ' + SVG_ATTRS + '>' +
    '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>' +
    '<polyline points="22,6 12,13 2,6"/>' +
    '</svg>',

  whatsapp: '<svg ' + SVG_ATTRS + '>' +
    '<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>' +
    '</svg>',

  pin: '<svg ' + SVG_ATTRS + '>' +
    '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>' +
    '<circle cx="12" cy="10" r="3"/>' +
    '</svg>'

};


/* ── TRANSLATION HELPER ──────────────────────────────────── */
/**
 * Resolves a dot-path key from POA_DATA.translations[lang].
 * e.g. t('nav.home') → 'Home' or 'الرئيسية'
 */
function t(key) {
  const parts = key.split('.');
  let val = POA_DATA.translations[currentLang];
  for (const part of parts) {
    if (val == null) return key;
    val = val[part];
  }
  return val != null ? String(val) : key;
}

/**
 * Returns the localised category label for a given category id.
 */
function categoryLabel(id) {
  const cat = POA_DATA.categories.find(function (c) { return c.id === id; });
  return cat ? cat[currentLang] : id;
}


/* ── RENDER: SERVICES ────────────────────────────────────── */
function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  const svcs = POA_DATA.services;

  function buildCard(svc, mod) {
    const lang = svc[currentLang];
    const img  = svc.image || '';
    return `
      <article class="svc-card ${mod}">
        <div class="svc-card__bg">
          <img src="${img}" alt="${lang.title}" width="900" height="700" loading="lazy" decoding="async" />
        </div>
        <div class="svc-card__overlay"></div>
        <div class="svc-card__body">
          <span class="svc-card__num">${svc.number}</span>
          <h3 class="svc-card__title">${lang.title}</h3>
          <p class="svc-card__desc">${lang.description}</p>
          <a href="services/${svc.slug}.html" class="svc-card__link">
            ${lang.link} <span aria-hidden="true">→</span>
          </a>
        </div>
        <span class="svc-card__arrow" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </article>`;
  }

  grid.innerHTML = `
    <div class="svc-grid reveal">
      ${buildCard(svcs[0], 'svc-card--large')}
      <div class="svc-stack">
        ${buildCard(svcs[1], 'svc-card--small')}
        ${buildCard(svcs[2], 'svc-card--small')}
      </div>
    </div>`;

  observeReveal(grid.querySelectorAll('.reveal'));
}


/* ── RENDER: PROCESS STRIP ───────────────────────────────── */
function renderProcessStrip() {
  const grid = document.getElementById('process-grid');
  if (!grid) return;

  grid.innerHTML = POA_DATA.process.map((step, i) => {
    const lang = step[currentLang];
    return `
      <div class="process-step reveal" data-reveal="up" style="--stagger-i:${i}">
        <div class="process-step__num">0${i + 1}</div>
        <h3 class="process-step__title">${lang.title}</h3>
        <p class="process-step__desc">${lang.description}</p>
      </div>
    `;
  }).join('');
}

/* ── RENDER: SERVICES PAGE LIST ──────────────────────────── */
function renderServicesPage() {
  const list = document.getElementById('services-page-list');
  if (!list) return;

  list.innerHTML = POA_DATA.services.map((svc, i) => {
    const lang = svc[currentLang];
    const isEven = i % 2 !== 0;
    const bgClass = isEven ? 'section--gray' : '';
    
    return `
      <section class="svc-block section-curtain ${bgClass}" id="${svc.id}">
        
        <!-- Architectural Measurement Lines -->
        <div class="dimension-line dimension-line--v" style="left: 5%; height: 100%; top: 0;"></div>
        <div class="dimension-label" style="left: calc(5% - 15px); top: 50%; transform: rotate(-90deg);">SECTION_${svc.number}</div>

        <div class="container svc-block__container">
          <div class="svc-block__grid">
            <div class="svc-block__image-container reveal" data-reveal="up">
              
              <!-- Technical Corners -->
              <div class="drafting-corner drafting-corner--tl"></div>
              <div class="drafting-corner drafting-corner--tr"></div>
              <div class="drafting-corner drafting-corner--bl"></div>
              <div class="drafting-corner drafting-corner--br"></div>
              
              <div class="svc-block__image-wrap">
                <img src="${svc.image}" alt="${lang.title}" loading="lazy" />
                <div class="blueprint-overlay"></div>
              </div>

              <div class="coord-marker" style="bottom: -20px; right: 0;">X: ${420 + i * 15} Y: ${880 - i * 10}</div>
            </div>

            <div class="svc-block__content reveal" data-reveal="up">
              <span class="svc-block__number split-reveal"><span>${svc.number}</span></span>
              <h2 class="svc-block__title drawing-line reveal" data-reveal="fade">
                <span class="svc-block__title-script split-reveal"><span>${lang.title}</span></span>
              </h2>
              <p class="svc-block__body body-text reveal" data-reveal="up">${lang.description}</p>
              
              <ul class="svc-block__list reveal" data-reveal="up">
                ${lang.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
              </ul>

              <div class="btn-magnetic">
                <a href="contact.html" class="btn btn--outline svc-block__cta reveal" data-reveal="up">${lang.link}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }).join('');

  observeReveal(list.querySelectorAll('.reveal'));
}


/* ── RENDER: FEATURED PROJECT ────────────────────────────── */
/*
 * Finds the single project with featured: true in POA_DATA.projects.
 * Renders:  section label → split card (image | category + name + meta + desc + 2 buttons)
 * Links:    "View Project"       → project-detail.html?id=PROJECT_ID
 *           "View All Projects"  → projects.html
 *
 * Thumbnail: project.image → main.jpeg. Galleries: visuals[] → 3d/, blueprints[] → pdf/.
 *
 * To change the featured project: open data.js, set featured: true on the
 * desired project and featured: false on the current one.
 */
function renderFeatured() {
  const container = document.getElementById('featured-project');
  const bgEl      = document.getElementById('fp-bg');
  if (!container) return;

  const project = POA_DATA.projects.find(function (p) { return p.featured; });
  if (!project) {
    container.innerHTML = '';
    return;
  }

  const lang       = project[currentLang];
  const catLabel   = categoryLabel(project.category);
  const ctaView    = t('featured.cta');
  const ctaAll     = t('featured.viewAll');
  const sectionLbl = t('featured.label');
  const featuredSrc =
    typeof project.image === 'string' && project.image.trim() ? project.image.trim() : '';

  /* Layer 1 — inject background image into fp-bg (POA_DATA: image, not images[]) */
  if (bgEl) {
    bgEl.innerHTML = featuredSrc
      ? `<img src="${featuredSrc}" alt="" loading="lazy" />`
      : '';
  }

  /* Layer 3 — section header + floating card */
  container.innerHTML = `
    <div class="section-intro section-intro--light reveal">
      <div class="section-intro__label">
        <span class="section-intro__index">[04]</span>
        <span class="section-intro__tag">${sectionLbl}</span>
      </div>
      <h2 class="section-intro__heading section-intro__heading--script">
        Recent Work
      </h2>
    </div>

    <article class="fp-card reveal reveal--delay" aria-label="${lang.name}">

      <div class="fp-card__thumb">
        <img
          src="${featuredSrc}"
          alt="${lang.name}"
          loading="lazy"
        />
      </div>

      <div class="fp-card__info">

        <span class="fp-card__category">${catLabel}</span>

        <div class="fp-card__meta">
          <span>${project.year}</span>
          <span class="fp-card__meta-sep" aria-hidden="true">—</span>
          <span>${project.size}</span>
          <span class="fp-card__meta-sep" aria-hidden="true">—</span>
          <span>${lang.location}</span>
        </div>

        <h3 class="fp-card__title">${lang.name}</h3>

        <p class="fp-card__desc">${lang.description}</p>

        <div class="fp-card__actions">
          <a href="#" onclick="openProjectModal('${project.id}'); return false;" class="btn btn--dark">${ctaView}</a>
          <a href="projects.html" class="btn btn--outline">${ctaAll}</a>
        </div>

      </div>
    </article>`;

  observeReveal(container.querySelectorAll('.reveal'));
}


/* ── APPLY STATIC TRANSLATIONS (data-i18n) ───────────────── */
function applyTranslations() {
  /* Plain text content */
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val !== key) el.textContent = val;
  });

  /* innerHTML (contains <br/> or HTML entities) */
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    const key = el.getAttribute('data-i18n-html');
    const val = t(key);
    if (val !== key) el.innerHTML = val;
  });

  /* Placeholder attributes */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val !== key) el.placeholder = val;
  });

  /* Switch body font for Arabic */
  document.body.style.fontFamily = currentLang === 'ar'
    ? "'Tajawal', sans-serif"
    : "'Montserrat', sans-serif";

  /* Footer service links */
  document.querySelectorAll('[data-svc-en]').forEach(function (el) {
    el.textContent = currentLang === 'ar'
      ? el.getAttribute('data-svc-ar')
      : el.getAttribute('data-svc-en');
  });
}


/* ── LANGUAGE SWITCH ─────────────────────────────────────── */
function setLanguage(lang) {
  currentLang = lang;
  const isAr  = lang === 'ar';

  document.documentElement.lang = lang;
  document.documentElement.dir  = isAr ? 'rtl' : 'ltr';

  document.querySelectorAll('.lang-switch').forEach(function (btn) {
    btn.querySelector('.lang-switch__en').classList.toggle('active', !isAr);
    btn.querySelector('.lang-switch__ar').classList.toggle('active',  isAr);
  });

  /* Re-render dynamic sections in new language */
  renderServices();
  renderFeatured();
  renderProjectsHero();
  if (document.getElementById('projects-grid')) {
    renderProjects(currentFilter);
    updateFilterLabels();
  }
  applyTranslations();

  localStorage.setItem('poa-lang', lang);
}

function initLangSwitch() {
  document.querySelectorAll('.lang-switch').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  });
}


/* ── NAVBAR ──────────────────────────────────────────────── */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  if (!navbar) return;

  /* ── Scroll: dark-hero pages after hero; page-static (about, services, careers, contact, …): after small scroll ───────── */
  var body = document.body;
  var heroNav =
    body.classList.contains('page-home') || body.classList.contains('page-hero');
  var staticNav = body.classList.contains('page-static');

  function onScroll() {
    if (heroNav) {
      var threshold = window.innerHeight * 0.6;
      navbar.classList.toggle('scrolled', window.scrollY > threshold);
    } else if (staticNav) {
      navbar.classList.toggle('scrolled', window.scrollY > 32);
    }
  }

  if (heroNav || staticNav) {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  } else {
    navbar.classList.remove('scrolled');
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      navbar.classList.toggle('nav-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      mobileNav.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        navbar.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }
}


/* ── HERO ENTRANCE ───────────────────────────────────────── */
function initHero() {
  var hero = document.querySelector('.hero');
  if (!hero) return;

  var parallaxLayer = hero.querySelector('.hero__parallax');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobileQuery = window.matchMedia('(max-width: 768px)');
  var maxShift = 36;
  function onHeroScroll() {
    if (!parallaxLayer || isMobileQuery.matches) {
      if (parallaxLayer) parallaxLayer.style.transform = 'none';
      return;
    }
    var rect = hero.getBoundingClientRect();
    var total = rect.height + window.innerHeight;
    var p = total > 0 ? (window.innerHeight - rect.top) / total : 0;
    p                                     = Math.min(1, Math.max(0, p));
    var y = (p - 0.35) * maxShift;
    parallaxLayer.style.transform = 'translate3d(0, ' + y + 'px, 0)';
  }

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      hero.classList.add('loaded');
    });
  });

  /* Subtle scroll parallax on background (disabled if user prefers reduced motion). */
  if (!isMobileQuery.matches && parallaxLayer && !reduceMotion) {
    window.addEventListener('scroll', onHeroScroll, { passive: true });
    window.addEventListener('resize', onHeroScroll);
    onHeroScroll();
  } else {
    window.removeEventListener('scroll', onHeroScroll);
    window.removeEventListener('resize', onHeroScroll);
    if (parallaxLayer) parallaxLayer.style.transform = 'none';
  }
}


/* ── SCROLL REVEAL ───────────────────────────────────────── */
let revealObserver = null;

function observeReveal(elements) {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  }
  elements.forEach(function (el) { revealObserver.observe(el); });
}

function initReveal() {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  if (isMobile) {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  /* Auto-stagger: assign --stagger-i CSS var to .reveal children
     inside any element marked [data-stagger] */
  document.querySelectorAll('[data-stagger]').forEach(function (group) {
    var items = group.querySelectorAll('.reveal');
    items.forEach(function (el, i) {
      el.style.setProperty('--stagger-i', i);
    });
  });

  observeReveal(document.querySelectorAll('.reveal'));
}


/* ── SCROLL PROGRESS INDICATOR ───────────────────────────── */
function initScrollProgress() {
  var bar = document.getElementById('scroll-progress');
  if (!bar) return;

  var scrollTicking = false;
  window.addEventListener('scroll', function () {
    if (!scrollTicking) {
      requestAnimationFrame(function () {
        var scrollTop = window.scrollY;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });
}


/* ── BUTTON RIPPLE ───────────────────────────────────────── */
function initRipple() {
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.btn');
    if (!btn) return;

    var rect   = btn.getBoundingClientRect();
    var size   = Math.max(rect.width, rect.height) * 2;
    var x      = e.clientX - rect.left - size / 2;
    var y      = e.clientY - rect.top  - size / 2;

    var ripple = document.createElement('span');
    ripple.className = 'btn__ripple';
    ripple.style.cssText = 'position:absolute;border-radius:50%;pointer-events:none;'
      + 'width:' + size + 'px;height:' + size + 'px;'
      + 'left:' + x + 'px;top:' + y + 'px;'
      + 'background:rgba(255,255,255,0.18);'
      + 'transform:scale(0);animation:rippleOut 0.55s var(--ease-out) forwards;';

    btn.style.position = btn.style.position || 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', function () { ripple.remove(); });
  });

  /* Inject keyframe if not already present */
  if (!document.getElementById('ripple-kf')) {
    var s = document.createElement('style');
    s.id = 'ripple-kf';
    s.textContent = '@keyframes rippleOut{to{transform:scale(1);opacity:0;}}';
    document.head.appendChild(s);
  }
}


/* ── CARD 3-D TILT ───────────────────────────────────────── */
function initCardTilt() {
  if ('ontouchstart' in window) return; // no-op on touch devices

  document.querySelectorAll('.project-card, .service-card').forEach(function (card) {
    var rect = null;
    var rafId = null;
    var pendingCx = 0, pendingCy = 0;

    card.addEventListener('mouseenter', function () {
      rect = card.getBoundingClientRect(); // cache once per hover, not per frame
      card.style.transition = 'transform 0.08s ease';
    }, { passive: true });

    card.addEventListener('mousemove', function (e) {
      if (!rect) return;
      pendingCx = (e.clientX - rect.left) / rect.width  - 0.5;
      pendingCy = (e.clientY - rect.top)  / rect.height - 0.5;
      if (!rafId) {
        rafId = requestAnimationFrame(function () {
          card.style.transform =
            'perspective(900px) rotateY(' + (pendingCx * 10) + 'deg) ' +
            'rotateX(' + (-pendingCy * 8) + 'deg) ' +
            'translate3d(0,-6px,0)';
          rafId = null;
        });
      }
    }, { passive: true });

    card.addEventListener('mouseleave', function () {
      rect = null;
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      card.style.transition = 'transform 0.65s var(--ease-out)';
      card.style.transform  = '';
      card.addEventListener('transitionend', function restore() {
        card.style.transition = '';
        card.removeEventListener('transitionend', restore);
      });
    }, { passive: true });
  });
}


/* ── RENDER: PROJECTS PAGE ───────────────────────────────── */
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? POA_DATA.projects
    : POA_DATA.projects.filter(p => p.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="no-results">No projects found in this category.</p>`;
    return;
  }

  const viewText = t('projectsPage.viewProject');

  grid.innerHTML = filtered.map((project, i) => {
    const lang = project[currentLang];
    
    return `
      <article class="project-card reveal" data-reveal="up" data-id="${project.id}" style="--stagger-i:${i % 3}">
        <div class="project-card__inner">
          <div class="project-card__img">
            <img src="${project.image}" alt="${lang.name}" loading="lazy" />
            <div class="project-card__overlay">
              <div class="project-card__overlay-content">
                <span class="project-card__cat">${categoryLabel(project.category)}</span>
                <h3 class="project-card__title">${lang.name}</h3>
                <span class="project-card__btn">${viewText}</span>
              </div>
            </div>
          </div>
          <div class="project-card__info">
            <div class="project-card__meta-top">
               <span class="project-card__cat-simple">${categoryLabel(project.category)}</span>
               <span class="project-card__year-simple">${project.year}</span>
            </div>
            <h3 class="project-card__title-simple">${lang.name}</h3>
            <p class="project-card__loc-simple">${lang.location}</p>
          </div>
        </div>
      </article>
    `;
  }).join('');

  observeReveal(grid.querySelectorAll('.reveal'));
}

/* Event-delegation: single listener on the grid handles all card clicks */
(function initProjectGridDelegation() {
  document.addEventListener('click', function (e) {
    const card = e.target.closest('.project-card[data-id]');
    if (!card) return;
    e.preventDefault();
    e.stopPropagation();
    const id = card.getAttribute('data-id');
    if (id) openProjectModal(id);
  });
})();

/* ── MODAL LOGIC ─────────────────────────────────────────── */
let activeProject = null;
let activeTab = 'visuals';
let currentImgIdx = 0;
let imgSwapTimer = null;
let tabSwitchTimer = null;

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
  clearTimeout(imgSwapTimer);
  clearTimeout(tabSwitchTimer);
  resetZoom();
}

function populateModal(project) {
  const lang = project[currentLang];

  const elements = {
    'modalCat': categoryLabel(project.category),
    'modalTitle': lang.name,
    'modalLoc': lang.location,
    'modalYear': project.year,
    'modalArea': project.size,
    'modalPhilosophy': lang.description
  };

  for (const [id, val] of Object.entries(elements)) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  const bTab = document.querySelector('.modal-tab[data-tab="blueprints"]');
  const hasB = project.blueprints && project.blueprints.length > 0;
  if (bTab) bTab.style.display = hasB ? 'block' : 'none';

  document.querySelectorAll('.modal-tab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-tab') === 'visuals');
  });

  const wrapper = document.getElementById('modalImgContainer');
  if (wrapper) wrapper.style.opacity = '1';

  updateModalDisplay();
}

function openProjectModal(projectId) {
  const project = POA_DATA.projects.find(p => String(p.id) === String(projectId));
  if (!project) return;

  clearTimeout(imgSwapTimer);
  clearTimeout(tabSwitchTimer);

  const modal = document.getElementById('projectModal');
  if (!modal) return;
  const container = modal.querySelector('.modal-container');

  // Always force-hide first (no transition) so content swaps while invisible
  modal.style.transition = 'none';
  if (container) container.style.transition = 'none';
  modal.classList.remove('active');
  void modal.offsetHeight;

  // Now populate with fresh data
  activeProject = project;
  activeTab = 'visuals';
  currentImgIdx = 0;
  resetZoom();
  populateModal(project);
  if (container) container.scrollTop = 0;

  // Restore transitions, then reveal
  modal.style.transition = '';
  if (container) container.style.transition = '';
  void modal.offsetHeight;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function getModalImages() {
  if (!activeProject) return [];
  const raw = activeProject[activeTab] || [];
  // Prepend thumbnail as first visual if it's not already there
  if (activeTab === 'visuals' && activeProject.image && raw[0] !== activeProject.image) {
    return [activeProject.image, ...raw];
  }
  return raw;
}

function updateModalDisplay() {
  if (!activeProject) return;
  const images = getModalImages();
  const main = document.getElementById('modalMainImg');
  const thumbs = document.getElementById('modalThumbs');
  const counter = document.getElementById('modalCounter');

  if (images.length > 0) {
    if (main) {
      main.src = images[currentImgIdx];
      main.style.opacity = '1';
    }
    if (counter) {
      counter.textContent = `${currentImgIdx + 1} / ${images.length}`;
    }

    if (thumbs) {
      thumbs.innerHTML = images.map((img, i) => `
        <div class="modal-thumb ${i === currentImgIdx ? 'active' : ''}" data-index="${i}">
          <img src="${img}" alt="" loading="lazy" />
        </div>
      `).join('');

      thumbs.querySelectorAll('.modal-thumb').forEach(t => {
        t.addEventListener('click', () => {
          setModalImage(parseInt(t.getAttribute('data-index')));
        });
      });
    }
  }
}

function setModalImage(idx) {
  const images = getModalImages();
  if (idx < 0 || idx >= images.length) return;
  
  currentImgIdx = idx;
  const main = document.getElementById('modalMainImg');
  const counter = document.getElementById('modalCounter');
  const thumbs = document.querySelectorAll('.modal-thumb');

  // Reset zoom on image switch
  resetZoom();
  clearTimeout(imgSwapTimer);

  if (main) {
    main.style.opacity = '0';
    imgSwapTimer = setTimeout(() => {
      main.src = images[currentImgIdx];
      main.style.opacity = '1';
    }, 250);
  }

  if (counter) counter.textContent = `${currentImgIdx + 1} / ${images.length}`;
  
  thumbs.forEach((t, i) => t.classList.toggle('active', i === currentImgIdx));
  
  const activeThumb = thumbs[currentImgIdx];
  if (activeThumb) {
    activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

let zoomState = {
  active: false,
  x: 0,
  y: 0,
  lastX: 0,
  lastY: 0,
  isDragging: false,
  dragStarted: false
};

function toggleZoom(e) {
  const container = document.getElementById('modalImgContainer');
  const img = document.getElementById('modalMainImg');
  if (!container || !img) return;

  zoomState.active = !zoomState.active;
  container.classList.toggle('is-zoomed', zoomState.active);

  if (!zoomState.active) {
    resetZoom();
  } else {
    zoomState.x = 0;
    zoomState.y = 0;
    applyTransform();
  }
}

function resetZoom() {
  const container = document.getElementById('modalImgContainer');
  const img = document.getElementById('modalMainImg');
  if (!container || !img) return;

  zoomState.active      = false;
  zoomState.x           = 0;
  zoomState.y           = 0;
  zoomState.isDragging  = false;
  zoomState.dragStarted = false;
  container.classList.remove('is-zoomed');
  container.style.cursor = '';
  img.style.transform = 'none';
}

const ZOOM_SCALE = 2.5;

function applyTransform() {
  const container = document.getElementById('modalImgContainer');
  const img = document.getElementById('modalMainImg');
  if (!container || !img) return;

  /* Clamp pan so the image never leaves the container bounds.
     Translate units are in the pre-scale coordinate space,
     so divide screen-pixel limits by ZOOM_SCALE. */
  const maxX = Math.max(0, (img.offsetWidth  * ZOOM_SCALE - container.offsetWidth)  / (2 * ZOOM_SCALE));
  const maxY = Math.max(0, (img.offsetHeight * ZOOM_SCALE - container.offsetHeight) / (2 * ZOOM_SCALE));

  zoomState.x = Math.max(-maxX, Math.min(maxX, zoomState.x));
  zoomState.y = Math.max(-maxY, Math.min(maxY, zoomState.y));

  img.style.transform = `scale(${ZOOM_SCALE}) translate(${zoomState.x}px, ${zoomState.y}px)`;
}

function initImageGestures() {
  const container = document.getElementById('modalImgContainer');
  if (!container) return;
  const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

  if (isMobile()) {
    resetZoom();
    return;
  }

  /* ── Mouse: click-to-zoom + drag-to-pan ─────────────────── */
  let mouseStartX, mouseStartY;

  container.addEventListener('mousedown', (e) => {
    if (!zoomState.active) return;
    e.preventDefault();
    zoomState.isDragging  = true;
    zoomState.dragStarted = false;
    mouseStartX = e.clientX - zoomState.x * ZOOM_SCALE;
    mouseStartY = e.clientY - zoomState.y * ZOOM_SCALE;
    container.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!zoomState.isDragging) return;
    const newX = (e.clientX - mouseStartX) / ZOOM_SCALE;
    const newY = (e.clientY - mouseStartY) / ZOOM_SCALE;
    if (Math.abs(newX - zoomState.x) > 3 || Math.abs(newY - zoomState.y) > 3) {
      zoomState.dragStarted = true;
    }
    zoomState.x = newX;
    zoomState.y = newY;
    requestAnimationFrame(applyTransform);
  });

  const endMouseDrag = () => {
    if (!zoomState.isDragging) return;
    zoomState.isDragging = false;
    container.style.cursor = zoomState.active ? 'grab' : '';
  };
  window.addEventListener('mouseup',    endMouseDrag);
  window.addEventListener('mouseleave', endMouseDrag);

  container.addEventListener('click', (e) => {
    if (zoomState.dragStarted) { e.stopPropagation(); return; }
    toggleZoom(e);
  });

  /* ── Touch: swipe to navigate, pinch to zoom, drag to pan ── */
  let touchStartX  = 0, touchStartY  = 0;
  let panStartX    = 0, panStartY    = 0;
  let pinching     = false;
  let pinchStartDist = 0;
  let touchMoved   = false;

  container.addEventListener('touchstart', (e) => {
    touchMoved = false;

    if (e.touches.length === 2) {
      // Two fingers — prepare pinch
      pinching = true;
      zoomState.isDragging = false;
      pinchStartDist = Math.hypot(
        e.touches[1].clientX - e.touches[0].clientX,
        e.touches[1].clientY - e.touches[0].clientY
      );
      return;
    }

    pinching = false;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;

    if (zoomState.active) {
      // Start drag-pan
      zoomState.isDragging  = true;
      zoomState.dragStarted = false;
      panStartX = e.touches[0].clientX - zoomState.x * ZOOM_SCALE;
      panStartY = e.touches[0].clientY - zoomState.y * ZOOM_SCALE;
    }
  }, { passive: true });

  container.addEventListener('touchmove', (e) => {
    touchMoved = true;

    // Pinch: adjust zoom
    if (e.touches.length === 2 && pinching) {
      e.preventDefault();
      const dist = Math.hypot(
        e.touches[1].clientX - e.touches[0].clientX,
        e.touches[1].clientY - e.touches[0].clientY
      );
      if (dist / pinchStartDist > 1.3 && !zoomState.active) {
        zoomState.active = true;
        zoomState.x = 0;
        zoomState.y = 0;
        container.classList.add('is-zoomed');
        applyTransform();
      } else if (dist / pinchStartDist < 0.72 && zoomState.active) {
        resetZoom();
      }
      return;
    }

    // Single finger drag-pan when zoomed
    if (e.touches.length === 1 && zoomState.isDragging && zoomState.active) {
      e.preventDefault();
      const newX = (e.touches[0].clientX - panStartX) / ZOOM_SCALE;
      const newY = (e.touches[0].clientY - panStartY) / ZOOM_SCALE;
      if (Math.abs(newX - zoomState.x) > 2 || Math.abs(newY - zoomState.y) > 2) {
        zoomState.dragStarted = true;
      }
      zoomState.x = newX;
      zoomState.y = newY;
      requestAnimationFrame(applyTransform);
    }
  }, { passive: false });

  container.addEventListener('touchend', (e) => {
    zoomState.isDragging = false;

    if (pinching) { pinching = false; return; }
    if (e.changedTouches.length !== 1) return;

    const dx    = e.changedTouches[0].clientX - touchStartX;
    const dy    = e.changedTouches[0].clientY - touchStartY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    // Tap (tiny movement) → toggle zoom
    if (!touchMoved || (absDx < 10 && absDy < 10)) {
      if (!zoomState.dragStarted) toggleZoom(e);
      zoomState.dragStarted = false;
      return;
    }

    // Horizontal swipe when NOT zoomed → navigate images
    if (!zoomState.active && absDx > 55 && absDx > absDy * 1.5) {
      const imgs = getModalImages();
      if (dx < 0) {
        setModalImage((currentImgIdx + 1) % imgs.length);               // swipe left = next
      } else {
        setModalImage((currentImgIdx - 1 + imgs.length) % imgs.length); // swipe right = prev
      }
    }

    zoomState.dragStarted = false;
  }, { passive: true });
}

function initModalEvents() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  const closeBtn = document.getElementById('modalClose');
  const prevBtn = document.getElementById('modalPrev');
  const nextBtn = document.getElementById('modalNext');

  closeBtn?.addEventListener('click', () => closeModal());

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const imgs = getModalImages();
    setModalImage((currentImgIdx - 1 + imgs.length) % imgs.length);
  });

  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const imgs = getModalImages();
    setModalImage((currentImgIdx + 1) % imgs.length);
  });

  document.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const type = tab.getAttribute('data-tab');
      if (activeTab === type) return;
      activeTab = type;
      currentImgIdx = 0;
      document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      resetZoom();

      // Fade wrapper out → swap content → fade back in
      const wrapper = document.getElementById('modalImgContainer');
      if (wrapper) {
        wrapper.style.opacity = '0';
        clearTimeout(tabSwitchTimer);
        tabSwitchTimer = setTimeout(() => {
          updateModalDisplay();
          wrapper.style.opacity = '1';
        }, 220);
      } else {
        updateModalDisplay();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      const imgs = getModalImages();
      setModalImage((currentImgIdx - 1 + imgs.length) % imgs.length);
    } else if (e.key === 'ArrowRight') {
      const imgs = getModalImages();
      setModalImage((currentImgIdx + 1) % imgs.length);
    }
  });
}

function updateFilterLabels() {
  document.querySelectorAll('.project-filters button[data-filter]').forEach(function (btn) {
    var filterId = btn.getAttribute('data-filter');
    if (filterId === 'all') {
      btn.textContent = currentLang === 'ar' ? 'الكل' : 'All';
      return;
    }
    var cat = POA_DATA.categories.find(function (c) { return c.id === filterId; });
    if (cat) btn.textContent = cat[currentLang];
  });
}


/* ── PROJECTS PAGE HERO ──────────────────────────────────── */
function renderProjectsHero() {
  const section = document.getElementById('projects-hero');
  if (!section) return;

  const project = POA_DATA.projects.find(function (p) { return p.featured; });
  if (!project) return;

  const lang = project[currentLang];

  const el = function (id) { return document.getElementById(id); };

  if (el('phLabel'))    el('phLabel').textContent    = t('projectsPage.featuredLabel');
  if (el('phTitle'))    el('phTitle').textContent    = lang.name;
  if (el('phLocation')) el('phLocation').textContent = lang.location + '\u2002·\u2002' + project.year;
  if (el('phDesc'))     el('phDesc').textContent     = lang.description;
  if (el('phBtn'))      el('phBtn').textContent      = t('projectsPage.viewProject');

  const img = el('phImg');
  if (img && img.getAttribute('data-loaded') !== project.id) {
    img.src = project.image;
    img.alt = lang.name;
    img.setAttribute('fetchpriority', 'high');
    img.decoding = 'async';
    img.setAttribute('data-loaded', project.id);
  }

  /* Trigger entrance animation on first render only */
  if (!section.classList.contains('is-loaded')) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        section.classList.add('is-loaded');
      });
    });
  }
}

function initProjectsHero() {
  const btn = document.getElementById('phBtn');
  if (!btn) return;
  const project = POA_DATA.projects.find(function (p) { return p.featured; });
  if (!project) return;
  btn.addEventListener('click', function () {
    openProjectModal(project.id);
  });
}


function initProjectFilters() {
  const filters = document.querySelectorAll('.project-filters button');
  if (!filters.length) return;

  filters.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      currentFilter = filter;

      // Update active state
      filters.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Re-render with fade + scale transition
      const grid = document.getElementById('projects-grid');
      if (grid) {
        grid.classList.add('is-switching');
        setTimeout(() => {
          renderProjects(filter);
          // Immediately reveal all cards — don't wait for IntersectionObserver
          grid.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
          grid.classList.remove('is-switching');
        }, 280);
      }
    });
  });
}


/* ── FOOTER YEAR ─────────────────────────────────────────── */
function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}


/* ── INIT ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {

  /* 1. Restore saved language immediately to prevent flash */
  const saved = localStorage.getItem('poa-lang');
  if (saved && saved !== 'en') {
    currentLang = saved;
    document.documentElement.lang = saved;
    document.documentElement.dir  = 'rtl';
    document.querySelectorAll('.lang-switch').forEach(function (btn) {
      btn.querySelector('.lang-switch__en').classList.remove('active');
      btn.querySelector('.lang-switch__ar').classList.add('active');
    });
  }

  /* 2. Hero first (parallax + .loaded) — before heavy DOM work for LCP / main-thread */
  initNavbar();
  initHero();

  /* 3. Renders + init split across frames (shorter tasks, content still prompt) */
  renderServices();
  renderProcessStrip();
  renderServicesPage();
  renderFeatured();
  requestAnimationFrame(function () {
    renderProjectsHero();
    renderProjects();
    applyTranslations();
    requestAnimationFrame(function () {
      initReveal();
      initScrollProgress();
      initRipple();
      initCardTilt();
      initLangSwitch();
      initProjectsHero();
      initProjectFilters();
      updateFilterLabels();
      initModalEvents();
      initImageGestures();
      setYear();
    });
  });

});
