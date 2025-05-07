tovarCardsAdd();
setDairyProduct();

let dairyBodyMinImages = document.querySelector(".dairy--body__minImages");
let dairyBodyBigImage = document.querySelector(".dairy--body__bigImage img");

dairyBodyMinImages.addEventListener("click", (event) => {
  event.target.src && (dairyBodyBigImage.src = event.target.src);
});
