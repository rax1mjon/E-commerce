let stockCardList = document.getElementsByClassName("stock--cards");

// Акции

let pro = products.filter((el) => el.discount > 0);

function productCard(pro, stock) {
  let el = pro;

  let stockCardItem = document.createElement("li");
  stockCardItem.className = "stock--card";

  //  like click

  let like = ` <span class="like">
              <div class="con-like">
                <input class="like" type="checkbox" title="like">
                <div class="checkmark">
                  <svg xmlns="http://www.w3.org/2000/svg" class="outline" viewBox="0 0 24 24">
                    <path
                      d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                    </path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="filled" viewBox="0 0 24 24">
                    <path
                      d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                    </path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" class="celebrate">
                    <polygon class="poly" points="10,10 20,20"></polygon>
                    <polygon class="poly" points="10,50 20,50"></polygon>
                    <polygon class="poly" points="20,80 30,70"></polygon>
                    <polygon class="poly" points="90,10 80,20"></polygon>
                    <polygon class="poly" points="90,50 80,50"></polygon>
                    <polygon class="poly" points="80,80 70,70"></polygon>
                  </svg>
                </div>
              </div>
            </span>`;
  let likeElement = document.createElement("div");
  likeElement.innerHTML = like;

  // image box

  let stockCardImageBox = document.createElement("div");
  stockCardImageBox.className = "stock--card_img";

  let stockCardImageLink = document.createElement("a");
  stockCardImageLink.href = "./pages/Товар.html";

  let stockCardImage = document.createElement("img");
  stockCardImage.src = el.images[0];
  stockCardImage.alt = el.category;

  // add click like

  stockCardItem.append(likeElement.firstElementChild);

  stockCardImageLink.append(stockCardImage);

  if (stock === "stock") {
    let stockCardImageBoxSpan = document.createElement("span");
    stockCardImageBoxSpan.innerText = `-${el.discount}%`;
    stockCardImageBox.append(stockCardImageBoxSpan);
  }

  stockCardImageBox.append(stockCardImageLink);

  stockCardItem.append(stockCardImageBox);

  // card body => cost , text, stars, button

  let stockCardBody = document.createElement("div");
  stockCardBody.className = "stock--card_body";

  let stockCardBodyCost = document.createElement("div");
  stockCardBodyCost.className = "stock--card_body__cost";

  if (stock === "stock") {
    let stockCardBodyCostChildOne = document.createElement("div");

    let stockCardBodyCostChildOneSpanOne = document.createElement("span");
    stockCardBodyCostChildOneSpanOne.innerText = el.price + "₽";

    let stockCardBodyCostChildOneSpanTwo = document.createElement("span");
    stockCardBodyCostChildOneSpanTwo.innerText = "С картой";

    stockCardBodyCostChildOne.append(stockCardBodyCostChildOneSpanOne);
    stockCardBodyCostChildOne.append(stockCardBodyCostChildOneSpanTwo);

    stockCardBodyCost.append(stockCardBodyCostChildOne);

    let stockCardBodyCostChildTwo = document.createElement("div");

    let stockCardBodyCostChildTwoSpanOne = document.createElement("span");
    stockCardBodyCostChildTwoSpanOne.innerText =
      el.price + el.price * (el.discount / 100) + "₽";

    let stockCardBodyCostChildTwoSpanTwo = document.createElement("span");
    stockCardBodyCostChildTwoSpanTwo.innerText = "С Обычная";

    stockCardBodyCostChildTwo.append(stockCardBodyCostChildTwoSpanOne);
    stockCardBodyCostChildTwo.append(stockCardBodyCostChildTwoSpanTwo);

    stockCardBodyCost.append(stockCardBodyCostChildTwo);
  } else {
    let stockCardBodyCostSpan = document.createElement("span");
    stockCardBodyCostSpan.innerText = el.price + "₽";
    stockCardBodyCostSpan.style = `
    color: #414141;
    font-size: 18px;
    font-weight: 700;
    line-height: 150%;
    `;
    stockCardBodyCost.append(stockCardBodyCostSpan);
  }

  stockCardBody.append(stockCardBodyCost);
  stockCardItem.append(stockCardBody);

  // text

  let stockCardBodyText = document.createElement("p");
  stockCardBodyText.innerText = el.description;

  stockCardBody.append(stockCardBodyText);

  // stars

  let stockCardBodyStarts = document.createElement("div");
  stockCardBodyStarts.className = "stock--card_body__starts";

  // start image create function

  function createStartImage() {
    let stockCardBodyStart = document.createElement("img");
    stockCardBodyStart.src = `./images/home/star.svg`;
    stockCardBodyStart.alt = "stars";
    return stockCardBodyStart;
  }

  let i = 0;

  while (i < Math.floor(el.rating)) {
    let stockCardBodyStart = createStartImage();

    stockCardBodyStart.style.filter =
      "invert(36%) sepia(84%) saturate(2781%) hue-rotate(-10deg) brightness(102%) contrast(105%)";
    stockCardBodyStarts.append(stockCardBodyStart);
    i++;
  }

  while (i < 5) {
    let stockCardBodyStart = createStartImage();
    stockCardBodyStarts.append(stockCardBodyStart);
    i++;
  }

  stockCardBody.append(stockCardBodyStarts);

  // button

  let stockCardBodyButton = document.createElement("a");
  stockCardBodyButton.href = "./pages/Корзина.html";
  stockCardBodyButton.innerText = "В корзину";

  stockCardBody.append(stockCardBodyButton);

  return stockCardItem;
}

for (let i = 0; i < 4; i++) {
  stockCardList[0].append(productCard(pro[i], "stock"));
}

// Новинки

let newCardList = document.getElementsByClassName("stock--cards_new");

let proNew = products.filter((el) => el.category == "Dessert");

for (let i = 0; i < 4; i++) {
  newCardList[0].append(productCard(proNew[i], "notStock"));
}

// Покупали раньше

let BoughtCardList = document.getElementsByClassName("stock--cards_Bought");

let proBought = products.filter((el) => el.category == "Dairy");

for (let i = 0; i < 4; i++) {
  BoughtCardList[0].append(productCard(proBought[i], "notStock"));
}

// offer section

let offerSection = document.getElementsByClassName("offer--cards");

for (let el of offerSectionData) {
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
}

// article section

let articleList = document.getElementsByClassName("article--cards");

for (let el of articleData) {
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
}

console.log(articleData);
