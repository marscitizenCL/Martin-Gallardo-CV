/* ============================================================
   ICONS — simple line icons for Strengthscope cards
   ============================================================ */
const ICONS = {
  leadership: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.6 5.6 6.1.7-4.5 4.2.9 6.1L12 16.7l-5.1 2.9.9-6.1-4.5-4.2 6.1-.7L12 3z"/></svg>`,
  creativity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z"/></svg>`,
  development: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="15.5" r="5"/><path d="M12 10V3M8 6.5L12 3l4 3.5"/></svg>`,
  growth: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V14M10 20V9M16 20V4M3 20h18"/></svg>`,
  collaboration: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/></svg>`,
  confidence: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>`,
  flexibility: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13c2-4.5 4-4.5 6.5 0s4.5 4.5 7 0 4.5-4.5 4.5-4.5"/></svg>`,
};

const escapeXML = (s) =>
  String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

/* ============================================================
   HERO
   ============================================================ */
function renderHero() {
  document.getElementById("hero-role").textContent = PROFILE.role;
  document.getElementById("hero-summary").textContent = PROFILE.summary;

  const strip = document.getElementById("stat-strip");
  strip.innerHTML = PROFILE.stats
    .map(
      (s) => `
    <div class="stat-block reveal">
      <span class="stat-value">${escapeXML(s.value)}</span>
      <span class="stat-label">${escapeXML(s.label)}</span>
    </div>`
    )
    .join("");
}

/* ============================================================
   TRAYECTORIA — single-line diagram (SVG)
   ============================================================ */
function polar(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

function buildDiagram() {
  const svg = document.getElementById("line-diagram");
  const nodes = CAREER;
  const spacing = 168;
  const margin = 74;
  const width = margin * 2 + spacing * (nodes.length - 1);
  const height = 260;
  const midY = 140;

  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);

  let out = "";

  // connecting segments
  nodes.forEach((n, i) => {
    if (i === 0) return;
    const x1 = margin + spacing * (i - 1);
    const x2 = margin + spacing * i;
    const isLastSegment = i === nodes.length - 1;
    out += `<line class="diag-line-progress" x1="${x1}" y1="${midY}" x2="${x2}" y2="${midY}" ${
      isLastSegment ? 'stroke-dasharray="5 7"' : ""
    } />`;
  });

  // nodes + labels
  nodes.forEach((n, i) => {
    const x = margin + spacing * i;
    const isCurrent = !!n.current;
    const r = isCurrent ? 8 : 5.5;
    const above = i % 2 === 0;

    out += `<g class="diag-node-group" data-id="${n.id}" tabindex="0" role="button" aria-label="${escapeXML(
      n.company
    )}, ${escapeXML(n.period)}">`;

    out += `<rect class="diag-hit" x="${x - spacing / 2}" y="0" width="${spacing}" height="${height}" fill="transparent" />`;

    if (isCurrent) {
      out += `<circle class="diag-node-pulse is-current" cx="${x}" cy="${midY}" r="${r + 2}" />`;
    }
    out += `<circle class="diag-node-ring ${isCurrent ? "is-current" : ""}" cx="${x}" cy="${midY}" r="${r + 6}" />`;
    out += `<circle class="diag-node-dot ${isCurrent ? "is-current" : ""}" cx="${x}" cy="${midY}" r="${r}" />`;

    const shortLabel = n.short || n.company;
    if (above) {
      out += `<text class="diag-label-company" x="${x}" y="${midY - 38}" text-anchor="middle">${escapeXML(
        shortLabel
      )}</text>`;
      out += `<text class="diag-label-period" x="${x}" y="${midY - 21}" text-anchor="middle">${escapeXML(
        n.period
      )}</text>`;
    } else {
      out += `<text class="diag-label-period" x="${x}" y="${midY + 30}" text-anchor="middle">${escapeXML(
        n.period
      )}</text>`;
      out += `<text class="diag-label-company" x="${x}" y="${midY + 46}" text-anchor="middle">${escapeXML(
        shortLabel
      )}</text>`;
    }
    out += `</g>`;
  });

  svg.innerHTML = out;

  svg.querySelectorAll(".diag-node-group").forEach((g) => {
    const open = () => openNodeDetail(g.getAttribute("data-id"));
    g.addEventListener("click", open);
    g.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") open();
    });
  });
}

