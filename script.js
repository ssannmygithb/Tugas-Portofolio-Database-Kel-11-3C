document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".member-card").forEach((card, index) => {
    card.style.setProperty("--card-index", index);
  });

  document.querySelectorAll(".avatar img").forEach((image) => {
    image.addEventListener("error", () => {
      image.classList.add("is-missing");
    });
  });
});
