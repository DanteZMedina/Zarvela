/* ===== Helper ===== */
const $ = (sel) => document.querySelector(sel);

/* ===== Reveal on Scroll ===== */
const onScrollReveal = () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) el.classList.add("visible");
  });
};
document.addEventListener("scroll", onScrollReveal);
document.addEventListener("DOMContentLoaded", onScrollReveal);

/* ===== CTA: Agenda tu Cita ===== */
const btnAgendar = $("#btnAgendar");
if (btnAgendar){
  btnAgendar.addEventListener("click", () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const whatsappNumber = "525524049904"; // <-- tu número
      const defaultMessage = encodeURIComponent("Hola, quiero agendar una cita 👋");
      window.open(`https://wa.me/${whatsappNumber}?text=${defaultMessage}`, "_blank");
      return;
    }

    const contactSection = $("#contactLocation");
    contactSection.scrollIntoView({ behavior: "smooth" });
    contactSection.classList.add("contact-highlight");

    setTimeout(() => contactSection.classList.remove("contact-highlight"), 6000);
    setTimeout(() => $("#name")?.focus(), 700);
  });
}

/* ===== Validación Inputs ===== */
const inputName = $("#name");
const inputMessage = $("#message");
const btnWhatsapp = $("#btnWhatsapp");

function validateForm() {
  const hasName = inputName.value.trim() !== "";
  const hasMessage = inputMessage.value.trim() !== "";

  btnWhatsapp.disabled = !(hasName && hasMessage);
  btnWhatsapp.style.opacity = btnWhatsapp.disabled ? "0.5" : "1";
}

// activar validación en cada tecla
inputName?.addEventListener("input", validateForm);
inputMessage?.addEventListener("input", validateForm);

// inicial
validateForm();

/* ===== Enviar WhatsApp desde Form ===== */
const form = $("#whatsappForm");
if (form){
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (btnWhatsapp.disabled) return;

    const name = $("#name").value.trim();
    const phone = $("#phone")?.value.trim() || "";
    const message = $("#message").value.trim();

    const text = `Hola, soy ${name}. Quiero platicar sobre: ${message}`;
    window.open(`https://wa.me/525538799478?text=${encodeURIComponent(text)}`, "_blank");
  });
}

/* ===== Smooth Scroll Menu ===== */
document.querySelectorAll('a.nav-link[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (target){
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });

      const menu = $("#navMenu");
      if (menu && menu.classList.contains("show")){
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menu);
        bsCollapse.hide();
      }
    }
  });
});
