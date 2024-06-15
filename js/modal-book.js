(() => {
  const refs = {
    backdrop: document.querySelector("[data-modal-backdrop]"),
    openModalBookBtn: document.querySelector("[data-modal-book-open]"),
    closeModalBookBtn: document.querySelector("[data-modal-book-close]"),
    modalBook: document.querySelector("[data-modal-book]"),
  };

  refs.openModalBookBtn.addEventListener("click", toggleModal);
  refs.closeModalBookBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.backdrop.classList.toggle("show");
    refs.modalBook.classList.toggle("show");
  }
})();
