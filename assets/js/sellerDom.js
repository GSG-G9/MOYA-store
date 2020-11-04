


const proudectSection = document.createElement("section");
proudectSection.setAttribute("class","product-section");
document.body.appendChild(proudectSection);

const productContainer = document.createElement("div");
productContainer.setAttribute("class" , "container");
proudectSection.appendChild(productContainer);
const addProductBtn = document.createElement("button");
addProductBtn.setAttribute("class" , "add-new-product-btn");
productContainer.appendChild(addProductBtn);
addProductBtnText = document.createTextNode("Add New Product");
addProductBtn.appendChild(addProductBtnText);
const productContainerSection = document.createElement("div");
productContainerSection.setAttribute("class" , "product-container")
productContainer.appendChild(productContainerSection);
const productItem = document.createElement("div");
productItem.setAttribute("class" , "product-item");
productContainerSection.appendChild(productItem);
const productItemHeader = document.createElement("div");
productItemHeader.setAttribute("class" , "product-item--header")
productItem.appendChild(productItemHeader);
const productItemImage = document.createElement("img");
productItemImage.setAttribute("src" , "https://via.placeholder.com/150/955595/808080");
productItemImage.setAttribute("alt" , "product");
productItemHeader.appendChild(productItemImage);


const itemDesc = document.createElement("div");
itemDesc.setAttribute("class" , "product-item--desc");
productItem.appendChild(itemDesc);
const itemName = document.createElement("div");
itemName.setAttribute("class", " product-item--name");
itemNameHeader = document.createElement("h2");
itemName.appendChild(itemNameHeader);
const itemNamerHeaderText = document.createTextNode("product-one");
itemNameHeader.appendChild(itemNamerHeaderText);
itemDesc.appendChild(itemName);

const itemdetails = document.createElement("div");
itemdetails.setAttribute("class" , "product-item--details")
const itemdetailsText = document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit.")
itemDesc.appendChild(itemdetails);


const itemPrice = document.createElement("div");
itemPrice.setAttribute("class" , "product-item--price")
itemPriceHeader = document.createElement("h3");
itemPrice.appendChild(itemPriceHeader);
itemPriceHeaderSpan = document.createElement("span")
itemPriceHeader.appendChild(itemPriceHeaderSpan);
itemPriceSpanText = document.createTextNode("12.99");
itemPriceHeaderSpan.appendChild(itemPriceSpanText);
itemPriceHeader.appendChild(itemPriceHeaderSpan);
const itemPriceheaderText = document.createTextNode("$")
itemPriceHeader.appendChild(itemPriceheaderText);
itemDesc.appendChild(itemPrice);

const productItemBtn = document.createElement("div");
productItemBtn.setAttribute("class" , "product-item-btn-seller");
productItem.appendChild(productItemBtn);
const productItemBtnOne = document.createElement("button");
productItemBtnOne.setAttribute("class" , "edit-btn");
productItemBtn.appendChild(productItemBtnOne);
const productItemBtnOneText =  document.createTextNode("Edit");
productItemBtnOne.appendChild(productItemBtnOneText);

const productItemBtnTwo = document.createElement("button");
productItemBtnTwo.setAttribute("class" , "remove-btn");
productItemBtn.appendChild(productItemBtnTwo);
const productItemBtnTwoText =  document.createTextNode("Remove");
productItemBtnTwo.appendChild(productItemBtnTwoText);






