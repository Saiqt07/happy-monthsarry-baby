/* ================================================================
   FIRST MONTHSARY — script.js
   Interactive Love Letter — Vanilla JS
   ================================================================ */

'use strict';

// ── EDITABLE CONTENT ──────────────────────────────────────────────
const CONFIG = {

  // SECTION 2 — Lessons
  lessons: [
    { text: 'You taught me that love feels peaceful.' },
    { text: 'You showed me that vulnerability is strength.' },
    { text: 'You reminded me that communication is everything.' },
    { text: 'You made distance feel a little shorter.' },
    { text: 'You became my safe place.' },
    { text: 'You made ordinary days feel special.' },
    { text: 'You taught me patience, in the most beautiful way.' },
    { text: 'You reminded me that love is a choice — one I keep choosing.' },
  ],

  // SECTION 3 — 10 Things I Love
  loveThings: [
    {
      front: '01',
      back: 'I love your kakulitan. 🤍 Kahit simpleng araw lang, napapasaya mo agad ako sa pagiging kulit mo.',
      icon: '😄',
    },
    {
      front: '02',
      back: 'I love your freaky side. 😭 I love how comfortable ka maging sarili mo sa\'kin. Sayo ko lang na-experience yung ganitong klaseng connection.',
      icon: '🔥',
    },
    {
      front: '03',
      back: 'I love your smile. Ang sarap sa feeling makita kang masaya. Automatic gumagaan din araw ko.',
      icon: '🌸',
    },
    {
      front: '04',
      back: 'I love how honest you are. Kahit nahihirapan ka minsan, pinipili mo pa ring mag-open sa\'kin instead na kimkimin lahat.',
      icon: '🤍',
    },
    {
      front: '05',
      back: 'I love your caring heart. Ang dami mong little things na ginagawa na sobrang naa-appreciate ko kahit hindi mo napapansin.',
      icon: '💜',
    },
    {
      front: '06',
      back: 'I love how safe you make me feel. Ikaw yung taong kaya kong maging sarili ko without pretending to be someone else.',
      icon: '🕊️',
    },
    {
      front: '07',
      back: 'I love your lambing. Kahit clingy ka minsan, secret lang... favorite ko talaga \'yon. 🤍',
      icon: '🌙',
    },
    {
      front: '08',
      back: 'I love your determination. Kahit sobrang bigat na minsan, lumalaban ka pa rin. I\'m really proud of you.',
      icon: '⭐',
    },
    {
      front: '09',
      back: 'I love your boobs. 😭🤍 Aaminin ko na... favorite ko rin sila. Pero promise, bonus na lang \'yon. Ikaw pa rin talaga ang pinaka-favorite ko.',
      icon: '😭',
    },
    {
      front: '10',
      back: 'Most of all, I love you. Hindi lang dahil sa mga ginagawa mo para sa\'kin, kundi dahil ikaw lang talaga \'yan. Thank you for being my safe place, my best friend, at ang favorite person ko.',
      icon: '🤍',
    },
  ],

  // SECTION 4 — Memories
  memories: [
    { img: 'image/first pic.jpeg', caption: 'Our first pic together 🤍', rot: '-2.5deg' },
    { img: 'image/cute pic.JPG', caption: 'My favorite view 🌸', rot: '2deg' },
    { img: 'image/cute pic1.jpg', caption: 'Always so cute 😍', rot: '-1.5deg' },
    { img: 'image/first date.jpg', caption: 'Our first date 💜', rot: '3deg' },
    { img: 'image/airport picture.jpg', caption: 'Airport feels ✈️🤍', rot: '-3deg' },
    { img: 'image/baby sit yarn.jpg', caption: 'Soft & cozy like you 🧶', rot: '1.5deg' },
    { img: 'image/night.JPG', caption: 'Our night together 🌙', rot: '-2deg' },
    { img: 'image/sandal.jpg', caption: 'Even the little things 🌸', rot: '2.5deg' },
  ],

  // SECTION 5 — Reminders
  reminders: [
    { icon: '🌸', text: 'You are enough — exactly as you are right now.' },
    { icon: '💜', text: 'You never have to earn my love. It is already yours.' },
    { icon: '⭐', text: 'I am so incredibly proud of you.' },
    { icon: '🤍', text: 'Thank you for trusting me with your heart.' },
    { icon: '🌙', text: 'You are never too much for me. Not even close.' },
    { icon: '✨', text: 'I will continue choosing you. Every single day.' },
    { icon: '🌷', text: 'I am still courting you. I always will be.' },
    { icon: '🕊️', text: 'Rest. You have been carrying a lot, and that is okay.' },
  ],

  // SECTION 7 — Love Letter
  letterText: [
    'Happy first monthsary.',
    'Grabe, one month pa lang tayo pero parang ang dami na nating pinagdaanan. May mga tawanan, random dogshow moments, tampuhan, overthinking, lambingan, at kahit LDR na tayo, never kong na-feel na naging less special ang pagmamahal ko sa\'yo. In fact, mas lalo kitang nakilala, at mas lalo kitang minahal.',
    'Thank you for trusting me with the softest and most vulnerable parts of yourself. Thank you for choosing to open up to me kahit minsan nahihirapan ka ring intindihin yung sarili mo. Please know that you never have to apologize for having emotions. Hindi ka "too much." Hindi ka burden. You\'re simply someone I love, and I want to be someone who makes you feel safe.',
    'Thank you rin for every "I miss you," every random kwento, every kulit, every reassurance, every laugh, every "dogshow," at kahit yung pagiging freaky mo minsan. 😭 Alam mo naman... favorite ko lahat ng version mo.',
    'I know hindi madali ang LDR. There will be days na sobrang mamimiss natin ang isa\'t isa, days na pareho tayong mapapagod, at days na baka magtampo tayo. Pero if this first month taught me anything, it\'s that I don\'t want us to stop choosing each other just because things get hard. I want us to keep communicating, keep understanding, and keep growing together.',
    'I promise to keep courting you kahit tayo na. I don\'t want to become someone who gets comfortable and stops making you feel special. I want you to keep feeling loved, appreciated, pursued, and chosen — not just today, but every day after this.',
    'I\'m excited for everything we\'ll experience together. Our airport hugs, our future dates, more photobooths, more late-night calls, more laughs, more memories, and one day, finally closing the distance between us.',
    'And most importantly, I pray that God continues to guide our relationship. I hope we continue to grow not only as partners, but also as individuals who help each other become better people. I want Him to always be at the center of everything we build together.',
    'Thank you for making this past month one of the happiest chapters of my life.',
    'If I had to choose all over again, in every lifetime, in every universe, I\'d still choose you.',
    'Happy first monthsary, baby. I love you so much. Always. 🤍',
  ],

  // SECTION 8 — Future Timeline
  future: [
    { icon: '📞', title: 'Our next video call', desc: 'Where I get to see your face and hear your laugh live.' },
    { icon: '✈️', title: 'Our next airport hug', desc: 'The one I\'m already counting down to.' },
    { icon: '📸', title: 'Our next photobooth', desc: 'More stolen smiles, more frames I want to keep forever.' },
    { icon: '🌃', title: 'Our future dates', desc: 'All the places we\'ve talked about. All the plans we\'re building.' },
    { icon: '🎓', title: 'Graduation', desc: 'Watching you walk across that stage — I\'ll be the proudest person in the room.' },
    { icon: '🏡', title: 'Building our future together', desc: 'One dream at a time, one prayer at a time.' },
    { icon: '✝️', title: 'Growing stronger in faith', desc: 'Together, grounded in something greater than us.' },
    { icon: '🥂', title: 'Every future monthsary', desc: 'And all the anniversaries after that.' },
  ],

  // MEMORY JAR — 50 notes
  jarNotes: [
    'You are my favorite notification.',
    'I smile every time I see your name.',
    'You make ordinary moments feel cinematic.',
    'I would choose this, with you, over and over.',
    'You are the kind of person I want to tell everything to.',
    'My heart does something different when it\'s you.',
    'Loving you feels like exhaling.',
    'You are everything I didn\'t know I was looking for.',
    'I am so glad we found each other.',
    'You are worth every mile between us.',
    'Thank you for being patient with me.',
    'I think about you more than you know.',
    'You are my favorite conversation.',
    'I feel lucky just knowing you.',
    'You make me want to be better.',
    'You are safe with me. Always.',
    'There is no version of my future I don\'t want you in.',
    'I notice everything about you.',
    'You are the highlight of my ordinary days.',
    'I love who I am when I\'m with you.',
    'You are more than enough.',
    'I appreciate every little thing you do.',
    'You are my calm in the middle of everything.',
    'I look forward to a future with you.',
    'Your voice is my favorite sound.',
    'Even the distance doesn\'t scare me when it\'s you.',
    'I\'m not going anywhere.',
    'I love you in every language I know.',
    'You matter. You matter so much.',
    'I will always root for you.',
    'You deserve the love you give to others.',
    'I am still learning you, and I love every lesson.',
    'You are not alone in this.',
    'I\'d fly to you in a heartbeat.',
    'You make waiting feel worth it.',
    'I am proud of you every single day.',
    'Keep going. I believe in you.',
    'You are already doing amazingly.',
    'I see you. The real you. And I love what I see.',
    'You are loved — deeply, genuinely, without condition.',
    'I think of you in the quiet moments.',
    'You were worth choosing.',
    'My favorite feeling is knowing I\'m yours.',
    'You are irreplaceable to me.',
    'I treasure every moment we share.',
    'You have made my life infinitely brighter.',
    'You are the answer to prayers I didn\'t know I was praying.',
    'I am grateful for you every single day.',
    'You are the one I choose to come home to.',
    'Happy First Monthsary, Baby. I love you. 🤍',
  ],
};

