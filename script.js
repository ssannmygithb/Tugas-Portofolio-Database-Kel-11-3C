document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".member-card").forEach((card, index) => {
    card.style.setProperty("--card-index", index);
  });

  document.querySelectorAll(".avatar img").forEach((image) => {
    const handleBrokenImage = () => {
      image.classList.add("is-missing");
    };

    image.addEventListener("error", handleBrokenImage);

    if (image.complete && image.naturalWidth === 0) {
      handleBrokenImage();
    }
  });
});
