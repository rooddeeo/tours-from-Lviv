(() => {
  const btnLeft = document.querySelector(".btn-left");
  const btnRight = document.querySelector(".btn-right");
  const carouselList = document.querySelector(".tours-list");
  const items = document.querySelectorAll(".tours-list-item");

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
