// Set footer year
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const name = String(formData.get("name") || "").trim();
  statusEl.textContent = `Thanks, ${name || "there"}! Your message was submitted (demo).`;
  form.reset();
});