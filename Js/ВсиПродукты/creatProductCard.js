setAllProducts();

form.forEach(() => {
  let input = document.querySelectorAll('[placeholder="Найти товар"]');

  input.forEach((inputEl) => {
    inputEl.addEventListener("input", function (event) {
      let searchText = event.target.value.toLowerCase().trim();
      allProducts = [];
      products.map((el) => {
        let categoryName = el.name.toLowerCase().trim();
        if (categoryName.includes(searchText)) {
          if (!allProducts.includes(el)) allProducts.push(el);
          let allProductList = document.querySelector(".allProduct--list");
          allProductList.innerHTML = "";
          allProducts.map((el) => {
            let productCardElement = productCard(el, "stock");
            allProductList.append(productCardElement);
          });
        }
0      });
    });
  });
});
