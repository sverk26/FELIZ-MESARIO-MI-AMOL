/* ==========================================================================
   💌 Página con dedicatoria — script.js
   --------------------------------------------------------------------------
   1. PERSONALIZACIÓN  ← nombre, textos, música, colores y decoración
   2. Utilidades
   3. Contenido (aplica los textos de CONFIG al HTML)
   4. Cielo (destellos y símbolos flotantes)
   5. Globos (clásicos o en forma de corazón)
   6. Confeti
   7. Música (MP3 local + melodía sintetizada de respaldo)
   8. Pieza central interactiva (torta, flor…)
   9. Aparición de textos
   10. Experiencia (bienvenida → celebración)
   11. Arranque

   Nota técnica: script clásico (no "type=module") para que también funcione
   al abrir index.html con doble clic (file://).
   ========================================================================== */
'use strict';

/* 1. PERSONALIZACIÓN ====================================================== */
/* En los textos, {name} se reemplaza por el nombre de la persona. */

/* @@CONFIG_START */
const CONFIG = {
  "name": "Dulce María",
  "welcomeEyebrow": "Para ti, mi amor",
  "welcomeLine": "Feliz aniversario,",
  "welcomeEmoji": "❤️",
  "welcomeSubtitle": "2 años y 9 meses a tu lado, y todavía me sigues sorprendiendo.",
  "welcomeHint": "Sube el volumen: esta sorpresa tiene música.",
  "heroKicker": "Hoy celebro la suerte de tenerte,",
  "heroLead": "Preparé este pequeño rincón solo para ti, para recordarte cuánto Te Amo.",
  "scrollCue": "Lee esto despacio",
  "messageSeal": "💌",
  "messageTitle": "❤️ Para ti, {name} ❤️",
  "message": [
    "Mi Amor, hoy cumplimos 2 años y 9 meses, y todavía me sorprende lo fácil que es quererte y enamorarme mas de ti. 🥰 Contigo, los días comunes se volvieron mis favoritos. ✨ Gracias por tu paciencia, por tus risas y por quedarte también en los días difíciles, no tengo duda de que elegirte fue la mejor decisión que he tomado. 💖",
    "Hemos pasado por momentos muy bonitos, pero también por días complicados, diferencias, cansancio y situaciones que quizá nos hicieron dudar o sentirnos mal. Y aun así seguimos aquí. 💞 Creo que eso dice mucho de lo que tenemos. No quiero prometerte que todo siempre será perfecto porque sé que no será así, pero sí quiero seguir aprendiendo contigo, seguir mejorando y encontrar la manera de que los dos podamos sentirnos felices y tranquilos en nuestra relación. 🌷 Sé que a veces necesitas más de mí y quizá no siempre sé cómo demostrarte lo que siento, pero quiero seguir aprendiendo a hacerlo. 🤍",
    "Y gracias también por creer en mí, por alegrarte por mis logros, por apoyarme con mis metas y por estar pendiente de mí incluso cuando estoy cansado o tengo demasiadas cosas en la cabeza. 🙏 Saber que hay alguien que confía en mí y que se alegra genuinamente por lo que voy consiguiendo significa muchísimo. 😊 Yo también quiero verte cumplir tus metas, crecer, lograr todo aquello que quieres y poder estar ahí para acompañarte en el proceso. 🌟 No quiero que dejes de ser tú por estar conmigo; quiero que los dos podamos crecer, cumplir nuestros sueños y seguir encontrándonos en el camino. ❤️",
    "Ya casi llegamos a los tres años, y quiero seguir sumando meses a tu lado, uno por uno, sin apuro. 💕"
  ],
  "reader": {
    "next": "Continuar leyendo 💌",
    "prev": "← Anterior"
  },
  "page2": {
    "openButton": "Descúbrelo 💌",
    "lead": "…que todavía tengo muchos planes contigo.",
    "body": [
      "Quiero seguir sumando meses, años, experiencias, viajes ✈️, risas 😂, discusiones tontas 🙈, abrazos 🤗 y todos esos momentos que todavía nos faltan vivir. No sé exactamente qué nos espera más adelante ni cómo serán las cosas, pero sí sé que hoy te sigo eligiendo a ti. 💘 Gracias por quedarte, por quererme, por entenderme y por hacerme sentir tan amado. 🥰",
      "Quiero seguir conociéndote, riéndome contigo y aprendiendo a amarte mejor cada día. 🌹",
      "Lo que tenemos lo construimos los dos, y es lo más bonito que tengo. 💑"
    ],
    "love": "¡Feliz 2 años y 9 meses mi amol. Te amo muchísimo !",
    "loveEmoji": "❤️",
    "signature": "— Sverker",
    "continueButton": "Continuar 🌷"
  },
  "question": {
    "title": "¿Deseas continuar con nuestro amor? ❤️",
    "yes": "💗 Sí",
    "no": "No",
    "noMessages": [
      "Piénsalo un poquito más 🥺",
      "¿Estás segura? 👀",
      "Piénsalo un poquito más… ❤️",
      "¿Segurísima? 🥺",
      "Creo que deberías pensarlo otra vez 😌",
      "¿De verdad quieres decir que no? 👀"
    ],
    "yesReply": "💗 ¡Sí!"
  },
  "memories": {
    "title": "Nuestros recuerdos",
    "result": "Sabía que elegirías quedarte conmigo",
    "music": "audio/cumbia-del-amor.mp3"
  },
  "centerpiece": {
    "type": "flor",
    "title": "Una flor que no se marchita",
    "lead": "Tócala cuando estés lista.",
    "button": "Abrir la flor 🌷",
        "doneMessage": "✨ Como lo que siento por ti, que cada día florece y crece más ✨",
    "nextButton": "Tengo una pregunta para ti ❤️",
    "ariaInitial": "Capullo de flor cerrado",
    "ariaDone": "Flor abierta con el centro dorado"
  },
  "closingTitle": "Feliz aniversario,",
  "closingText": "Por muchos meses y años más juntos.",
  "footer": "Con amor, de Sverker para {name} ❤️",
  "buttons": {
    "open": "Abrir mi sorpresa",
    "celebrate": "Celebrar otra vez"
  },
  "decor": {
    "shape": "corazones",
    "floaters": [
      "♥",
      "♥",
      "♥",
      "✦"
    ],
    "floaterColors": [
      "#e2718f",
      "#f29bb2",
      "#d9a441"
    ]
  },
  "balloonColors": [
    "#e2718f",
    "#f29bb2",
    "#c9416b",
    "#ffffff",
    "#f6d98b",
    "#f7b6c9"
  ],
  "confettiColors": [
    "#f7b6c9",
    "#f29bb2",
    "#e2718f",
    "#fbd3df",
    "#c9416b",
    "#ffe4ec"
  ],
  "music": {
    "volume": 0.6,
    "synthFallback": true,
    "src": "audio/cuando-tu-me-besas.mp3",
    "melody": {
      "beat": 0.42,
      "gap": 2,
      "notes": [
        [
          "E5",
          0.5
        ],
        [
          "D#5",
          0.5
        ],
        [
          "E5",
          0.5
        ],
        [
          "D#5",
          0.5
        ],
        [
          "E5",
          0.5
        ],
        [
          "B4",
          0.5
        ],
        [
          "D5",
          0.5
        ],
        [
          "C5",
          0.5
        ],
        [
          "A4",
          1,
          "Am2"
        ],
        [
          "C4",
          0.5
        ],
        [
          "E4",
          0.5
        ],
        [
          "A4",
          0.5
        ],
        [
          "B4",
          1,
          "E2"
        ],
        [
          "E4",
          0.5
        ],
        [
          "G#4",
          0.5
        ],
        [
          "B4",
          0.5
        ],
        [
          "C5",
          1,
          "Am2"
        ],
        [
          "E4",
          0.5
        ],
        [
          "E5",
          0.5
        ],
        [
          "D#5",
          0.5
        ],
        [
          "E5",
          0.5
        ],
        [
          "D#5",
          0.5
        ],
        [
          "E5",
          0.5
        ],
        [
          "B4",
          0.5
        ],
        [
          "D5",
          0.5
        ],
        [
          "C5",
          0.5
        ],
        [
          "A4",
          1,
          "Am2"
        ],
        [
          "C4",
          0.5
        ],
        [
          "E4",
          0.5
        ],
        [
          "A4",
          0.5
        ],
        [
          "B4",
          1,
          "E2"
        ],
        [
          "E4",
          0.5
        ],
        [
          "C5",
          0.5
        ],
        [
          "B4",
          0.5
        ],
        [
          "A4",
          2,
          "Am2"
        ]
      ]
    }
  }
};
/* @@CONFIG_END */

