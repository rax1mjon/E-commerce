let stockCardList = document.getElementsByClassName("stock--cards_tover");
let BoughtCardList = document.getElementsByClassName("stock--cards_Bought");

let pro = products.filter((el) => el.discount > 0).slice(-12, -8);


pro.map((el) => {
  stockCardList[0].append(productCard(el, "stock"));
});

let proBought = products.toSorted((a, b) => b.rating - a.rating).slice(0, 4);
proBought.map((el) => {
  BoughtCardList[0].append(productCard(el, "notStock"));
});
