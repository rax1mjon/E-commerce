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

      setAllProducts(SearchData);
      localStorage.setItem("searchData", JSON.stringify(SearchData));
    });
  });
});

let FirstLast = document.querySelectorAll(".FirstLast");

FirstLast[1].style.opacity = "1";
FirstLast[2].style.opacity = "1";

FirstLast[0].addEventListener("click", () => {
  activePage = 1;
  setAllProducts();
});

FirstLast[1].addEventListener("click", function () {
  if (activePage != 1) {
    activePage = activePage - 1;
    console.log(activePage);
    this.style.opacity = "1";
    setAllProducts();
  } else {
    this.style.opacity = "0";
  }
});

FirstLast[2].addEventListener("click", function () {
  if (activePage != pageCount) {
    activePage = activePage + 1;
    console.log(activePage);
    this.style.opacity = "1";
    setAllProducts();
  } else {
    this.style.opacity = "0";
  }
});

FirstLast[3].addEventListener("click", () => {
  activePage = pageCount;
  setAllProducts();
});
