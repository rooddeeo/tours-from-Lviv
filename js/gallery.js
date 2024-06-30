document.addEventListener("DOMContentLoaded", () => {
  function initializeCarousel(
    btnLeftSelector,
    btnRightSelector,
    carouselListSelector,
    itemSelector,
    visibleItemsDesktop
  ) {
    const btnLeft = document.querySelector(btnLeftSelector);
    const btnRight = document.querySelector(btnRightSelector);
    const carouselList = document.querySelector(carouselListSelector);
    const items = document.querySelectorAll(itemSelector);

    if (items.length === 0) {
      return;
    }

    let currentIndex = 0;

    function getVisibleItemsCount() {
      if (window.innerWidth >= 1440) {
        return visibleItemsDesktop;
      } else if (window.innerWidth >= 768) {
        return 2;
      } else {
        return 1;
      }
    }

    function showCard(index) {
      const visibleItemsCount = getVisibleItemsCount();
      const offset = -index * (100 / visibleItemsCount);
      carouselList.style.transform = `translateX(${offset}%)`;
      updateButtonVisibility();
    }

    function updateCurrentIndex(direction) {
      const visibleItemsCount = getVisibleItemsCount();
      const maxIndex = items.length - visibleItemsCount;
      currentIndex = Math.min(Math.max(currentIndex + direction, 0), maxIndex);
      showCard(currentIndex);
    }

    function updateButtonVisibility() {
      const visibleItemsCount = getVisibleItemsCount();
      if (items.length <= visibleItemsCount) {
        btnLeft.style.display = "none";
        btnRight.style.display = "none";
      } else {
        btnLeft.style.display = "block";
        btnRight.style.display = "block";
      }
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
    ".tours-list-item",
    3
  );

  initializeCarousel(
    ".btn-gallery-left",
    ".btn-gallery-right",
    ".gallery-list",
    ".gallery-list-item",
    2
  );
});
