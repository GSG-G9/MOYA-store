const products2 = [
    {
      id: "p1",
      name: "T-shirt",
      imageUrl: "https://via.placeholder.com/150/255595/808080",
      details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      price: 25,
    },
    {
      id: "p2",
      name: "Shouse",
      imageUrl: "https://via.placeholder.com/150/255595/808080",
      details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      price: 15,
    },
    {
      id: "p3",
      name: "Toy",
      imageUrl: "https://via.placeholder.com/150/255595/808080",
      details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      price: 5,
    },
  ];

  let productContainer = document.getElementsByClassName("product-container")[0];

  products2.forEach(item => {
      const productItem = document.createElement("div");
      productItem.setAttribute("class", "product-item");

      const productItemHeader = document.createElement("div");
      productItemHeader.setAttribute("class", "product-item--header");
      const productImage = document.createElement("img");
      productImage.setAttribute("src", item.imageUrl);
      productImage.setAttribute("alt", item.name);
      productItemHeader.appendChild(productImage);

      const productItemDescDiv = document.createElement("div");
      productItemDescDiv.setAttribute("class", "product-item--desc");

      const productItemNameDiv = document.createElement("div");
      productItemNameDiv.setAttribute("class", "product-item--name")
      const productItemName = document.createElement("h2");
      productItemName.textContent = item.name;
      productItemNameDiv.appendChild(productItemName);

      const productItemDetailDiv = document.createElement("div");
      productItemDetailDiv.setAttribute("class", "product-item--details")
      const productItemDetail = document.createElement("p");
      productItemDetail.textContent = item.details;
      productItemDetailDiv.appendChild(productItemDetail);

      const productItemPriceDiv = document.createElement("div");
      const productItemPrice = document.createElement("h3");
      productItemPrice.setAttribute("class", "product-item--price")
      productItemPrice.textContent = item.price + "$";
      productItemPriceDiv.appendChild(productItemPrice);

      const productItemBtnDiv = document.createElement("div");
      productItemBtnDiv.setAttribute("class", "product-item-btn");
      
      const addProductToCartBtn = document.createElement("button");
      addProductToCartBtn.setAttribute("class", "add-to-cart-btn");
      addProductToCartBtn.textContent = "Add To Cart";
      productItemBtnDiv.appendChild(addProductToCartBtn);

      productItemDescDiv.appendChild(productItemNameDiv);
      productItemDescDiv.appendChild(productItemDetailDiv);
      productItemDescDiv.appendChild(productItemPrice);

      productItem.appendChild(productItemHeader);
      productItem.appendChild(productItemDescDiv);
      productItem.appendChild(productItemBtnDiv);

      productContainer.appendChild(productItem)
  })