/* 2. UTILIDADES =========================================================== */

const $  = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const rand = (min, max) => Math.random() * (max - min) + min;
const pick = (list) => list[Math.floor(Math.random() * list.length)];
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const prefersReducedMotion = () => reducedMotionQuery.matches;
const isSmallScreen = () => window.innerWidth < 600;

/** Reemplaza {name} por el nombre configurado */
const fill = (text) => String(text).split("{name}").join(CONFIG.name);

/** Resuelve rutas tipo "buttons.open" dentro de CONFIG */
function getConfigValue(path) {
  return path.split(".").reduce((obj, key) => (obj && key in obj ? obj[key] : undefined), CONFIG);
}

/** Rechaza la promesa si no se resuelve a tiempo */
function withTimeout(promise, ms) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(Object.assign(new Error("timeout"), { name: "TimeoutError" })), ms);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

/* 3. CONTENIDO ============================================================ */

const Content = {
  apply() {
    $$("[data-bind]").forEach((el) => {
      const value = getConfigValue(el.dataset.bind);
      if (typeof value === "string") el.textContent = fill(value);
    });

    const body = $("#messageBody");
    if (body && Array.isArray(CONFIG.message)) {
      body.replaceChildren(
        ...CONFIG.message.map((text) => {
          const p = document.createElement("p");
          p.textContent = fill(text);
          return p;
        })
      );
    }

    const body2 = $("#page2Body");
    if (body2 && CONFIG.page2 && Array.isArray(CONFIG.page2.body)) {
      body2.replaceChildren(
        ...CONFIG.page2.body.map((text) => {
          const p = document.createElement("p");
          p.textContent = fill(text);
          return p;
        })
      );
    }
  },
};

