let list = document.querySelector(".cart--list");
function setCartProducts(data = CartProducts) {
  list.innerHTML = "";
  data.map((el) => {
    let productCardElement = CreateCartCard(el);
    list.innerHTML += productCardElement;
  });
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
        ).toFixed(2)} ₽</span><span><dproduct>${(
        product.price * product.quantity
      ).toFixed(2)} ₽</dproduct></span></div>
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
        ).toFixed(2)} ₽</span><span><dproduct>${(
        product.price * product.quantity
      ).toFixed(2)} ₽</dproduct></span></div>
      </div>
  </li>`;
}

let cartCount = document.querySelector(".cart--wrapper h2 span");

function addQuantityValue(id, type) {
  let product = CartProducts.find((el) => el.id === id);
  if (type === "add") {
    product.quantity++;
  } else if (type === "delate") {
    product.quantity--;
    if (product.quantity <= 0) {
      CartProducts = CartProducts.filter((el) => el.id != id);
    }
  }
  cartCount.innerText = CartProducts.length;
  localStorage.setItem("CartProducts", JSON.stringify(CartProducts));
  setCartProducts();
}

let delateCardToggle = document.querySelector(
  ".cart--listBox__head div :first-child"
);

delateCardToggle.addEventListener("click", () => {
  
})