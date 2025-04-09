let navMenu = document.getElementById("nav-menu");
let hamburger = document.getElementById("header__menuLink");
navMenu.addEventListener("click", () => {
  hamburger.classList.toggle("active");
});
