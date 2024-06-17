(() => {
  const cardFlippeds = document.querySelectorAll(".reviews-list-item");

  cardFlippeds.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  });
})();