function openNodeDetail(id) {
  const n = CAREER.find((c) => c.id === id);
  if (!n) return;
  const panel = document.getElementById("node-detail");
  const body = panel.querySelector(".node-detail-body");

  const metricLine = n.metric ? `<p class="nd-metric">${escapeXML(n.metric)}</p>` : "";

  body.innerHTML = `
    <h3>${escapeXML(n.company)}</h3>
    <p class="nd-role">${escapeXML(n.role)}</p>
    <p class="nd-period">${escapeXML(n.period)}${n.current ? " · ROL ACTUAL" : ""}</p>
    ${metricLine}
    <ul>${n.bullets.map((b) => `<li>${escapeXML(b)}</li>`).join("")}</ul>
  `;
  panel.hidden = false;
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.querySelector(".node-detail-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      document.getElementById("node-detail").hidden = true;
    });
  }
});

/* ============================================================
   COMPETENCIAS
   ============================================================ */
function renderCompetencies() {
  const wrap = document.getElementById("competency-panels");
  wrap.innerHTML = Object.entries(COMPETENCIES)
    .map(
      ([group, items]) => `
    <div class="competency-panel reveal">
      <h3>${escapeXML(group)}</h3>
      <div class="tag-row">
        ${items.map((i) => `<span class="tag">${escapeXML(i)}</span>`).join("")}
      </div>
    </div>`
    )
    .join("");
}

/* ============================================================
   EDUCACIÓN
   ============================================================ */
function renderEducation() {
  const list = document.getElementById("education-list");
  list.innerHTML = EDUCATION.map(
    (e) => `
    <li class="reveal">
      <div class="edu-main">
        <span class="edu-degree">${escapeXML(e.degree)}</span>
        <span class="edu-school">${escapeXML(e.school)}</span>
      </div>
      <span class="edu-year">${escapeXML(e.year)}</span>
    </li>`
  ).join("");
}

/* ============================================================
   LIDERAZGO — gauges (Hogan) + strengths (Strengthscope)
   ============================================================ */
function buildGaugeSVG(value) {
  const cx = 64, cy = 64, r = 50;
  const circumference = 2 * Math.PI * r;
  const ticks = [0, 25, 50, 75]
    .map((t) => {
      const [x1, y1] = polar(cx, cy, r + 6, (t / 100) * 360);
      const [x2, y2] = polar(cx, cy, r + 11, (t / 100) * 360);
      return `<line class="gauge-tick" x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(
        1
      )}" y2="${y2.toFixed(1)}"/>`;
    })
    .join("");

  return `
  <svg viewBox="0 0 128 128" data-target="${circumference * (1 - value / 100)}" data-circ="${circumference}">
    ${ticks}
    <circle class="gauge-arc-bg" cx="${cx}" cy="${cy}" r="${r}" />
    <circle class="gauge-arc-value" cx="${cx}" cy="${cy}" r="${r}"
      stroke-dasharray="${circumference}"
      stroke-dashoffset="${circumference}"
      transform="rotate(-90 ${cx} ${cy})" />
    <text class="gauge-value-text" x="${cx}" y="${cy + 6}" text-anchor="middle">${value}</text>
  </svg>`;
}

function renderLeadership() {
  const gaugesWrap = document.getElementById("gauges-grid");
  gaugesWrap.innerHTML = HOGAN_POTENTIAL.map(
    (h) => `
    <div class="gauge-card reveal">
      ${buildGaugeSVG(h.value)}
      <span class="gauge-scale-label">${escapeXML(h.label)}</span>
      <span class="gauge-note">${escapeXML(h.note)}</span>
    </div>`
  ).join("");

  const strengthsWrap = document.getElementById("strengths-grid");
  strengthsWrap.innerHTML = STRENGTHS.map(
    (s) => `
    <div class="strength-card reveal">
      <span class="strength-icon">${ICONS[s.icon] || ""}</span>
      <span class="strength-name">${escapeXML(s.name)}</span>
      <span class="strength-desc">${escapeXML(s.desc)}</span>
    </div>`
  ).join("");
}