// ────────────────────────────────────────────────────────────────
// LOADING SCREEN
// ────────────────────────────────────────────────────────────────
(function initLoader() {
  const screen = document.getElementById('loading-screen');
  const fill = document.getElementById('loader-bar-fill');
  const pct = document.getElementById('loader-percent');
  const parts = document.getElementById('loader-particles');

  // Spawn loader sparkles
  for (let i = 0; i < 30; i++) {
    const s = document.createElement('div');
    s.style.cssText = `
      position:absolute;
      width:${2 + Math.random() * 4}px;
      height:${2 + Math.random() * 4}px;
      border-radius:50%;
      background:rgba(200,182,255,${0.3 + Math.random() * 0.5});
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      animation: loaderParticle ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 3}s infinite;
    `;
    parts.appendChild(s);
  }

  // Inject keyframes for loader particles
  if (!document.getElementById('loader-kf')) {
    const style = document.createElement('style');
    style.id = 'loader-kf';
    style.textContent = `
      @keyframes loaderParticle {
        0%,100% { transform: translateY(0) scale(1); opacity:0.4; }
        50%      { transform: translateY(-20px) scale(1.5); opacity:1; }
      }
    `;
    document.head.appendChild(style);
  }

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 14;
    if (progress > 100) progress = 100;
    fill.style.width = progress + '%';
    pct.textContent = Math.floor(progress) + '%';

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        screen.classList.add('fade-out');
        const wrapper = document.getElementById('site-wrapper');
        wrapper.classList.remove('hidden');
        requestAnimationFrame(() => wrapper.classList.add('visible'));
        initAll();
        setTimeout(() => screen.remove(), 900);
      }, 400);
    }
  }, 120);
})();

