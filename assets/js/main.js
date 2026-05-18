/* ─── Cursor ─────────────────────────────── */
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let mx = -100, my = -100, rx = -100, ry = -100;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

function animateCursor() {
  rx += (mx - rx) * 0.18;
  ry += (my - ry) * 0.18;
  if (cursor) {
    cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
  }
  if (cursorRing) {
    cursorRing.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
  }
  requestAnimationFrame(animateCursor);
}
if (window.innerWidth > 768) animateCursor();

document.querySelectorAll('a, button, .exp-card, .cert-card, .stat-card').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

/* ─── Nav scroll ─────────────────────────── */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);
});

/* ─── Canvas particles ───────────────────── */
(function() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, nodes, animId;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createNodes(n) {
    return Array.from({length: n}, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const mouse = { x: mx, y: my };

    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    // connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < 130) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0,255,136,${(1 - d/130) * 0.18})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
      // mouse repulsion
      const mdx = nodes[i].x - mouse.x;
      const mdy = nodes[i].y - mouse.y;
      const md = Math.sqrt(mdx*mdx + mdy*mdy);
      if (md < 100) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0,255,136,${(1 - md/100) * 0.5})`;
        ctx.lineWidth = 0.8;
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }

    // dots
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,255,136,0.7)';
      ctx.fill();
    });

    animId = requestAnimationFrame(draw);
  }

  resize();
  nodes = createNodes(70);
  draw();

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animId);
    resize();
    nodes = createNodes(70);
    draw();
  });
})();

/* ─── Typewriter ─────────────────────────── */
(function() {
  const el = document.getElementById('typed-text');
  if (!el) return;
  const phrases = [
    'Cybersecurity Advisor · AppSec & DevSecOps Expert',
    'AI Agent Developer · Threat Modeling Specialist',
    'Turning security into a business enabler',
  ];
  let pi = 0, ci = 0, deleting = false;

  function type() {
    const phrase = phrases[pi];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) {
        deleting = true;
        setTimeout(type, 2200);
        return;
      }
      setTimeout(type, 45);
    } else {
      el.textContent = phrase.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
        setTimeout(type, 400);
        return;
      }
      setTimeout(type, 22);
    }
  }
  setTimeout(type, 800);
})();

/* ─── Scroll reveal ──────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ─── Counter animation ──────────────────── */
function animateCounter(el, target, suffix) {
  let start = 0;
  const duration = 1600;
  const startTime = performance.now();
  function update(now) {
    const t = Math.min((now - startTime) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.floor(ease * target) + suffix;
    if (t < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      const target = parseInt(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      animateCounter(el, target, suffix);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.count-up').forEach(el => counterObserver.observe(el));

/* ─── 3D tilt on cards ───────────────────── */
document.querySelectorAll('.exp-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    card.style.transform = `translateY(-6px) scale(1.01) rotateX(${-y*8}deg) rotateY(${x*8}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
