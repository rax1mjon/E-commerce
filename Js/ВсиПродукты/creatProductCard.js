setAllProducts();

// ************** search **************

form.forEach(() => {
  let input = document.querySelectorAll('[placeholder="Найти товар"]');

  input.forEach((inputEl) => {
    inputEl.addEventListener("input", function (event) {
      let searchText = event.target.value.toLowerCase().trim();
      SearchData = [];
      products.map((el) => {
        let categoryName = el.name.toLowerCase().trim();
        if (categoryName.includes(searchText)) {
          if (!SearchData.includes(el)) SearchData.push(el);
          let allProductList = document.querySelector(".allProduct--list");
          allProductList.innerHTML = "";
          SearchData.map((el) => {
            let productCardElement = productCard(el, "stock");
            allProductList.append(productCardElement);
          });
        }
      });

      setAllProducts();
      localStorage.setItem("searchData", JSON.stringify(SearchData));
    });
  });
});