// ────────────────────────────────────────────────────────────────
// INIT ALL FEATURES
// ────────────────────────────────────────────────────────────────
function initAll() {
  initCursorGlow();
  initPetalCanvas();
  initScrollReveal();
  initHero();
  initLessons();
  initLoveCarousel();
  initMemories();
  initReminders();
  initLetter();
  initFuture();
  initLastClick();
  initMemoryJar();
  initConstellationCanvas();
  initFinale();
}

// ────────────────────────────────────────────────────────────────
// CURSOR GLOW
// ────────────────────────────────────────────────────────────────
function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow) return;

  let mx = -200, my = -200;
  let cx = -200, cy = -200;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function animCursor() {
    cx += (mx - cx) * 0.12;
    cy += (my - cy) * 0.12;
    glow.style.left = cx + 'px';
    glow.style.top = cy + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();

  // Grow on hover
  document.querySelectorAll('button, a, .flip-card, #memory-jar')
    .forEach(el => {
      el.addEventListener('mouseenter', () => {
        glow.style.width = '80px';
        glow.style.height = '80px';
      });
      el.addEventListener('mouseleave', () => {
        glow.style.width = '40px';
        glow.style.height = '40px';
      });
    });
}

// ────────────────────────────────────────────────────────────────
// PETAL CANVAS (floating lavender petals + sparkles)
// ────────────────────────────────────────────────────────────────
function initPetalCanvas() {
  const canvas = document.getElementById('petal-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const PETAL_COUNT = 28;
  const SPARKLE_COUNT = 20;
  const petals = [];
  const sparkles = [];

  const PETAL_COLORS = ['#C8B6FF', '#E9D5FF', '#d4c6f8', '#b8a3ff', '#f0e8ff'];

  for (let i = 0; i < PETAL_COUNT; i++) petals.push(makePetal());
  for (let i = 0; i < SPARKLE_COUNT; i++) sparkles.push(makeSparkle());

  function makePetal() {
    return {
      x: Math.random() * window.innerWidth,
      y: -20 - Math.random() * window.innerHeight,
      vx: -0.5 + Math.random(),
      vy: 0.4 + Math.random() * 0.8,
      rot: Math.random() * Math.PI * 2,
      vrot: (-0.015 + Math.random() * 0.03),
      w: 8 + Math.random() * 10,
      h: 5 + Math.random() * 8,
      alpha: 0.3 + Math.random() * 0.5,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.01 + Math.random() * 0.015,
      swayAmp: 30 + Math.random() * 40,
      startX: Math.random() * window.innerWidth,
    };
  }

  function makeSparkle() {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 1 + Math.random() * 2.5,
      alpha: Math.random(),
      vAlpha: 0.008 + Math.random() * 0.015,
      dir: Math.random() < 0.5 ? 1 : -1,
    };
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.ellipse(0, 0, p.w / 2, p.h / 2, 0, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    ctx.restore();
  }

  function drawSparkle(s) {
    ctx.save();
    ctx.globalAlpha = s.alpha;
    ctx.fillStyle = '#C8B6FF';
    ctx.beginPath();
    // 4-pointed star
    const r1 = s.size, r2 = s.size * 0.4;
    for (let j = 0; j < 8; j++) {
      const r = j % 2 === 0 ? r1 : r2;
      const a = (j * Math.PI) / 4;
      j === 0
        ? ctx.moveTo(s.x + r * Math.cos(a), s.y + r * Math.sin(a))
        : ctx.lineTo(s.x + r * Math.cos(a), s.y + r * Math.sin(a));
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    petals.forEach(p => {
      p.sway += p.swaySpeed;
      p.x = p.startX + Math.sin(p.sway) * p.swayAmp;
      p.y += p.vy;
      p.rot += p.vrot;
      if (p.y > canvas.height + 30) {
        Object.assign(p, makePetal());
        p.y = -20;
      }
      drawPetal(p);
    });

    sparkles.forEach(s => {
      s.alpha += s.vAlpha * s.dir;
      if (s.alpha >= 1) { s.dir = -1; s.alpha = 1; }
      if (s.alpha <= 0) { s.dir = 1; Object.assign(s, makeSparkle()); }
      drawSparkle(s);
    });

    requestAnimationFrame(tick);
  }
  tick();
}

// ────────────────────────────────────────────────────────────────
// SCROLL REVEAL
// ────────────────────────────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal, .lesson-card, .reminder-card, .timeline-item').forEach(el => {
    observer.observe(el);
  });
}

