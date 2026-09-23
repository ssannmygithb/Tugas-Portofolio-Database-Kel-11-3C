document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".member-card").forEach((card, index) => {
    card.style.setProperty("--card-index", index);
  });
});
