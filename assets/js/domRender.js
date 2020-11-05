let productContainer = document.getElementsByClassName("product-container")[0];
let cartTable = document.getElementById("cart-table");
let tableContent = document.getElementById("table-content");
let addToCartBtns;
let totalCartBox = document.getElementById("total-price");
let cartShowLink = document.getElementsByClassName("cart-link-box")[0];
let cartTableContainer = document.getElementsByClassName("cart-item-container")[0]
let closeCart = document.getElementsByClassName("close-cart")[0];
let searchInput = document.getElementById("search");
let categoryEl = document.getElementById("category");

categoryEl.addEventListener("change", e => {
  console.log(e.target.value);
  const productFiltered = filterProoduct(e.target.value);
  showProductItem(productFiltered);
})

// Search Function -- Search on Product By name
searchInput.addEventListener("input", e => {
  let searchProduct = productSearch(e.target.value);
  console.log(productSearch(e.target.value));
  showProductItem(searchProduct);
})

// Show Cart Table On Click
cartShowLink.addEventListener("click", e => {
  e.preventDefault();
  if(!cartTableContainer.classList.contains("block")) {
    cartTableContainer.classList.add("block");
  }
});

// Close Cart Table On Click
closeCart.addEventListener("click", e => {
  cartTableContainer.classList.remove("block");
})

// Render Product Element On DOM
const showProductItem = (products) => {
  productContainer.innerHTML = "";
  products.forEach((item) => {
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
    productItemNameDiv.setAttribute("class", "product-item--name");
    const productItemName = document.createElement("h2");
    productItemName.textContent = item.name;
    productItemNameDiv.appendChild(productItemName);

    const productItemDetailDiv = document.createElement("div");
    productItemDetailDiv.setAttribute("class", "product-item--details");
    const productItemDetail = document.createElement("p");
    productItemDetail.textContent = item.details;
    productItemDetailDiv.appendChild(productItemDetail);

    const productItemPriceDiv = document.createElement("div");
    const productItemPrice = document.createElement("h3");
    productItemPrice.setAttribute("class", "product-item--price");
    productItemPrice.textContent = item.price + "$";
    productItemPriceDiv.appendChild(productItemPrice);

    const productItemBtnDiv = document.createElement("div");
    productItemBtnDiv.setAttribute("class", "product-item-btn");

    const addProductToCartBtn = document.createElement("button");
    addProductToCartBtn.setAttribute("class", "add-to-cart-btn");
    addProductToCartBtn.setAttribute("value", item.id);
    addProductToCartBtn.textContent = "Add To Cart";
    productItemBtnDiv.appendChild(addProductToCartBtn);

    productItemDescDiv.appendChild(productItemNameDiv);
    productItemDescDiv.appendChild(productItemDetailDiv);
    productItemDescDiv.appendChild(productItemPrice);

    productItem.appendChild(productItemHeader);
    productItem.appendChild(productItemDescDiv);
    productItem.appendChild(productItemBtnDiv);

    productContainer.appendChild(productItem);
  });
  addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
  addToCartBtns.forEach((el) => {
    el.addEventListener("click", (e) => {
      const btnValue = e.target.value;
      const product = products.filter(item => item.id === btnValue);
      addToCart(product[0]);
      showCartItem();
    });
  });
};

const showCartItem = () => {
  tableContent.innerHTML = "";
  let cart = JSON.parse(localStorage.getItem("cart"));
  if(cart.length === 0) {
    const noItemDiv = document.createElement("div");
    noItemDiv.textContent = "No Items";
    noItemDiv.setAttribute("style", "margin: 20px auto; width: 100%")
    return tableContent.appendChild(noItemDiv);
  }
  cart.forEach((item) => {
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

    // Delete Secific Item From Cart 
    deleteBtn.addEventListener("click", e => {
      deleteProductFromCart(item);
      e.target.parentElement.parentElement.remove();
      totalPrice();
      showCartItem();
    })

    row.appendChild(rowDataImg);
    row.appendChild(rowDataName);
    row.appendChild(rowDataPrice);
    row.appendChild(rowDataQty);
    row.appendChild(rowDataTotal);
    row.appendChild(rowDataDeleteBtn);

    tableContent.appendChild(row);

    cartTable = document.getElementById("cart-table");
    cartTable.appendChild(tableContent);
  });
  const totalCartPrice = document.createElement("div");
  totalCartPrice.textContent = "Total Price: " + totalPrice() || 0 + "$";
  totalCartBox = document.getElementById("total-price");
  totalCartBox.innerHTML = totalCartPrice.textContent;
};

document.addEventListener("DOMContentLoaded", () => {
  showProductItem(products);
  showCartItem();
});