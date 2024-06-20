document.addEventListener("DOMContentLoaded", () => {
  const allCards = document.querySelectorAll(".modalTours-info");

  allCards.forEach((card, cardIndex) => {
    const sliderList = card.querySelector(".modalTours-info-box");
    const choices = card.querySelectorAll(".modalTours-info-choice");
    const dots = card.querySelectorAll(".modalTours-info-list-switch-item");

    const bgClasses = [
      ["modalTours-info-bg1", "modalTours-info-bg2", "modalTours-info-bg3"],
      [
        "modalTours-info-bg4",
        "modalTours-info-bg5",
        "modalTours-info-bg6",
        "modalTours-info-bg7",
      ],
      [
        "modalTours-info-bg8",
        "modalTours-info-bg9",
        "modalTours-info-bg10",
        "modalTours-info-bg11",
        "modalTours-info-bg12",
        "modalTours-info-bg13",
        "modalTours-info-bg14",
      ],
    ];

    let currentIndex = 0;

    function showCard(cardIndex, choiceIndex) {
      currentIndex = choiceIndex;
      const offset = -choiceIndex * 100;
      sliderList.style.transform = `translateX(${offset}%)`;

      dots.forEach((dot) => dot.classList.remove("active"));
      dots[choiceIndex].classList.add("active");

      card.classList.remove(...bgClasses[cardIndex]);
      card.classList.add(bgClasses[cardIndex][choiceIndex]);
    }

    dots.forEach((dot, choiceIndex) => {
      dot.addEventListener("click", () => {
        showCard(cardIndex, choiceIndex);
      });
    });

    let startX = 0;
    let endX = 0;

    card.addEventListener("touchstart", (event) => {
      startX = event.touches[0].clientX;
    });

    card.addEventListener("touchmove", (event) => {
      endX = event.touches[0].clientX;
    });

    card.addEventListener("touchend", () => {
      if (startX > endX + 50) {
        currentIndex = (currentIndex + 1) % choices.length;
        showCard(cardIndex, currentIndex);
      } else if (startX < endX - 50) {
        currentIndex = (currentIndex - 1 + choices.length) % choices.length;
        showCard(cardIndex, currentIndex);
      }
    });

    showCard(cardIndex, 0);
  });
});
