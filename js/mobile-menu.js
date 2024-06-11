function toggleMenu() {
  let heroTitle = document.querySelector(".hero-box-title");
  let heroParagraph = document.querySelector(".hero-box-paragraph");
  let heroBtn = document.querySelector(".hero-box-btn");
  const menu = document.querySelector(".header-mob-menu");

  heroTitle.classList.toggle("hidden");
  heroParagraph.classList.toggle("hidden");
  heroBtn.classList.toggle("hidden");
  menu.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const iconBtn = document.querySelector(".header-menu-btn");
  const iconOpen = document.querySelector(".icon-open");
  const iconClose = document.querySelector(".icon-close");

  iconBtn.addEventListener("click", () => {
    if (iconOpen.style.display === "none") {
      iconOpen.style.display = "inline";
      iconClose.style.display = "none";
    } else {
      iconOpen.style.display = "none";
      iconClose.style.display = "inline";
    }
  });
});
