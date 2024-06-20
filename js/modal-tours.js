document.addEventListener("DOMContentLoaded", () => {
  const openModalToursBtn = document.querySelectorAll(
    "[data-modal-tours-open]"
  );
  const closeModalToursBtn = document.querySelector("[data-modal-tours-close]");
  const backdrop = document.querySelector("[data-modal-backdrop-tours]");
  const modalTours = document.querySelector("[data-modal-tours]");
  const modalToursCard1 = document.querySelector(".modalTours-card1");
  const modalToursCard2 = document.querySelector(".modalTours-card2");
  const modalToursCard3 = document.querySelector(".modalTours-card3");

  openModalToursBtn.forEach((button, index) => {
    if (index === 0) {
      button.addEventListener("click", () => {
        backdrop.classList.add("show");
        modalTours.classList.add("show");
        modalToursCard1.classList.remove("visually-hidden");
        modalToursCard2.classList.add("visually-hidden");
        modalToursCard3.classList.add("visually-hidden");
      });
    }
    if (index === 1) {
      button.addEventListener("click", () => {
        backdrop.classList.add("show");
        modalTours.classList.add("show");
        modalToursCard1.classList.add("visually-hidden");
        modalToursCard2.classList.remove("visually-hidden");
        modalToursCard3.classList.add("visually-hidden");
      });
    }
    if (index === 2) {
      button.addEventListener("click", () => {
        backdrop.classList.add("show");
        modalTours.classList.add("show");
        modalToursCard1.classList.add("visually-hidden");
        modalToursCard2.classList.add("visually-hidden");
        modalToursCard3.classList.remove("visually-hidden");
      });
    }
  });

  closeModalToursBtn.addEventListener("click", () => {
    backdrop.classList.remove("show");
    modalTours.classList.remove("show");
  });
});
