let navMenu = document.getElementById("category__menus");
let hamburger = document.getElementById("header__menuLink");
let hamburgerIcon = document.getElementById("header__menuLink-md");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

hamburgerIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
