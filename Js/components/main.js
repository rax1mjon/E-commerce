function productCard(pro, stock) {
  let el = pro;

  let stockCardItem = document.createElement("li");
  stockCardItem.className = "stock--card";

  //  like click

  let check = likeProducts.find((el) => el.id == pro.id);

  let like = ` 
  <span class="like ${check ? "active" : ""}" onclick="addToLike(${el.id})">
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
  </span>
  `;

  let likeElement = document.createElement("div");
  likeElement.innerHTML = like;

  // image box

  let stockCardImageBox = document.createElement("div");
  stockCardImageBox.className = "stock--card_img";

  let stockCardImageLink = document.createElement("a");
  stockCardImageLink.href = "../pages/Товар.html";

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
    stockCardBodyStart.src = `../images/home/star.svg`;
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

  let checkCart = CartProducts.find((el) => el.id == pro.id);

  let stockCardBodyButton = document.createElement("button");
  stockCardBodyButton.className = `stock--card__button ${
    checkCart ? "active" : ""
  }`;
  stockCardBodyButton.onclick = () => addToCart(el.id);
  stockCardBodyButton.innerText = "В корзину";

  stockCardBody.append(stockCardBodyButton);

  return stockCardItem;
}

function addHomeCards() {
  let newCardList = document?.getElementsByClassName("stock--cards_new");
  let BoughtCardList = document?.getElementsByClassName("stock--cards_Bought");
  let stockCardList = document?.getElementsByClassName("stock--cards");

  if (newCardList[0] && BoughtCardList[0] && stockCardList[0]) {
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

    let proBought = products
      .toSorted((a, b) => b.rating - a.rating)
      .slice(0, 4);

    BoughtCardList[0].innerHTML = "";

    proBought.map((el) => {
      BoughtCardList[0]?.append(productCard(el, "notStock"));
    });
  }
}

let likeProducts = JSON.parse(localStorage.getItem("likeProducts")) || [];

function addToLike(id) {
  let likeCount = document.querySelectorAll(".header--like__count");

  likeCount.forEach((count) => (count.textContent = likeProducts.length));

  products.map((el) => {
    if (el.id === id) {
      let likeProduct = el;
      let likeProductId = likeProducts.find((el) => el.id === likeProduct.id);
      if (!likeProductId) {
        likeProducts.push(likeProduct);
        likeCount.forEach((count) => (count.textContent = likeProducts.length));
      } else {
        likeProducts = likeProducts.filter((el) => el.id !== likeProduct.id);
        likeCount.forEach((count) => (count.textContent = likeProducts.length));
      }
    }
    localStorage.setItem("likeProducts", JSON.stringify(likeProducts));
  });
}
addToLike();

let CartProducts = JSON.parse(localStorage.getItem("CartProducts")) || [];

function addToCart(id) {
  let cartCount = document.querySelectorAll(".header--cart__count");
  cartCount.forEach((count) => (count.textContent = CartProducts.length));

  products.map((product) => {
    if (product.id === id) {
      let check = CartProducts.find((el) => el.id === product.id);

      if (!check) {
        product.quantity = 1;
        CartProducts.push(product);
        cartCount.forEach((count) => (count.textContent = CartProducts.length));
      } else {
        check.quantity++;
        cartCount.forEach((count) => (count.textContent = CartProducts.length));
      }
    }

    localStorage.setItem("CartProducts", JSON.stringify(CartProducts));
  });
  addHomeCards();
}

addToCart();

let allProducts = products;

function clickSearch(idName = idName) {
  let allItems = document.querySelector(".searchActive");
  allItems?.classList.remove("searchActive");

  window.location.href = `../../pages/ВсиПродукты.html`;
  let active = document.getElementById(`${idName}`);
  active?.classList.add("searchActive");
}

// add category menu hamburger

let categoryListMenu = document.querySelector(".category--menus");
let hamburger = document.querySelectorAll(`[alt="Каталог "]`);

hamburger.forEach((item) => {
  item.addEventListener("click", () => {
    categoryListMenu.classList.toggle("active");
  });
  item.addEventListener("dblclick", () => {
    window.location.href = "../pages/Категории.html";
  });
});

// creat id name

function CreatIdName(el) {
  let nameSplit = el.name.split("");
  let idName = "";

  for (let el of nameSplit) {
    if (el === " " || el === ",") break;
    idName += el;
  }
  return idName;
}

// create category menu

categories.map((el) => {
  let idName = CreatIdName(el);

  let categoryListMenuItem = document.createElement("li");
  categoryListMenuItem.className = "category--menu";

  let categoryListMenuItemLink = document.createElement("a");
  categoryListMenuItemLink.href = `../../pages/Категории.html#${idName}`;
  categoryListMenuItemLink.innerText = el.name;

  categoryListMenuItem.append(categoryListMenuItemLink);
  categoryListMenu.append(categoryListMenuItem);
});

// create search menu

let form = document.querySelectorAll(".header form");

form.forEach((formEl) => {
  let formSearchList = document.createElement("ul");

  let input = document.querySelectorAll('[placeholder="Найти товар"]');
  let CountSpan = document.createElement("span");

  input.forEach((inputEl) => {
    inputEl.addEventListener("input", function (event) {
      let searchText = event.target.value.toLowerCase().trim();
      formSearchList.innerHTML = "";
      allProducts = [];
      products.map((el) => {
        let idName = CreatIdName(el);
        let categoryName = el.name.toLowerCase().trim();
        if (categoryName.includes(searchText)) {
          formSearchList.innerHTML += `
            <li onclick="clickSearch('${idName}')">
              <img src="${el.images[0]}" alt="no img?">
              <a href="../../pages/ВсиПродукты.html">${el.name}</a>
            </li>`;
          if (!allProducts.includes(el)) allProducts.push(el);
        }
      });

      CountSpan.innerText = formSearchList.children.length;

      formEl.append(CountSpan);

      formEl.append(formSearchList);
    });
    inputEl.addEventListener("blur", function () {
      setTimeout(() => {
        formSearchList.style.height = "0px";
        formSearchList.style.padding = "0px 10px";
      }, 250);
    });

    inputEl.addEventListener("focus", function () {
      formSearchList.style.height = "auto";
      formSearchList.style.padding = "10px";
    });
  });
});