// ────────────────────────────────────────────────────────────────
// SECTION 1: HERO
// ────────────────────────────────────────────────────────────────
function initHero() {
  const btn = document.getElementById('open-story-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    document.getElementById('lessons')?.scrollIntoView({ behavior: 'smooth' });
  });
}

// ────────────────────────────────────────────────────────────────
// SECTION 2: LESSONS
// ────────────────────────────────────────────────────────────────
function initLessons() {
  const grid = document.getElementById('lessons-grid');
  if (!grid) return;

  CONFIG.lessons.forEach((lesson, i) => {
    const card = document.createElement('div');
    card.className = 'lesson-card';
    card.style.setProperty('--lesson-delay', `${i * 0.08}s`);
    card.innerHTML = `
      <span class="lesson-number">0${i + 1}</span>
      <p class="lesson-text">"${lesson.text}"</p>
    `;

    // Stagger animation via delay
    card.style.transitionDelay = `${i * 0.1}s`;

    grid.appendChild(card);
  });

  // Observe lesson cards
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('in-view');
    });
  }, { threshold: 0.1 });

  grid.querySelectorAll('.lesson-card').forEach(el => obs.observe(el));
}

// ────────────────────────────────────────────────────────────────
// SECTION 3: LOVE CAROUSEL
// ────────────────────────────────────────────────────────────────
function initLoveCarousel() {
  const track = document.getElementById('love-track');
  const dotsEl = document.getElementById('love-dots');
  const prev = document.getElementById('love-prev');
  const next = document.getElementById('love-next');
  if (!track) return;

  let current = 0;
  const visibleCount = () => Math.min(3, CONFIG.loveThings.length);

  CONFIG.loveThings.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'flip-card';
    card.setAttribute('aria-label', `Thing ${i + 1} I love about you — click to reveal`);
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-front">
          <div class="flip-front-number">${item.front}</div>
          <p class="flip-front-hint">click to reveal</p>
        </div>
        <div class="flip-back">
          <p class="flip-back-text">"${item.back}"</p>
          <span class="flip-back-icon">${item.icon}</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    track.appendChild(card);

    // Dots
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to card ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsEl?.appendChild(dot);
  });

  function goTo(idx) {
    current = idx;
    const cardWidth = track.querySelector('.flip-card')?.offsetWidth || 280;
    const gap = 24;
    track.style.transform = `translateX(-${current * (cardWidth + gap)}px)`;
    dotsEl?.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  prev?.addEventListener('click', () => {
    if (current > 0) goTo(current - 1);
  });
  next?.addEventListener('click', () => {
    if (current < CONFIG.loveThings.length - 1) goTo(current + 1);
  });

  // Touch/drag
  let startX = 0;
  let dragging = false;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; dragging = true; }, { passive: true });
  track.addEventListener('touchend', e => {
    if (!dragging) return;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && current < CONFIG.loveThings.length - 1) goTo(current + 1);
      else if (diff < 0 && current > 0) goTo(current - 1);
    }
    dragging = false;
  }, { passive: true });
}