/* 4. CIELO: DESTELLOS Y SÍMBOLOS FLOTANTES ================================ */

const Sky = {
  init() {
    const sky = $("#sky");
    const fragment = document.createDocumentFragment();
    const sparkleCount = isSmallScreen() ? 16 : 30;
    const floaterCount = isSmallScreen() ? 5 : 9;
    const glyphs = CONFIG.decor.floaters || ["✦"];
    const tones = CONFIG.decor.floaterColors || ["#d9a441"];

    for (let i = 0; i < sparkleCount; i++) {
      const s = document.createElement("span");
      s.className = "sparkle";
      s.style.setProperty("--x", `${rand(2, 98)}%`);
      s.style.setProperty("--y", `${rand(2, 96)}%`);
      s.style.setProperty("--size", `${rand(8, 18)}px`);
      s.style.setProperty("--dur", `${rand(2.8, 5.5)}s`);
      s.style.setProperty("--delay", `${-rand(0, 6)}s`);
      fragment.appendChild(s);
    }

    for (let i = 0; i < floaterCount; i++) {
      const f = document.createElement("span");
      f.className = "floater";
      f.textContent = pick(glyphs);
      f.style.setProperty("--x", `${rand(3, 95)}%`);
      f.style.setProperty("--size", `${rand(12, 24)}px`);
      f.style.setProperty("--c", pick(tones));
      f.style.setProperty("--dur", `${rand(14, 24)}s`);
      f.style.setProperty("--delay", `${-rand(0, 24)}s`);
      f.style.setProperty("--drift", `${rand(-60, 60)}px`);
      fragment.appendChild(f);
    }

    sky.appendChild(fragment);
  },
};

/* 5. GLOBOS =============================================================== */

const BALLOON_SHAPES = {
  globos: `
    <path class="balloon__string" d="M50 124 C 43 138, 57 150, 48 164 S 53 180, 50 190"/>
    <path class="balloon__body" d="M50 4 C 22 4 6 28 6 55 C 6 86 31 111 50 118 C 69 111 94 86 94 55 C 94 28 78 4 50 4 Z"/>
    <path class="balloon__shade" d="M94 55 C 94 86 69 111 50 118 C 70 99 82 76 80 50 C 79 31 71 16 61 7 C 81 13 94 31 94 55 Z"/>
    <ellipse class="balloon__shine" cx="33" cy="36" rx="9" ry="16" transform="rotate(-24 33 36)"/>
    <path class="balloon__knot" d="M44 125 L50 117 L56 125 Z"/>`,
  corazones: `
    <path class="balloon__string" d="M50 118 C 43 134, 57 148, 48 162 S 53 180, 50 190"/>
    <path class="balloon__body" d="M50 30 C 50 30 45 8 27 8 C 12 8 4 22 4 37 C 4 66 34 88 50 110 C 66 88 96 66 96 37 C 96 22 88 8 73 8 C 55 8 50 30 50 30 Z"/>
    <path class="balloon__shade" d="M96 37 C 96 66 66 88 50 110 C 70 84 86 62 84 38 C 83 24 77 14 68 9 C 85 10 96 22 96 37 Z"/>
    <ellipse class="balloon__shine" cx="24" cy="30" rx="7" ry="12" transform="rotate(-35 24 30)"/>
    <path class="balloon__knot" d="M45 118 L50 110 L55 118 Z"/>`,
};

const Balloons = {
  layer: null,

  init() {
    this.layer = $("#balloons");
    this.shape = BALLOON_SHAPES[CONFIG.decor.shape] ? CONFIG.decor.shape : "globos";
    const count = isSmallScreen() ? 7 : 12;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const left = ((i + rand(0.15, 0.85)) / count) * 100; // carriles para que no se amontonen
      fragment.appendChild(this.create({ left, index: i }));
    }
    this.layer.appendChild(fragment);
  },

  create({ left, index = 0, burst = false }) {
    const size = isSmallScreen() ? rand(44, 78) : rand(58, 112);
    const depth = size / (isSmallScreen() ? 78 : 112);
    const duration = burst ? rand(6, 9) : rand(16, 30);

    const balloon = document.createElement("div");
    balloon.className = burst ? "balloon balloon--burst" : "balloon";
    balloon.style.setProperty("--left", `${left}%`);
    balloon.style.setProperty("--size", size.toFixed(0));
    balloon.style.setProperty("--color", CONFIG.balloonColors[index % CONFIG.balloonColors.length]);
    balloon.style.setProperty("--dur", `${duration}s`);
    balloon.style.setProperty("--delay", burst ? `${rand(0, 0.6)}s` : `${-rand(0, duration)}s`);
    balloon.style.setProperty("--sway", `${rand(6, 20).toFixed(1)}px`);
    balloon.style.setProperty("--sway-dur", `${rand(2.8, 5.2).toFixed(2)}s`);
    balloon.style.setProperty("--alpha", (0.55 + depth * 0.4).toFixed(2));
    balloon.style.setProperty("--rest-y", `${rand(12, 70)}%`);
    balloon.innerHTML = `<svg class="balloon__svg" viewBox="0 0 100 190" aria-hidden="true" focusable="false">${BALLOON_SHAPES[this.shape]}</svg>`;

    if (burst) balloon.addEventListener("animationend", () => balloon.remove(), { once: true });
    return balloon;
  },

  release() {
    this.layer.classList.remove("is-paused");
  },

  burst(count = isSmallScreen() ? 4 : 7) {
    if (prefersReducedMotion()) return;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      fragment.appendChild(this.create({ left: rand(8, 92), index: Math.floor(rand(0, 99)), burst: true }));
    }
    this.layer.appendChild(fragment);
  },
};