function animateGauges() {
  document.querySelectorAll(".gauge-arc-value").forEach((circle) => {
    const svg = circle.closest("svg");
    const target = svg.getAttribute("data-target");
    requestAnimationFrame(() => {
      circle.style.strokeDashoffset = target;
    });
  });
}

/* ============================================================
   DOCUMENTOS
   ============================================================ */
const DOWNLOAD_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 10l5 5 5-5M4 20h16"/></svg>`;

function renderDocuments() {
  const wrap = document.getElementById("doc-grid");
  wrap.innerHTML = DOCUMENTS.map(
    (d) => `
    <a class="doc-card reveal" href="${d.file}" download>
      <div class="doc-card-top">
        <span class="doc-title">${escapeXML(d.title)}</span>
        <span class="doc-icon">${DOWNLOAD_ICON}</span>
      </div>
      <span class="doc-desc">${escapeXML(d.desc)}</span>
      <span class="doc-meta">${escapeXML(d.meta)}</span>
    </a>`
  ).join("");
}

/* ============================================================
   CONTACTO
   ============================================================ */
function renderContact() {
  const c = PROFILE.contact;
  const panel = document.getElementById("contact-panel");
  panel.innerHTML = `
    <a class="contact-item" href="mailto:${c.email}">
      <span class="contact-label">Email</span>
      <span class="contact-value">${escapeXML(c.email)}</span>
    </a>
    <a class="contact-item" href="tel:${c.phone.replace(/\s+/g, "")}">
      <span class="contact-label">Teléfono</span>
      <span class="contact-value">${escapeXML(c.phone)}</span>
    </a>
    <a class="contact-item" href="${c.linkedin}" target="_blank" rel="noopener">
      <span class="contact-label">LinkedIn</span>
      <span class="contact-value">Ver perfil</span>
    </a>
    <a class="contact-item" href="${c.github}" target="_blank" rel="noopener">
      <span class="contact-label">GitHub</span>
      <span class="contact-value">Ver código de este sitio</span>
    </a>
    <div class="contact-item">
      <span class="contact-label">Ubicación</span>
      <span class="contact-value">${escapeXML(PROFILE.location)}</span>
    </div>
  `;
}

/* ============================================================
   THEME TOGGLE (Blueprint / HMI)
   ============================================================ */
function initTheme() {
  const btn = document.getElementById("theme-toggle");
  const saved = localStorage.getItem("mg-theme");
  if (saved) document.body.setAttribute("data-theme", saved);
  updateToggleState();

  btn.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme") || "blueprint";
    const next = current === "blueprint" ? "hmi" : "blueprint";
    document.body.setAttribute("data-theme", next);
    localStorage.setItem("mg-theme", next);
    updateToggleState();
  });

  function updateToggleState() {
    const theme = document.body.getAttribute("data-theme") || "blueprint";
    btn.setAttribute("aria-pressed", theme === "hmi" ? "true" : "false");
  }
}

/* ============================================================
   MOBILE NAV
   ============================================================ */
function initMobileNav() {
  const burger = document.getElementById("nav-burger");
  const topbar = document.querySelector(".topbar");
  burger.addEventListener("click", () => {
    const open = topbar.classList.toggle("nav-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.querySelectorAll(".topnav a").forEach((a) =>
    a.addEventListener("click", () => {
      topbar.classList.remove("nav-open");
      burger.setAttribute("aria-expanded", "false");
    })
  );
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  els.forEach((el) => io.observe(el));

  const gaugeSection = document.getElementById("liderazgo");
  const gio = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateGauges();
          gio.disconnect();
        }
      });
    },
    { threshold: 0.2 }
  );
  if (gaugeSection) gio.observe(gaugeSection);
}

/* ============================================================
   INIT
   ============================================================ */
document.getElementById("footer-year").textContent = new Date().getFullYear();
renderHero();
buildDiagram();
renderCompetencies();
renderEducation();
renderLeadership();
renderDocuments();
renderContact();
initTheme();
initMobileNav();
initReveal();
