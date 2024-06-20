document.addEventListener("DOMContentLoaded", () => {
  function initializeCarousel(
    btnLeftSelector,
    btnRightSelector,
    carouselListSelector,
    itemSelector,
    interval = 5000
  ) {
    const btnLeft = document.querySelector(btnLeftSelector);
    const btnRight = document.querySelector(btnRightSelector);
    const carouselList = document.querySelector(carouselListSelector);
    const items = document.querySelectorAll(itemSelector);

    let currentIndex = 0;

    function showCard(index) {
      const offset = -index * 100;
      carouselList.style.transform = `translateX(${offset}%)`;
    }

    btnRight.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % items.length;
      showCard(currentIndex);
    });

    btnLeft.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showCard(currentIndex);
    });

    let startX = 0;
    let endX = 0;

    carouselList.addEventListener("touchstart", (event) => {
      startX = event.touches[0].clientX;
    });

    carouselList.addEventListener("touchmove", (event) => {
      endX = event.touches[0].clientX;
    });

    carouselList.addEventListener("touchend", () => {
      if (startX > endX + 50) {
        currentIndex = (currentIndex + 1) % items.length;
        showCard(currentIndex);
      } else if (startX < endX - 50) {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showCard(currentIndex);
      }
    });

    setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      showCard(currentIndex);
    }, interval);
  }

  initializeCarousel(
    ".btn-left",
    ".btn-right",
    ".tours-list",
    ".tours-list-item"
  );

  initializeCarousel(
    ".btn-gallery-left",
    ".btn-gallery-right",
    ".gallery-list",
    ".gallery-list-item"
  );
});