// ────────────────────────────────────────────────────────────────
// SECTION 4: MEMORIES / POLAROIDS
// ────────────────────────────────────────────────────────────────
function initMemories() {
  const gallery = document.getElementById('polaroid-gallery');
  if (!gallery) return;

  // HEIC icons for fallback captions
  const fallbackIcons = ['📸', '🌸', '😍', '💜', '✈️', '🧶', '🌙', '🌸'];

  CONFIG.memories.forEach((mem, i) => {
    const pol = document.createElement('div');
    pol.className = 'polaroid';
    pol.style.setProperty('--rot', mem.rot);
    pol.style.setProperty('--pol-delay', `${i * 0.12}s`);

    pol.innerHTML = `
      <div class="polaroid-img-wrap">
        <div class="polaroid-placeholder" id="pol-ph-${i}" style="display:none">
          <span>${fallbackIcons[i] || '📸'}</span>
          <span class="polaroid-placeholder-text">${mem.caption}</span>
        </div>
        <div class="heart-overlay" aria-hidden="true">💜</div>
      </div>
      <p class="polaroid-caption">${mem.caption}</p>
    `;

    if (mem.img) {
      const img = document.createElement('img');
      img.src = mem.img;
      img.alt = mem.caption;
      img.loading = 'lazy';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      img.onerror = () => {
        img.remove();
        const ph = pol.querySelector(`#pol-ph-${i}`);
        if (ph) ph.style.display = 'flex';
      };
      // Insert before heart-overlay
      const wrap = pol.querySelector('.polaroid-img-wrap');
      wrap.insertBefore(img, wrap.querySelector('.heart-overlay'));
    } else {
      const ph = pol.querySelector(`#pol-ph-${i}`);
      if (ph) ph.style.display = 'flex';
    }

    gallery.appendChild(pol);
  });
}

// ────────────────────────────────────────────────────────────────
// SECTION 5: REMINDERS
// ────────────────────────────────────────────────────────────────
function initReminders() {
  const grid = document.getElementById('reminders-grid');
  if (!grid) return;

  CONFIG.reminders.forEach((rem, i) => {
    const card = document.createElement('div');
    card.className = 'reminder-card glass-card';
    card.style.transitionDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <span class="reminder-icon">${rem.icon}</span>
      <p class="reminder-text">"${rem.text}"</p>
    `;
    grid.appendChild(card);
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('in-view');
    });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.reminder-card').forEach(el => obs.observe(el));
}



// ────────────────────────────────────────────────────────────────
// SECTION 7: LETTER (typewriter)
// ────────────────────────────────────────────────────────────────
function initLetter() {
  const bodyEl = document.getElementById('letter-body');
  const dateEl = document.getElementById('letter-date');
  if (!bodyEl) return;

  // Set date
  dateEl.textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  let started = false;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !started) {
        started = true;
        typewriteLetter(bodyEl);
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(bodyEl);
}

function typewriteLetter(container) {
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  container.appendChild(cursor);

  let pIdx = 0;
  let cIdx = 0;
  let currentP = null;

  function nextChar() {
    const paragraphs = CONFIG.letterText;
    if (pIdx >= paragraphs.length) {
      cursor.remove();
      return;
    }

    if (cIdx === 0) {
      currentP = document.createElement('p');
      container.insertBefore(currentP, cursor);
    }

    const ch = paragraphs[pIdx][cIdx];
    currentP.textContent += ch;
    cIdx++;

    if (cIdx >= paragraphs[pIdx].length) {
      pIdx++;
      cIdx = 0;
      setTimeout(nextChar, 300); // pause between paragraphs
    } else {
      setTimeout(nextChar, 22 + Math.random() * 20);
    }
  }

  nextChar();
}

// ────────────────────────────────────────────────────────────────
// SECTION 8: FUTURE TIMELINE
// ────────────────────────────────────────────────────────────────
function initFuture() {
  const tl = document.getElementById('future-timeline');
  if (!tl) return;

  CONFIG.future.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.style.setProperty('--tl-delay', `${i * 0.1}s`);
    el.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="timeline-icon">${item.icon}</span>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    `;
    tl.appendChild(el);
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('in-view');
    });
  }, { threshold: 0.1 });
  tl.querySelectorAll('.timeline-item').forEach(el => obs.observe(el));
}

// ────────────────────────────────────────────────────────────────
// SECTION 9: LAST CLICK
// ────────────────────────────────────────────────────────────────
function initLastClick() {
  const btn = document.getElementById('reminder-btn');
  const reveal = document.getElementById('reminder-reveal');
  if (!btn || !reveal) return;

  btn.addEventListener('click', () => {
    btn.style.opacity = '0';
    btn.style.transform = 'scale(0.9)';
    btn.style.pointerEvents = 'none';
    setTimeout(() => {
      btn.style.display = 'none';
      reveal.classList.remove('hidden');
      requestAnimationFrame(() => {
        reveal.classList.add('revealed');
      });
    }, 400);
  });
}

