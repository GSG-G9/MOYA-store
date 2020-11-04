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


const cart = [
  {
    id: "c1",
    product: {
      id: "p3",
      name: "Toy",
      imageUrl: "https://via.placeholder.com/150/255595/808080",
      details: "",
      price: 5,
      category: "cat_2",
    },
    qty: 2,
    total: 10,
  },
  {
    id: "c2",
    product: {
      id: "p1",
      name: "T-shirt",
      imageUrl: "https://via.placeholder.com/150/255595/808080",
      details: "",
      price: 25,
      category: "cat_1",
    },
    qty: 2,
    total: 50,
  },
  {
    id: "c3",
    product: {
      id: "p2",
      name: "Shouse",
      imageUrl: "https://via.placeholder.com/150/255595/808080",
      details: "",
      price: 15,
      category: "cat_1",
    },
    qty: 3,
    total: 45,
  }
];

cart.forEach(item => {
  const row = document.createElement("tr");

  const rowDataImg = document.createElement("td");
  const img = document.createElement("img");
  img.setAttribute("src", item.product.imageUrl);
  img.setAttribute("alt", item.product.name);
  img.setAttribute("width", "50px");
  rowDataImg.appendChild(img);

  const rowDataName = document.createElement("td");
  rowDataName.textContent = item.product.name;

  const rowDataPrice = document.createElement("td");
  rowDataPrice.textContent = item.product.price;

  const rowDataQty = document.createElement("td");
  rowDataQty.textContent = item.qty;

  const rowDataTotal = document.createElement("td");
  rowDataTotal.textContent = item.total;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "delete-fron-cart");
  deleteBtn.textContent = "Delete";
  const rowDataDeleteBtn = document.createElement("td");
  rowDataDeleteBtn.appendChild(deleteBtn);

  row.appendChild(rowDataImg);
  row.appendChild(rowDataName);
  row.appendChild(rowDataPrice);
  row.appendChild(rowDataQty);
  row.appendChild(rowDataTotal);
  row.appendChild(rowDataDeleteBtn)

  const cartTable = document.getElementById("cart-table");
  cartTable.insertAdjacentElement("beforeend", row);
})

  const totalCartPrice = document.createElement("div");
  totalCartPrice.textContent = "Total Price: 200$";
  const totalCartBox = document.getElementById("total-price");
  totalCartBox.appendChild(totalCartPrice);

  `
  <tr>
  <td>
    <img
      src="https://via.placeholder.com/50/255595/808080"
      alt="product"
    />
  </td>
  <td>Product_1</td>
  <td>12.99$</td>
  <td>3</td>
  <td>50$</td>
  <td><button class="delete-fron-cart">Delete</button></td>
</tr>
  `