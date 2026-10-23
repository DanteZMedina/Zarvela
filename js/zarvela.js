/* =========================================================
   Zarvela · Interacciones
   ========================================================= */
const WHATSAPP = "525621749767";
const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

document.documentElement.classList.remove("no-js");

/* ===== Año dinámico ===== */
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

/* ===== Enlaces de WhatsApp =====
   <a data-wa="Mensaje prellenado"> → arma el enlace con el número del consultorio */
document.querySelectorAll("[data-wa]").forEach((a) => {
  a.href = waLink(a.dataset.wa || "Hola, me gustaría agendar una valoración.");
  a.target = "_blank";
  a.rel = "noopener noreferrer";
});

/* ===== Navegación ===== */
const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");

const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const setMenu = (open) => {
  nav.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
};
menuBtn?.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav?.querySelectorAll(".nav-links a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav?.classList.contains("open")) setMenu(false);
});

/* ===== Aparición al hacer scroll ===== */
const revealables = document.querySelectorAll(".rv, .step, .portrait");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add("in"));
}

/* ===== Botón fijo en móvil =====
   Aparece después del encabezado y se oculta cuando el contacto o el pie están a la vista */
const sticky = document.querySelector(".sticky-cta");
if (sticky && "IntersectionObserver" in window) {
  const intro = document.querySelector(".hero, .page-hero");
  const ends = document.querySelectorAll("#contacto, footer");
  let pastIntro = false;
  let atEnd = false;
  const update = () => sticky.classList.toggle("show", pastIntro && !atEnd);
  if (intro) {
    new IntersectionObserver(([e]) => {
      pastIntro = !e.isIntersecting && e.boundingClientRect.top < 0;
      update();
    }).observe(intro);
  }
  const visibleEnds = new Set();
  const endObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? visibleEnds.add(e.target) : visibleEnds.delete(e.target)));
    atEnd = visibleEnds.size > 0;
    update();
  });
  ends.forEach((el) => endObserver.observe(el));
}

/* ===== Guía: ¿No sabes por dónde empezar? =====
   Sin IA: dos preguntas de opción múltiple y reglas fijas que llevan a una de las áreas. */
const AREAS = {
  musculoesqueletica: {
    name: "Musculoesquelética y posoperatoria",
    url: "/musculoesqueletica/",
    text: "Dolor de cuello, espalda o articulaciones, molestias por postura o trabajo, y rehabilitación después de una cirugía o fractura.",
  },
  deportiva: {
    name: "Deportiva",
    url: "/deportiva/",
    text: "Lesiones relacionadas con el entrenamiento o el deporte, con un regreso gradual a tu actividad.",
  },
  vestibular: {
    name: "Vestibular",
    url: "/vestibular/",
    text: "Vértigo, mareo e inestabilidad. Ejercicios para el equilibrio y maniobras de reposicionamiento cuando están indicadas.",
  },
  neurologica: {
    name: "Neurológica",
    url: "/neurologica/",
    text: "Acompañamiento en condiciones como EVC, Parkinson, esclerosis múltiple o ataxia, enfocado en la función diaria.",
  },
  geriatrica: {
    name: "Geriátrica",
    url: "/geriatrica/",
    text: "Fuerza, marcha, equilibrio y prevención de caídas para personas mayores, en consultorio o a domicilio.",
  },
  oncologica: {
    name: "Oncológica",
    url: "/oncologica/",
    text: "Apoyo fisioterapéutico durante y después del tratamiento contra el cáncer, en coordinación con tu equipo médico.",
  },
};

const recommend = (zone, cause) => {
  if (cause === "neuro") return { main: "neurologica", alt: zone === "mareo" ? "vestibular" : null };
  if (cause === "cancer") return { main: "oncologica" };
  if (zone === "mareo") return { main: "vestibular", alt: cause === "edad" ? "geriatrica" : null };
  if (cause === "edad") return { main: "geriatrica", alt: "musculoesqueletica" };
  if (cause === "deporte") return { main: "deportiva", alt: "musculoesqueletica" };
  return { main: "musculoesqueletica" };
};

const guide = document.querySelector("#guia");
if (guide) {
  const steps = guide.querySelectorAll(".guide-step");
  const bars = guide.querySelectorAll(".guide-progress i");
  const answers = {};

  const show = (i) => {
    steps.forEach((s, n) => s.classList.toggle("active", n === i));
    bars.forEach((b, n) => b.classList.toggle("done", n <= i));
    const focusable = steps[i].querySelector(".opt, .result-area");
    if (i > 0 && focusable) focusable.focus({ preventScroll: true });
  };

  guide.addEventListener("click", (e) => {
    const opt = e.target.closest(".opt");
    const back = e.target.closest("[data-back]");
    const restart = e.target.closest("[data-restart]");

    if (opt) {
      const step = opt.closest(".guide-step");
      answers[step.dataset.key] = { value: opt.dataset.value, label: opt.dataset.label || opt.firstChild.textContent.trim() };
      const next = [...steps].indexOf(step) + 1;
      if (step.dataset.key === "cause") renderResult();
      show(next);
    }
    if (back) show(Math.max(0, [...steps].findIndex((s) => s.classList.contains("active")) - 1));
    if (restart) show(0);
  });

  function renderResult() {
    const { main, alt } = recommend(answers.zone.value, answers.cause.value);
    const area = AREAS[main];
    guide.querySelector("[data-result-name]").textContent = area.name;
    guide.querySelector("[data-result-text]").textContent = area.text;
    guide.querySelector("[data-result-link]").href = area.url;

    const altBox = guide.querySelector("[data-result-alt]");
    if (alt) {
      altBox.hidden = false;
      altBox.querySelector("a").textContent = AREAS[alt].name;
      altBox.querySelector("a").href = AREAS[alt].url;
    } else {
      altBox.hidden = true;
    }

    const message =
      `Hola, me gustaría agendar una valoración. ` +
      `Me molesta: ${answers.zone.label.toLowerCase()}. ` +
      `Se relaciona con: ${answers.cause.label.toLowerCase()}. ` +
      `(La guía del sitio me sugirió el área ${area.name}.)`;
    guide.querySelector("[data-result-wa]").href = waLink(message);
  }
}
