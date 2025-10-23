// Simple fade-in animation for sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    section.style.opacity = 0;
    section.style.transition = "opacity 0.8s ease";
    setTimeout(() => {
      section.style.opacity = 1;
    }, 300 * index);
  });
});