// ────────────────────────────────────────────────────────────────
// MEMORY JAR
// ────────────────────────────────────────────────────────────────
function initMemoryJar() {
  const jar = document.getElementById('memory-jar');
  const popup = document.getElementById('jar-note-popup');
  if (!jar || !popup) return;

  let hideTimer = null;
  let lastNote = -1;

  jar.addEventListener('click', () => {
    clearTimeout(hideTimer);

    let noteIdx;
    do { noteIdx = Math.floor(Math.random() * CONFIG.jarNotes.length); }
    while (noteIdx === lastNote);
    lastNote = noteIdx;

    popup.innerHTML = `
      <div style="font-size:0.72rem;letter-spacing:0.15em;text-transform:uppercase;color:#C8B6FF;margin-bottom:8px;">✦ Note from the jar ✦</div>
      "${CONFIG.jarNotes[noteIdx]}"
    `;

    popup.classList.add('visible');
    hideTimer = setTimeout(() => popup.classList.remove('visible'), 4000);
  });
}

// ────────────────────────────────────────────────────────────────
// FLOATING ENVELOPES
// ────────────────────────────────────────────────────────────────
function initEnvelopes() {
  const container = document.getElementById('envelopes-container');
  const modal = document.getElementById('envelope-modal');
  const closeBtn = document.getElementById('env-modal-close');
  const titleEl = document.getElementById('env-modal-title');
  const msgEl = document.getElementById('env-modal-message');
  if (!container || !modal) return;

  const positions = [
    { x: '8%', top: '25%', rot: '-6deg', duration: '13s', delay: '0s' },
    { x: '82%', top: '45%', rot: '4deg', duration: '11s', delay: '2s' },
    { x: '5%', top: '60%', rot: '-3deg', duration: '14s', delay: '1s' },
    { x: '85%', top: '20%', rot: '6deg', duration: '10s', delay: '3.5s' },
    { x: '88%', top: '70%', rot: '-5deg', duration: '12s', delay: '0.5s' },
  ];

  CONFIG.envelopes.forEach((env, i) => {
    const pos = positions[i % positions.length];
    const el = document.createElement('div');
    el.className = 'floating-env';
    el.style.setProperty('--env-x', pos.x);
    el.style.setProperty('--env-top', pos.top);
    el.style.setProperty('--env-rot', pos.rot);
    el.style.setProperty('--env-duration', pos.duration);
    el.style.setProperty('--env-delay', pos.delay);

    el.innerHTML = `
      <span class="env-icon">💌</span>
      <span class="env-tag">${env.label}</span>
    `;

    el.addEventListener('click', () => openEnvelopeModal(env));
    container.appendChild(el);
  });

  function openEnvelopeModal(env) {
    titleEl.textContent = env.title;
    msgEl.textContent = env.message;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeModal);
  modal.querySelector('.env-modal-backdrop')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ────────────────────────────────────────────────────────────────
// CONSTELLATION CANVAS
// ────────────────────────────────────────────────────────────────
function initConstellationCanvas() {
  const canvas = document.getElementById('star-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const hint = document.getElementById('constellation-hint');

  const SIZE = 700;
  canvas.width = SIZE;
  canvas.height = SIZE;

  // Heart-shaped star positions (normalized 0-1)
  const HEART_STARS = [];
  const STAR_COUNT = 20;
  for (let i = 0; i < STAR_COUNT; i++) {
    const t = (i / STAR_COUNT) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    HEART_STARS.push({
      nx: (x / 18 + 1) / 2,
      ny: (y / 18 + 1) / 2,
      clicked: false,
      r: 0,
    });
  }

  // Background stars
  const BG_STARS = Array.from({ length: 120 }, () => ({
    x: Math.random() * SIZE,
    y: Math.random() * SIZE,
    size: 0.5 + Math.random() * 1.5,
    alpha: 0.2 + Math.random() * 0.5,
    twinkle: Math.random() * Math.PI * 2,
    speed: 0.02 + Math.random() * 0.04,
  }));

  let connections = [];
  let allConnected = false;
  let celebrationTimer = null;

  // Stars are at actual canvas coordinates
  function getStarX(s) { return s.nx * SIZE; }
  function getStarY(s) { return s.ny * SIZE; }

  function drawScene(ts) {
    ctx.clearRect(0, 0, SIZE, SIZE);

    // bg stars
    BG_STARS.forEach(s => {
      s.twinkle += s.speed;
      const a = s.alpha * (0.6 + 0.4 * Math.sin(s.twinkle));
      ctx.save();
      ctx.globalAlpha = a;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // connections
    connections.forEach(([a, b]) => {
      ctx.save();
      ctx.strokeStyle = 'rgba(200,182,255,0.5)';
      ctx.lineWidth = 1.5;
      ctx.shadowColor = '#C8B6FF';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(getStarX(HEART_STARS[a]), getStarY(HEART_STARS[a]));
      ctx.lineTo(getStarX(HEART_STARS[b]), getStarY(HEART_STARS[b]));
      ctx.stroke();
      ctx.restore();
    });

    // Heart stars
    HEART_STARS.forEach((s, i) => {
      const x = getStarX(s), y = getStarY(s);
      if (s.clicked) {
        s.r = Math.min(s.r + 0.5, 8);
      }
      const baseR = 3;
      const r = s.clicked ? s.r : baseR;

      ctx.save();
      ctx.globalAlpha = 1;
      ctx.shadowColor = s.clicked ? '#C8B6FF' : 'rgba(255,255,255,0.5)';
      ctx.shadowBlur = s.clicked ? 20 : 6;
      ctx.fillStyle = s.clicked ? '#C8B6FF' : 'rgba(255,255,255,0.85)';
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    if (allConnected) drawHeartLabel();

    requestAnimationFrame(drawScene);
  }
  requestAnimationFrame(drawScene);

  function drawHeartLabel() {
    ctx.save();
    ctx.font = 'italic 1rem "Playfair Display", serif';
    ctx.fillStyle = 'rgba(200,182,255,0.8)';
    ctx.textAlign = 'center';
    ctx.fillText('Written in the stars 🤍', SIZE / 2, SIZE - 20);
    ctx.restore();
  }

  function handleClick(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = SIZE / rect.width;
    const scaleY = SIZE / rect.height;
    const mx = (e.clientX - rect.left) * scaleX;
    const my = (e.clientY - rect.top) * scaleY;

    HEART_STARS.forEach((s, i) => {
      const dx = mx - getStarX(s);
      const dy = my - getStarY(s);
      if (Math.sqrt(dx * dx + dy * dy) < 24 && !s.clicked) {
        s.clicked = true;

        // Connect to previous clicked star
        const clickedIdx = HEART_STARS.map((s, i) => s.clicked ? i : -1).filter(i => i >= 0);
        if (clickedIdx.length >= 2) {
          const prev = clickedIdx[clickedIdx.length - 2];
          connections.push([prev, i]);
        }

        const total = HEART_STARS.filter(s => s.clicked).length;
        if (total === HEART_STARS.length) {
          allConnected = true;
          if (hint) hint.textContent = 'You connected all the stars into a heart 🤍';
          // close the loop
          connections.push([clickedIdx[clickedIdx.length - 1], clickedIdx[0]]);
        }
      }
    });
  }

  canvas.addEventListener('click', handleClick);

  // Touch
  canvas.addEventListener('touchstart', e => {
    e.preventDefault();
    handleClick(e.touches[0]);
  }, { passive: false });
}

// ────────────────────────────────────────────────────────────────
// FINALE: Lavender Field + Fireflies + Moon
// ────────────────────────────────────────────────────────────────
function initFinale() {
  const canvas = document.getElementById('field-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H;
  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Moon
  const moon = { x: 0.72, y: 0.15, r: 45, phase: 0 };

  // Stars
  const stars = Array.from({ length: 200 }, () => ({
    x: Math.random(), y: Math.random() * 0.55,
    size: 0.5 + Math.random(),
    alpha: 0.3 + Math.random() * 0.6,
    t: Math.random() * Math.PI * 2,
    speed: 0.008 + Math.random() * 0.01,
  }));

  // Fireflies
  const fireflies = Array.from({ length: 35 }, () => ({
    x: Math.random(),
    y: 0.45 + Math.random() * 0.55,
    vx: (-0.0003 + Math.random() * 0.0006),
    vy: (-0.0003 + Math.random() * 0.0006),
    alpha: 0,
    maxAlpha: 0.5 + Math.random() * 0.5,
    t: Math.random() * Math.PI * 2,
    speed: 0.02 + Math.random() * 0.03,
    size: 2 + Math.random() * 2.5,
  }));

  // Lavender stalks
  const STALK_COUNT = 80;
  const stalks = Array.from({ length: STALK_COUNT }, (_, i) => ({
    x: (i / STALK_COUNT) + (Math.random() - 0.5) * 0.015,
    height: 0.12 + Math.random() * 0.14,
    sway: Math.random() * Math.PI * 2,
    swaySpeed: 0.005 + Math.random() * 0.008,
    swayAmp: 0.004 + Math.random() * 0.006,
    buds: 4 + Math.floor(Math.random() * 4),
    color: `hsl(${265 + Math.random() * 30}, 55%, ${60 + Math.random() * 15}%)`,
  }));

  let startTime = null;
  let finaleTriggered = false;

  function drawFrame(ts) {
    if (!startTime) startTime = ts;
    const elapsed = (ts - startTime) / 1000;

    ctx.clearRect(0, 0, W, H);

    // Sky gradient
    const sky = ctx.createLinearGradient(0, 0, 0, H * 0.65);
    sky.addColorStop(0, '#0a001a');
    sky.addColorStop(0.4, '#1a0533');
    sky.addColorStop(0.75, '#2d1060');
    sky.addColorStop(1, '#3a1878');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H * 0.65);

    // Field gradient
    const field = ctx.createLinearGradient(0, H * 0.6, 0, H);
    field.addColorStop(0, '#2a1455');
    field.addColorStop(0.4, '#1e0e3a');
    field.addColorStop(1, '#0d0021');
    ctx.fillStyle = field;
    ctx.fillRect(0, H * 0.6, W, H * 0.4);

    // Stars
    stars.forEach(s => {
      s.t += s.speed;
      const a = s.alpha * (0.5 + 0.5 * Math.sin(s.t));
      ctx.save();
      ctx.globalAlpha = a;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(s.x * W, s.y * H, s.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // Moon rising
    const moonRise = Math.min(elapsed / 5, 1); // 5s to rise
    const moonY = (0.35 - 0.18 * moonRise) * H;
    const moonX = moon.x * W;

    // Moon glow
    const glow = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, moon.r * 3);
    glow.addColorStop(0, `rgba(200,182,255,${0.15 * moonRise})`);
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(moonX, moonY, moon.r * 3, 0, Math.PI * 2);
    ctx.fill();

    // Moon body
    ctx.save();
    ctx.globalAlpha = moonRise;
    const moonGrad = ctx.createRadialGradient(moonX - 10, moonY - 10, 0, moonX, moonY, moon.r);
    moonGrad.addColorStop(0, '#fffef0');
    moonGrad.addColorStop(0.6, '#f0e8d0');
    moonGrad.addColorStop(1, '#d4c8a0');
    ctx.fillStyle = moonGrad;
    ctx.shadowColor = 'rgba(200,182,255,0.6)';
    ctx.shadowBlur = 30;
    ctx.beginPath();
    ctx.arc(moonX, moonY, moon.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Lavender stalks
    const groundY = H * 0.7;
    stalks.forEach(stalk => {
      stalk.sway += stalk.swaySpeed;
      const sx = stalk.x * W + Math.sin(stalk.sway + elapsed * 0.5) * stalk.swayAmp * W;
      const h = stalk.height * H;
      const topY = groundY - h;

      // Stem
      ctx.save();
      ctx.strokeStyle = `hsl(135, 30%, 30%)`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(sx, groundY);
      ctx.lineTo(sx, topY);
      ctx.stroke();
      ctx.restore();

      // Buds
      const budSpacing = h * 0.22;
      for (let b = 0; b < stalk.buds; b++) {
        const by = topY + b * budSpacing;
        ctx.save();
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = stalk.color;
        ctx.shadowColor = stalk.color;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.ellipse(sx, by, 3, 5.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    });

    // Ground
    const groundGrad = ctx.createLinearGradient(0, groundY - 20, 0, H);
    groundGrad.addColorStop(0, 'rgba(42,20,85,0.9)');
    groundGrad.addColorStop(1, 'rgba(13,0,33,1)');
    ctx.fillStyle = groundGrad;
    ctx.fillRect(0, groundY, W, H - groundY);

    // Fireflies
    fireflies.forEach(f => {
      f.t += f.speed;
      f.alpha = f.maxAlpha * (0.5 + 0.5 * Math.sin(f.t));
      f.x = ((f.x + f.vx) + 1) % 1;
      f.y = Math.max(0.45, Math.min(0.98, f.y + f.vy));
      if (Math.random() < 0.01) f.vy = -f.vy;
      if (Math.random() < 0.01) f.vx = -f.vx;

      const fx = f.x * W, fy = f.y * H;
      const ffg = ctx.createRadialGradient(fx, fy, 0, fx, fy, f.size * 3);
      ffg.addColorStop(0, `rgba(220,255,180,${f.alpha})`);
      ffg.addColorStop(1, 'transparent');
      ctx.fillStyle = ffg;
      ctx.beginPath();
      ctx.arc(fx, fy, f.size * 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.save();
      ctx.globalAlpha = f.alpha;
      ctx.fillStyle = '#e0ffb0';
      ctx.beginPath();
      ctx.arc(fx, fy, f.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(drawFrame);
  }

  // Trigger finale text when section is visible
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !finaleTriggered) {
        finaleTriggered = true;
        requestAnimationFrame(drawFrame);
        setTimeout(() => revealFinaleText(), 1000);
      }
    });
  }, { threshold: 0.2 });

  obs.observe(canvas.closest('.finale-section'));
}

function revealFinaleText() {
  const elements = [
    { id: 'finale-text-1', delay: 500 },
    { id: 'finale-text-2', delay: 1500 },
    { id: 'finale-text-3', delay: 2500 },
    { id: 'finale-div', delay: 3500 },
    { id: 'finale-text-4', delay: 4500 },
  ];

  elements.forEach(({ id, delay }) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.classList.add('revealed');
    }, delay);
  });
}
