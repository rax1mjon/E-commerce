let offerSection = document.getElementsByClassName("offer--cards");
let articleList = document.getElementsByClassName("article--cards");

function addHomeCards() {
  let newCardList = document?.getElementsByClassName("stock--cards_new");
  let BoughtCardList = document?.getElementsByClassName("stock--cards_Bought");
  let stockCardList = document?.getElementsByClassName("stock--cards");

  // Акции

  let pro = products.filter((el) => el.discount > 0).slice(-4);

  stockCardList[0].innerHTML = "";

  pro.map((el) => {
    stockCardList[0]?.append(productCard(el, "stock"));
  });

  // Новинки

  let proNew = products.slice(-4);

  newCardList[0].innerHTML = "";

  proNew.map((el) => {
    newCardList[0]?.append(productCard(el, "notStock"));
  });

  // Покупали раньше

  let proBought = products.toSorted((a, b) => b.rating - a.rating).slice(0, 4);

  BoughtCardList[0].innerHTML = "";

  proBought.map((el) => {
    BoughtCardList[0]?.append(productCard(el, "notStock"));
  });
}

addHomeCards();

// offer section

offerSectionData.map((el) => {
  let offerSectionItem = document.createElement("li");

  let offerSectionItemBox = document.createElement("div");

  let offerSectionItemTitle = document.createElement("h3");
  offerSectionItemTitle.innerText = el.title;

  let offerSectionItemDescription = document.createElement("p");
  offerSectionItemDescription.innerText = el.description;
  offerSectionItemBox.append(offerSectionItemTitle);
  offerSectionItemBox.append(offerSectionItemDescription);

  let offerSectionItemImage = document.createElement("img");
  offerSectionItemImage.src = el.image;
  offerSectionItemImage.alt = "offer";

  offerSectionItem.append(offerSectionItemBox);
  offerSectionItem.append(offerSectionItemImage);

  offerSection[0].append(offerSectionItem);
});

// article section

articleData.map((el) => {
  let articleItem = document.createElement("li");
  articleItem.className = "stock--card";

  let articleItemBox = document.createElement("div");
  articleItemBox.className = "stock--card_img";

  let articleItemImage = document.createElement("img");
  articleItemImage.src = el.image;
  articleItemImage.alt = "article";

  articleItemBox.append(articleItemImage);

  let articleCardBody = document.createElement("div");
  articleCardBody.className = "stock--card_body";

  let articleCardBodyDate = document.createElement("span");
  articleCardBodyDate.className = "stock--card_body__cost";
  articleCardBodyDate.innerText = el.date;

  articleCardBody.append(articleCardBodyDate);

  let articleCardBodyTitle = document.createElement("h3");
  articleCardBodyTitle.innerText = el.title;

  articleCardBody.append(articleCardBodyTitle);

  let articleCardBodyText = document.createElement("p");
  articleCardBodyText.innerText = el.description;

  articleCardBody.append(articleCardBodyText);

  let articleCardBodyButton = document.createElement("a");
  articleCardBodyButton.href = "./pages/Заказы.html";
  articleCardBodyButton.innerText = "Подробнее";

  articleCardBody.append(articleCardBodyButton);

  articleItem.append(articleItemBox);

  articleItem.append(articleCardBody);

  articleList[0].append(articleItem);
});
