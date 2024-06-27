document.addEventListener("DOMContentLoaded", () => {
  function initializeCarousel(
    btnLeftSelector,
    btnRightSelector,
    carouselListSelector,
    itemSelector
  ) {
    const btnLeft = document.querySelector(btnLeftSelector);
    const btnRight = document.querySelector(btnRightSelector);
    const carouselList = document.querySelector(carouselListSelector);
    const items = document.querySelectorAll(itemSelector);

    let currentIndex = 0;

    function getVisibleItemsCount() {
      return window.innerWidth >= 768 ? 2 : 1;
    }

    function showCard(index) {
      const visibleItemsCount = getVisibleItemsCount();
      const offset = -index * (100 / visibleItemsCount);
      carouselList.style.transform = `translateX(${offset}%)`;
    }

    function updateCurrentIndex(direction) {
      const visibleItemsCount = getVisibleItemsCount();
      const maxIndex = Math.ceil(items.length / visibleItemsCount) - 1;
      currentIndex = (currentIndex + direction + maxIndex + 1) % (maxIndex + 1);
      showCard(currentIndex);
    }

    btnRight.addEventListener("click", () => {
      updateCurrentIndex(1);
    });

    btnLeft.addEventListener("click", () => {
      updateCurrentIndex(-1);
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
        updateCurrentIndex(1);
      } else if (startX < endX - 50) {
        updateCurrentIndex(-1);
      }
    });

    window.addEventListener("resize", () => {
      showCard(currentIndex);
    });

    showCard(currentIndex);
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