/* 6. PÉTALOS (canvas; antes confeti; se detiene solo cuando no quedan) ==== */

const Confetti = {
  canvas: null,
  ctx: null,
  particles: [],
  running: false,
  lastTime: 0,
  rainUntil: 0,
  maxParticles: 360,

  init() {
    this.canvas = $("#confettiCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.resize();
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => this.resize(), 150);
    });
  },

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = Math.round(this.width * dpr);
    this.canvas.height = Math.round(this.height * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  },

  scaleCount(count) {
    const factor = prefersReducedMotion() ? 0.2 : isSmallScreen() ? 0.6 : 1;
    return Math.max(8, Math.round(count * factor));
  },

  createParticle(x, y, angleDeg, spread, speedMin, speedMax) {
    const angle = ((angleDeg + rand(-spread / 2, spread / 2)) * Math.PI) / 180;
    const speed = rand(speedMin, speedMax);
    return {
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      w: rand(9, 14),
      h: rand(13, 20),
      color: pick(CONFIG.confettiColors),
      rotation: rand(0, Math.PI * 2),
      spin: rand(-0.2, 0.2),
      tilt: rand(0, Math.PI * 2),
      tiltSpeed: rand(0.05, 0.14),
      wobble: rand(0, Math.PI * 2),
      life: 1,
      decay: rand(0.0024, 0.0042),
    };
  },

  /** Explosión desde un punto (angle en grados: -90 = hacia arriba) */
  burst({ x, y, count = 120, angle = -90, spread = 80, speed = [7, 15] }) {
    const total = this.scaleCount(count);
    for (let i = 0; i < total && this.particles.length < this.maxParticles; i++) {
      this.particles.push(this.createParticle(x, y, angle, spread, speed[0], speed[1]));
    }
    this.start();
  },

  cannons() {
    const h = this.height;
    this.burst({ x: 0,          y: h, angle: -58,  spread: 40, count: 90, speed: [12, 22] });
    this.burst({ x: this.width, y: h, angle: -122, spread: 40, count: 90, speed: [12, 22] });
  },

  rain(duration = 2600) {
    if (prefersReducedMotion()) return this.burst({ x: this.width / 2, y: this.height * 0.35, count: 60, spread: 360, speed: [2, 6] });
    this.rainUntil = performance.now() + duration;
    this.start();
  },

  start() {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    requestAnimationFrame(this.loop);
  },

  loop: (now) => Confetti.frame(now),

  frame(now) {
    const dt = Math.min((now - this.lastTime) / 16.67, 3);
    this.lastTime = now;
    const { ctx } = this;

    if (now < this.rainUntil && this.particles.length < this.maxParticles) {
      const perFrame = isSmallScreen() ? 1 : 2;
      for (let i = 0; i < perFrame; i++) {
        this.particles.push(this.createParticle(rand(0, this.width), -12, 90, 30, 1, 3));
      }
    }

    ctx.clearRect(0, 0, this.width, this.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.vy += 0.17 * dt;               // los pétalos caen más lento que el confeti
      p.vx *= Math.pow(0.982, dt);
      p.vy *= Math.pow(0.982, dt);
      if (p.vy > 2.9) p.vy = 2.9;
      p.wobble += 0.05 * dt;
      p.x += (p.vx + Math.sin(p.wobble) * 1.5) * dt;
      p.y += p.vy * dt;
      p.rotation += p.spin * dt;
      p.tilt += p.tiltSpeed * dt;
      p.life -= p.decay * dt;

      if (p.life <= 0 || p.y > this.height + 30) {
        this.particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.min(1, p.life * 2.2);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      // Pétalo: gota redondeada que gira y se voltea en el aire
      ctx.scale(0.35 + 0.65 * Math.abs(Math.cos(p.tilt)), 1);
      const { w, h } = p;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.bezierCurveTo(w * 0.95, h * 0.2, w * 0.55, -h * 0.55, 0, -h * 0.38);
      ctx.bezierCurveTo(-w * 0.55, -h * 0.55, -w * 0.95, h * 0.2, 0, h / 2);
      ctx.fill();
      ctx.globalAlpha *= 0.35;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.ellipse(-w * 0.12, -h * 0.05, w * 0.14, h * 0.24, -0.35, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    if (this.particles.length > 0 || now < this.rainUntil) {
      requestAnimationFrame(this.loop);
    } else {
      this.running = false;
      ctx.clearRect(0, 0, this.width, this.height);
    }
  },
};

/* 7. MÚSICA =============================================================== */

/** Cajita musical con Web Audio API: toca CONFIG.music.melody si no hay MP3 */
const Synth = {
  ctx: null,
  master: null,
  session: null,
  timer: null,
  nextStart: 0,
  playing: false,

  get melody() { return CONFIG.music.melody || { beat: 0.5, gap: 2, notes: [] }; },

  get supported() {
    return Boolean(window.AudioContext || window.webkitAudioContext) && this.melody.notes.length > 0;
  },

  get songDuration() {
    const { beat, gap = 2, notes } = this.melody;
    return (notes.reduce((sum, n) => sum + n[1], 0) + gap) * beat;
  },

  unlock() {
    if (!this.supported) return;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.master = this.ctx.createGain();
      this.master.gain.value = Music.volume * 0.55;

      const delay = this.ctx.createDelay(1); // eco suave de cajita musical
      const feedback = this.ctx.createGain();
      const wet = this.ctx.createGain();
      delay.delayTime.value = 0.27;
      feedback.gain.value = 0.22;
      wet.gain.value = 0.28;
      this.master.connect(this.ctx.destination);
      this.master.connect(delay);
      delay.connect(feedback).connect(delay);
      delay.connect(wet).connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
  },

  /** "C4", "F#5", "Bb3", "Am2" (la m de acorde menor se ignora aquí) */
  noteToFrequency(note) {
    const match = /^([A-G])([#b]?)m?(-?\d)$/.exec(note);
    if (!match) return 440;
    const steps = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
    const accidental = match[2] === "#" ? 1 : match[2] === "b" ? -1 : 0;
    const midi = 12 * (Number(match[3]) + 1) + steps[match[1]] + accidental;
    return 440 * Math.pow(2, (midi - 69) / 12);
  },

  tone(freq, start, duration, peak, { type = "triangle", harmonic = true } = {}) {
    const { ctx, session } = this;
    const env = ctx.createGain();
    env.gain.setValueAtTime(0.0001, start);
    env.gain.exponentialRampToValueAtTime(peak, start + 0.015);
    env.gain.exponentialRampToValueAtTime(peak * 0.35, start + Math.min(0.3, duration));
    env.gain.exponentialRampToValueAtTime(0.0001, start + duration + 0.45);
    env.connect(session.gain);

    const oscillators = [ctx.createOscillator()];
    oscillators[0].type = type;
    oscillators[0].frequency.value = freq;
    oscillators[0].connect(env);

    if (harmonic) {
      const bell = ctx.createOscillator();
      const bellGain = ctx.createGain();
      bell.type = "sine";
      bell.frequency.value = freq * 2;
      bellGain.gain.value = 0.3;
      bell.connect(bellGain).connect(env);
      oscillators.push(bell);
    }

    oscillators.forEach((osc) => {
      osc.start(start);
      osc.stop(start + duration + 0.5);
      session.voices.add(osc);
      osc.onended = () => session.voices.delete(osc);
    });
  },

  scheduleSong(t0) {
    const { beat, notes } = this.melody;
    let t = t0;
    for (const [note, beats, bass] of notes) {
      const duration = beats * beat;
      this.tone(this.noteToFrequency(note), t, duration, 0.32);
      if (bass) this.tone(this.noteToFrequency(bass), t, beat * 2.4, 0.16, { type: "sine", harmonic: false });
      t += duration;
    }
  },

  /** Programa la melodía por adelantado con el reloj de audio (sin cortes) */
  scheduleAhead() {
    if (!this.playing) return;
    while (this.nextStart < this.ctx.currentTime + 1.5) {
      this.scheduleSong(this.nextStart);
      this.nextStart += this.songDuration;
    }
  },

  start() {
    if (!this.supported || this.playing) return;
    this.unlock();
    const now = this.ctx.currentTime;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(1, now + 0.6);
    gain.connect(this.master);

    this.session = { gain, voices: new Set() };
    this.playing = true;
    this.nextStart = now + 0.2;
    this.scheduleAhead();
    this.timer = setInterval(() => this.scheduleAhead(), 300);
  },

  stop() {
    if (!this.playing) return;
    this.playing = false;
    clearInterval(this.timer);
    const { gain, voices } = this.session;
    const now = this.ctx.currentTime;
    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(Math.max(gain.gain.value, 0.0001), now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
    setTimeout(() => {
      voices.forEach((osc) => { try { osc.stop(); } catch (_) { /* ya detenido */ } });
      voices.clear();
      gain.disconnect();
    }, 400);
    this.session = null;
  },

  setVolume(value) {
    if (this.master) this.master.gain.setTargetAtTime(value * 0.55, this.ctx.currentTime, 0.05);
  },
};

/** Intenta el MP3; si falta o falla usa la cajita musical. La UI refleja el estado real. */
const Music = {
  audio: null,
  mode: null,          // "file" | "synth"
  playing: false,
  pending: false,
  fileFailed: false,
  volume: CONFIG.music.volume,

  init() {
    this.audio = $("#bgMusic");
    this.toggleBtn = $("#musicToggle");
    this.icon = $("#musicIcon");
    this.label = $("#musicLabel");
    this.slider = $("#volumeSlider");

    this.audio.loop = true;
    this.audio.volume = this.volume;
    this.slider.value = String(this.volume);

    this.audio.addEventListener("error", () => { this.fileFailed = true; });
    if (CONFIG.music.src) this.audio.src = CONFIG.music.src;
    else this.fileFailed = true;

    this.toggleBtn.addEventListener("click", () => this.toggle());
    this.slider.addEventListener("input", (e) => this.setVolume(Number(e.target.value)));

    this.audio.addEventListener("pause", () => { if (this.mode === "file" && !this.pending) this.render(false); });
    this.audio.addEventListener("play", () => { if (this.mode === "file") this.render(true); });

    document.addEventListener("visibilitychange", () => {
      if (this.mode !== "synth" || !Synth.ctx) return;
      if (document.hidden) Synth.ctx.suspend();
      else if (this.playing) Synth.ctx.resume();
    });

    this.render(false);
  },

  /** Llamar de forma síncrona dentro de un clic */
  unlock() {
    if (CONFIG.music.synthFallback) Synth.unlock();
  },

  async play() {
    if (this.pending) return;
    this.pending = true;

    if (!this.fileFailed) {
      try {
        await withTimeout(this.audio.play(), 4000);
        this.mode = "file";
        this.pending = false;
        this.render(true);
        return;
      } catch (error) {
        this.audio.pause();
        if (error.name === "NotAllowedError") {
          this.pending = false;
          this.render(false);
          return;
        }
        if (error.name !== "TimeoutError") this.fileFailed = true;
        console.info("🎵 No se pudo reproducir el MP3: se usa la melodía de respaldo.");
      }
    }

    if (CONFIG.music.synthFallback && Synth.supported) {
      Synth.start();
      this.mode = "synth";
      this.render(true);
    } else {
      this.render(false);
    }
    this.pending = false;
  },

  pause() {
    if (this.mode === "file") this.audio.pause();
    if (this.mode === "synth") Synth.stop();
    this.render(false);
  },

  toggle() {
    if (this.pending) return;
    if (this.playing) {
      this.pause();
    } else {
      this.unlock();
      this.play();
    }
  },

  /** Cambia a otra canción (llamar dentro de un clic). Si el MP3 no existe, sigue la actual. */
  switchTo(src) {
    if (!src || this.pending) return;
    const prevSrc = this.audio.getAttribute("src");
    const prevMode = this.mode;
    const wasPlaying = this.playing;

    if (!wasPlaying) {        // respeta la música apagada: solo deja lista la nueva canción
      const probe = new Audio();
      probe.preload = "metadata";
      probe.addEventListener("loadedmetadata", () => {
        this.audio.src = src;
        this.fileFailed = false;
        this.mode = null;
      }, { once: true });
      probe.src = src;
      return;
    }

    this.pending = true;
    if (prevMode === "file") this.audio.pause();
    this.audio.src = src;
    this.audio.loop = true;
    withTimeout(this.audio.play(), 5000)
      .then(() => {
        if (prevMode === "synth") Synth.stop();
        this.mode = "file";
        this.fileFailed = false;
        this.pending = false;
        this.render(true);
      })
      .catch(() => {
        console.info("🎵 No se encontró " + src + ": sigue la música actual.");
        this.audio.pause();
        if (prevSrc) this.audio.src = prevSrc;
        this.fileFailed = prevMode !== "file";
        this.pending = false;
        if (prevMode === "file") {
          this.audio.play().then(() => this.render(true)).catch(() => this.render(false));
        } else {
          this.render(prevMode === "synth" && Synth.playing);
        }
      });
  },

  setVolume(value) {
    this.volume = value;
    this.audio.volume = value; // en iPhone el volumen lo controlan los botones físicos
    Synth.setVolume(value);
  },

  render(isPlaying) {
    this.playing = isPlaying;
    this.toggleBtn.setAttribute("aria-pressed", String(isPlaying));
    this.icon.textContent = isPlaying ? "🔊" : "🔇";
    this.label.textContent = isPlaying ? "Música activada" : "Música desactivada";
    this.toggleBtn.title = isPlaying ? "Pausar la música" : "Reproducir la música";
  },
};

/* 8. PIEZA CENTRAL INTERACTIVA ============================================ */
/* Alterna la clase .is-done en #centerpiece: el CSS de cada pieza define la animación. */

const Centerpiece = {
  done: false,

  init() {
    this.el = $("#centerpiece");
    this.stage = this.el.closest(".centerpiece-stage");
    this.button = $("#centerpieceBtn");
    this.message = $("#centerpieceMessage");
    this.cfg = CONFIG.centerpiece;
    this.button.textContent = fill(this.cfg.button);
    this.el.setAttribute("aria-label", fill(this.cfg.ariaInitial));
    this.button.addEventListener("click", () => { if (!this.done) this.complete(); });
    this.nextBtn = $("#toQuestionBtn");
    this.nextBtn.addEventListener("click", () => this.toQuestion());
  },

  complete() {
    this.done = true;
    this.el.classList.add("is-done");
    this.stage.classList.add("is-done");
    this.el.setAttribute("aria-label", fill(this.cfg.ariaDone));
    this.button.hidden = true;

    const r = this.el.getBoundingClientRect();
    setTimeout(() => {
      Confetti.burst({ x: r.left + r.width / 2, y: r.top + r.height * 0.2, count: 150, spread: 110, speed: [6, 14] });
      this.message.textContent = fill(this.cfg.doneMessage);
      this.message.classList.add("is-visible");
    }, 450);
    // El botón para seguir aparece cuando ya se leyó el mensaje de la flor
    setTimeout(() => {
      this.nextBtn.hidden = false;
      this.nextBtn.classList.add("is-turning");
    }, prefersReducedMotion() ? 0 : 2200);
  },

  toQuestion() {
    this.nextBtn.hidden = true;
    Stage.go({ hide: ["#centro"], show: ["#questionStage"] });
    $("#questionTitle").setAttribute("tabindex", "-1");
    $("#questionTitle").focus({ preventScroll: true });
  },

};

/* 9. APARICIÓN DE TEXTOS ================================================== */

const Reveal = {
  init() {
    const elements = $$(".reveal");
    if (!("IntersectionObserver" in window) || prefersReducedMotion()) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -6% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
  },
};

/* 10. EXPERIENCIA ========================================================= */

const Experience = {
  started: false,

  init() {
    this.welcome = $("#welcome");
    this.main = $("#main");
    this.openBtn = $("#openBtn");
    this.openBtn.addEventListener("click", () => this.start());
    $("#celebrateBtn").addEventListener("click", () => this.celebrate());
  },

  start() {
    if (this.started) return;
    this.started = true;

    Music.unlock(); // el desbloqueo del audio debe ocurrir dentro del mismo clic
    Music.play();

    const r = this.openBtn.getBoundingClientRect();
    Confetti.burst({ x: r.left + r.width / 2, y: r.top + r.height / 2, count: 140, spread: 360, speed: [4, 13] });
    Confetti.cannons();
    Balloons.release();
    Balloons.burst();

    this.main.hidden = false;
    $("#musicControl").hidden = false;
    this.welcome.classList.add("is-leaving");
    Reveal.init();

    setTimeout(() => {
      this.welcome.hidden = true;
      document.body.classList.remove("is-locked");
      $("#heroTitle").focus({ preventScroll: true });
    }, prefersReducedMotion() ? 0 : 1000);
  },

  celebrate() {
    Confetti.rain(3200);
    Confetti.cannons();
    Balloons.burst();
  },
};

/* 10·. FASES: cada paso es una pantalla nueva ============================= */

const Stage = {
  /** Oculta los selectores de `hide`, muestra los de `show` y sube al inicio sin animación */
  go({ hide = [], show = [] }) {
    hide.forEach((sel) => { const el = $(sel); if (el) el.hidden = true; });
    show.forEach((sel) => { const el = $(sel); if (el) el.hidden = false; });
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.style.scrollBehavior = prev;
  },
};

/* 10a. CARTA POR PÁGINAS (un párrafo por página) ========================= */

const Reader = {
  index: 0,

  init() {
    this.card = $(".message__card");
    this.paras = $$("#messageBody p");
    this.pager = $("#messagePager");
    this.dots = $("#messageDots");
    this.status = $("#messagePageStatus");
    this.next = $("#readNext");
    this.prev = $("#readPrev");
    this.signoff = $(".message__signoff");
    this.finalBtn = $("#page2Btn");
    if (this.paras.length < 2) return;            // nada que paginar

    this.card.classList.add("is-paged");
    this.pager.hidden = false;
    this.dots.replaceChildren(...this.paras.map(() => document.createElement("span")));
    this.next.addEventListener("click", () => this.go(this.index + 1));
    this.prev.addEventListener("click", () => this.go(this.index - 1));
    this.show(0, false);
  },

  go(i) {
    if (i < 0 || i >= this.paras.length) return;
    this.show(i, true);
    // Cada página empieza con la carta arriba de la pantalla
    const y = this.card.getBoundingClientRect().top + window.scrollY - 8;
    window.scrollTo({ top: Math.max(0, y), behavior: prefersReducedMotion() ? "auto" : "smooth" });
    if (i === this.paras.length - 1) {
      const r = this.next.getBoundingClientRect();
      Confetti.burst({ x: r.left + r.width / 2, y: r.top, count: 40, spread: 120, speed: [3, 8] });
    }
  },

  show(i, animate) {
    this.index = i;
    const last = i === this.paras.length - 1;
    this.paras.forEach((p, k) => {
      p.classList.toggle("is-current", k === i);
      p.classList.toggle("is-turning", animate && k === i);
    });
    [...this.dots.children].forEach((d, k) => d.classList.toggle("is-on", k <= i));
    this.status.textContent = `Página ${i + 1} de ${this.paras.length}`;
    this.prev.hidden = i === 0;
    this.next.hidden = last;
    this.signoff.hidden = !last;
    this.finalBtn.hidden = !last;
    if (last) {
      this.signoff.classList.add("is-turning");
      this.finalBtn.classList.add("is-turning");
    }
  },
};

/* 10b. SEGUNDA PÁGINA ===================================================== */

const Page2 = {
  init() {
    this.el = $("#page2");
    this.openBtn = $("#page2Btn");
    this.continueBtn = $("#page2Continue");
    this.openBtn.addEventListener("click", () => this.open());
    this.continueBtn.addEventListener("click", () => this.close());
  },

  open() {
    this.el.hidden = false;
    document.body.classList.add("is-locked");
    requestAnimationFrame(() => this.el.classList.add("is-open"));
    const r = this.openBtn.getBoundingClientRect();
    Confetti.burst({ x: r.left + r.width / 2, y: r.top, count: 70, spread: 140, speed: [4, 10] });
    $("#page2Lead").focus({ preventScroll: true });
  },

  close() {
    // La flor queda lista detrás de la hoja; la portada y la carta ya no se muestran
    Stage.go({ hide: ["#inicio", "#mensaje"], show: ["#continuation"] });
    this.el.classList.remove("is-open");
    this.el.classList.add("is-leaving");
    setTimeout(() => {
      this.el.hidden = true;
      this.el.classList.remove("is-leaving");
      document.body.classList.remove("is-locked");
      $("#centerpieceTitle").setAttribute("tabindex", "-1");
      $("#centerpieceTitle").focus({ preventScroll: true });
    }, prefersReducedMotion() ? 0 : 650);
  },
};

/* 10c. PREGUNTA Y RECUERDOS =============================================== */

const Question = {
  noCount: 0,
  answered: false,

  init() {
    this.cfg = CONFIG.question;
    this.yesBtn = $("#yesBtn");
    this.noBtn = $("#noBtn");
    this.reply = $("#noReply");
    this.noBtn.addEventListener("click", () => this.no());
    this.yesBtn.addEventListener("click", () => this.yes());
  },

  no() {
    if (this.answered) return;
    const list = this.cfg.noMessages;
    this.reply.textContent = list[this.noCount % list.length];
    this.noCount += 1;
    this.reply.classList.remove("is-pop");
    void this.reply.offsetWidth; // reinicia la animación
    this.reply.classList.add("is-pop");
    this.yesBtn.style.setProperty("--grow", Math.min(1 + this.noCount * 0.08, 1.45).toFixed(2));
  },

  yes() {
    if (this.answered) return;
    this.answered = true;
    Music.switchTo(CONFIG.memories.music); // dentro del clic: permite reproducir la canción
    $("#questionButtons").hidden = true;
    this.reply.textContent = fill(this.cfg.yesReply);
    this.reply.classList.add("is-pop", "is-yes");
    Memories.reveal();
  },
};

const Memories = {
  shown: false,

  init() {
    this.section = $("#recuerdos");
    this.video = $("#memoriesVideo");
    this.result = $("#memoriesResult");
    this.flash = $("#loveFlash");
    this.video.addEventListener("ended", () => this.showResult());
    this.video.addEventListener("error", () => this.showResult(), true);
  },

  reveal() {
    const quick = prefersReducedMotion();
    this.flash.hidden = false;
    requestAnimationFrame(() => this.flash.classList.add("is-on"));
    Confetti.rain(2200);
    Confetti.burst({ x: window.innerWidth / 2, y: window.innerHeight / 2, count: 80, spread: 360, speed: [3, 11] });
    Balloons.burst();

    setTimeout(() => {
      Stage.go({ hide: ["#questionStage"], show: ["#recuerdos"] });
      $("#memoriesTitle").focus({ preventScroll: true });
      this.flash.classList.remove("is-on");
      const playing = this.video.play();
      if (playing && playing.catch) playing.catch(() => this.showResult());
      // Respaldo: si el video no termina (pausa, error), el mensaje aparece igual
      const secs = Number.isFinite(this.video.duration) && this.video.duration > 0 ? this.video.duration : 80;
      this.safety = setTimeout(() => this.showResult(), (secs + 8) * 1000);
    }, quick ? 0 : 1600);

    setTimeout(() => { this.flash.hidden = true; }, quick ? 0 : 2400);
  },

  showResult() {
    if (this.shown || this.section.hidden) return;
    this.shown = true;
    clearTimeout(this.safety);
    this.result.hidden = false;
    requestAnimationFrame(() => this.result.classList.add("is-visible"));
    const r = this.result.getBoundingClientRect();
    Confetti.burst({ x: r.left + r.width / 2, y: r.top, count: 110, spread: 160, speed: [5, 12] });
    $("#finale").hidden = false;
    setTimeout(() => this.result.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" }), 200);
  },
};

/* 11. ARRANQUE ============================================================ */

(function boot() {
  Content.apply();
  Sky.init();
  Balloons.init();
  Confetti.init();
  Music.init();
  Centerpiece.init();
  Experience.init();
  Reader.init();
  Page2.init();
  Question.init();
  Memories.init();
})();
