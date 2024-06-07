function toggleMenu() {
  var menu = document.querySelector(".header-menu-btn");
  var backdrop = document.querySelector(".backdrop");
  menu.classList.toggle("open");
  backdrop.classList.toggle("backdropOn");
}
