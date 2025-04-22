let categoryList = document.querySelector(".category--list");

categories.map((el) => {
  let nameSplit = el.name.split("");
  let idName = "";

  for (let el of nameSplit) {
    if (el === " " || el === ",") break;
    idName += el;
  }

  let categoryListItem = document.createElement("li");
  categoryListItem.className = "category--list__item";
  categoryListItem.id = idName;

  let categoryListItemImage = document.createElement("img");
  categoryListItemImage.src = el.image;
  categoryListItemImage.alt = el.name;

  let categoryListItemTitle = document.createElement("h4");
  categoryListItemTitle.innerText = el.name;

  categoryListItem.append(categoryListItemImage, categoryListItemTitle);
  categoryList.append(categoryListItem);
});
