(() => {
  const btnLeft = document.querySelector(".btn-gallery-left");
  const btnRight = document.querySelector(".btn-gallery-right");
  const carouselList = document.querySelector(".gallery-list");
  const items = document.querySelectorAll(".gallery-list-item");

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

  setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    showCard(currentIndex);
  }, 3000);
})();
