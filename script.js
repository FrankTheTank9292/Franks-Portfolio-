// Set footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Get form + status elements
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

// Handle form submit
if (form && statusEl) {
  form.addEventListener("submit", () => {
    statusEl.textContent = "Opening your email submission form...";
  });
}
