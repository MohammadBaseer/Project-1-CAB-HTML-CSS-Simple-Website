console.log("hello World", apikey);

function getApi(getAPIFomJson) {
  var pBox = document.getElementById("pBox"); //

  for (let i = 0; i < getAPIFomJson.length; i++) {
    var pContainer = document.createElement("div");
    pContainer.classList.add(
      "col-10",
      "col-md-6",
      "col-lg-3",
      "d-inline-block",
      "border",
      "border-1"
    );
    pContainer.style.padding = "5px 20px";
    pBox.appendChild(pContainer);

    var pImg = document.createElement("img");
    pImg.classList.add("itemImg");
    pImg.src = getAPIFomJson[i].image;
    pContainer.appendChild(pImg);

    var pTitle = document.createElement("p");
    pTitle.classList.add("p-item-title", "pra");
    pTitle.innerText = getAPIFomJson[i].title;
    pContainer.appendChild(pTitle);

    var pCat = document.createElement("p");
    pCat.classList.add("p-item-Cat", "pra");
    pCat.innerText = getAPIFomJson[i].category;
    pContainer.appendChild(pCat);

    var price = document.createElement("p");
    price.classList.add("p-item-price", "pra");
    price.innerText = "£" + getAPIFomJson[i].price;
    pContainer.appendChild(price);

    var btn = document.createElement("input");
    btn.style.padding = "10px";
    btn.setAttribute("type", "submit");
    btn.setAttribute("value", "Details");
    btn.classList.add("btn1");
    btn.innerText = getAPIFomJson[i].category;
    pContainer.appendChild(btn);
  }
}

getApi(apikey);
