(() => {
  const refs = {
    backdrop: document.querySelector("[data-modal-backdrop-tours]"),
    openModalToursBtn: document.querySelector("[data-modal-tours-open]"),
    closeModalToursBtn: document.querySelector("[data-modal-tours-close]"),
    modalTours: document.querySelector("[data-modal-tours]"),
  };

  refs.openModalToursBtn.addEventListener("click", toggleModal);
  refs.closeModalToursBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.backdrop.classList.toggle("show");
    refs.modalTours.classList.toggle("show");
  }
})();
