document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const closeBtn = document.querySelector(".modal-close");

  function openModal(imageSrc) {
    modal.style.display = "block";
    setTimeout(() => {
      modal.classList.add("show");
      modalImage.src = imageSrc;
    }, 10);
  }

  function closeModal() {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
      modalImage.src = "";
    }, 500);
  }

  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  const galleryItems = document.querySelectorAll(".gallery-list-item");
  galleryItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();
      const img = item.querySelector("img");
      const largeImageSrc = JSON.parse(img.getAttribute("data-large-src"));
      const imageSrc =
        window.devicePixelRatio > 1
          ? largeImageSrc.retina
          : largeImageSrc.default;
      openModal(imageSrc);
    });
  });
});
