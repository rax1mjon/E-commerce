function setCartProducts(data = CartProducts) {
  let list = document.querySelector(".cart--list");
  list.innerHTML = "";
  let html = "";
  data.forEach((el) => {
    let productCardElement = CreateCartCard(el);
    html += productCardElement;
  });
  list.innerHTML = html;
}
setCartProducts();

function CreateCartCard(el) {
  let product = el;

  let discountPrice = product.price - (product.price * product.discount) / 100;

  let isDiscount = Boolean(product.discount);

  return isDiscount
    ? `
   <li class="cart--list__card">
      <div class="cart--card__head">
        <div class="cart--card__headImg"><img src="${
          product.images[0]
        }" alt="no img?"></div>
        <div class="cart--card__headBody">
          <h3>${product.name}</h3>
          <div class="cart--card__headBodyBox">
            <div class="cart--card__headBodyPrice">
              <div><span>${discountPrice} ₽</span><span>С картой</span></div>
              <div><span>${product.price} ₽</span><span>Обычная</span></div>
            </div>
            <p>за шт.</p>
            <span class="discount">${product.discount}%</span>
          </div>
        </div>
      </div>
      <div class="cart--card__body">
        <div class="cart--card__bodyCount"><button onclick="addQuantityValue(${
          product.id
        } , 'delate')">-</button><span>${
        product.quantity
      }</span><button onclick="addQuantityValue(${
        product.id
      } , 'add')">+</button></div>
        <div class="cart--card__bodyAllPrice"><span>${(
          discountPrice * product.quantity
        ).toFixed(2)} ₽</span><span><del>${(
        product.price * product.quantity
      ).toFixed(2)} ₽</del></span></div>
      </div>
    </li>
    `
    : ` <li class="cart--list__card">
    <div class="cart--card__head">
      <div class="cart--card__headImg"><img src="${
        product.images[0]
      }" alt="no img?"></div>
      <div class="cart--card__headBody">
        <h3>${product.name}</h3>
        <div class="cart--card__headBodyBox">
          <div class="cart--card__headBodyPrice">
            <div><span>${product.price} ₽</span></div>

          </div>
          <p>за шт.</p>
        </div>
      </div>
    </div>
    <div class="cart--card__body">
        <div class="cart--card__bodyCount"><button onclick="addQuantityValue(${
          product.id
        } , 'delate')">-</button><span>${
        product.quantity
      }</span><button onclick="addQuantityValue(${
        product.id
      } , 'add')">+</button></div>
        <div class="cart--card__bodyAllPrice"><span>${(
          discountPrice * product.quantity
        ).toFixed(2)} ₽</span><span><del>${(
        product.price * product.quantity
      ).toFixed(2)} ₽</del></span></div>
      </div>
  </li>`;
}

function setCartCount() {
  let cartCountTitle = document.querySelector(".cart--wrapper h2 span");
  let AllCartsCountInTotalBox = document.querySelector(
    ".cart--totalBox__eachCosts div div span"
  );
  let cartCount = document.querySelectorAll(".header--cart__count");
  cartCount.forEach((count) => (count.textContent = CartProducts.length));

  cartCountTitle.innerText = CartProducts.length;
  AllCartsCountInTotalBox.innerText = CartProducts.length;
}

setCartCount();

function addQuantityValue(id, type) {
  let product = CartProducts.find((el) => el.id === id);
  if (type === "add") {
    product.quantity++;
  } else if (type === "delate" && product.quantity != 1) {
    product.quantity--;
  } else {
    let isDelete = confirm("Do you want to fly?");
    if (isDelete) {
      CartProducts = CartProducts.filter((el) => el.id != id);
    }
  }

  setAllTotalPrice();
  setCartCount();
  localStorage.setItem("CartProducts", JSON.stringify(CartProducts));
  setCartProducts();
}

// ******************* Delete products from cart  *********************

let deleteCardToggle = document.querySelector(
  ".cart--listBox__head div :first-child"
);

deleteCardToggle.addEventListener("click", () => {
  if (confirm("Do you want to fly?")) {
    CartProducts.shift();
    setCartCount();
    setAllTotalPrice();
    localStorage.setItem("CartProducts", JSON.stringify(CartProducts));
    setCartProducts();
  }
});

// ******************* ^ Delete products from cart ^  *********************

function setAllTotalPrice() {
  let originalTotalPrice = document.querySelectorAll(
    ".cart--totalBox__eachCosts div span "
  )[1];

  let discountPrice = 0;
  let originalPrice = 0;
  CartProducts.forEach((el) => {
    let product = el;

    originalPrice += product.price * product.quantity;

    let discountedPrice =
      product.price - product.price * (product.discount / 100);
    let totalDiscountedPrice = discountedPrice * product.quantity;

    discountPrice += totalDiscountedPrice;
  });
  //  ******************* Set original total price  *********************

  originalTotalPrice.innerText = originalPrice + " ₽";

  //  ******************* Set discount total price  *********************
  let discountTotalPrice = document.querySelectorAll(
    ".cart--totalBox__eachCosts div span "
  )[3];

  discountTotalPrice.innerText =
    "- " + (originalPrice - discountPrice).toFixed(2) + " ₽";

  //  ******************* Set total price  *********************

  let totalPrice = document.querySelector(
    ".cart--totalBox__allCosts div span:nth-child(2)"
  );

  totalPrice.innerText = discountPrice.toFixed(2) + " ₽";
}
setAllTotalPrice();

let cartButton = document.querySelector(".cart-btn");

cartButton.addEventListener("click", () => {
  alert("sizning buyurtmangiz qabul qilindi");
});
