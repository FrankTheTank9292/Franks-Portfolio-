document.getElementById("year").textContent = new Date().getFullYear();

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-4px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

if (form && statusEl) {
  form.addEventListener("submit", () => {
    statusEl.textContent = "Sending your message...";
  });
}
