const products = [
    {
      id: "p1",
      name: "T-shirt",
      imageUrl: "https://via.placeholder.com/150/255595/808080",
      details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      price: 25,
      category: "cat_1",
    },
    {
      id: "p2",
      name: "Shouse",
      imageUrl: "https://via.placeholder.com/150/255595/808080",
      details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      price: 15,
      category: "cat_2",
    },
    {
      id: "p3",
      name: "Toy",
      imageUrl: "https://via.placeholder.com/150/255595/808080",
      details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      price: 5,
      category: "cat_3",
    },
  ];
  
  const proudectSection = document.createElement("section");
  proudectSection.setAttribute("class", "product-section");
  document.body.appendChild(proudectSection);
  
  const productContainer = document.createElement("div");
  productContainer.setAttribute("class", "container");
  proudectSection.appendChild(productContainer);
  
  const addProductBtn = document.createElement("button");
  addProductBtn.setAttribute("class", "add-new-product-btn");
  productContainer.appendChild(addProductBtn);
  addProductBtnText = document.createTextNode("Add New Product");
  addProductBtn.appendChild(addProductBtnText);
  
  const productContainerSection = document.createElement("div");
  productContainerSection.setAttribute("class", "product-container");
  productContainer.appendChild(productContainerSection);
  
  // start adding product...
  products.forEach((item) => {
  
      const productItem = document.createElement("div");
      productItem.setAttribute("class", "product-item");
      productContainerSection.appendChild(productItem);
      
      const productItemHeader = document.createElement("div");
      productItemHeader.setAttribute("class", "product-item--header");
      productItem.appendChild(productItemHeader);
      
      const productItemImage = document.createElement("img");
      productItemImage.setAttribute("src",item.imageUrl );
      productItemImage.setAttribute("alt", "product");
      productItemHeader.appendChild(productItemImage);
      
      const itemDesc = document.createElement("div");
      itemDesc.setAttribute("class", "product-item--desc");
      productItem.appendChild(itemDesc);
      
      const itemName = document.createElement("div");
      itemName.setAttribute("class", " product-item--name");
      itemNameHeader = document.createElement("h2");
      itemName.appendChild(itemNameHeader);
      
      const itemNamerHeaderText = document.createTextNode(item.name);
      itemNameHeader.appendChild(itemNamerHeaderText);
      itemDesc.appendChild(itemName);
      
      const itemdetails = document.createElement("div");
      itemdetails.setAttribute("class", "product-item--details");
      const itemdetailsText = document.createTextNode(item.details);
      itemDesc.appendChild(itemdetails);
      
      const itemPrice = document.createElement("div");
      itemPrice.setAttribute("class", "product-item--price");
      itemPriceHeader = document.createElement("h3");
      itemPrice.appendChild(itemPriceHeader);
      itemPriceHeaderSpan = document.createElement("span");
      itemPriceHeader.appendChild(itemPriceHeaderSpan);
      itemPriceSpanText = document.createTextNode(item.price);
      itemPriceHeaderSpan.appendChild(itemPriceSpanText);
      itemPriceHeader.appendChild(itemPriceHeaderSpan);
      const itemPriceheaderText = document.createTextNode("$");
      itemPriceHeader.appendChild(itemPriceheaderText);
      itemDesc.appendChild(itemPrice);
      
      const productItemBtn = document.createElement("div");
      productItemBtn.setAttribute("class", "product-item-btn-seller");
      productItem.appendChild(productItemBtn);
      const productItemBtnOne = document.createElement("button");
      productItemBtnOne.setAttribute("class", "edit-btn");
      productItemBtn.appendChild(productItemBtnOne);
      const productItemBtnOneText = document.createTextNode("Edit");
      productItemBtnOne.appendChild(productItemBtnOneText);
      
      const productItemBtnTwo = document.createElement("button");
      productItemBtnTwo.setAttribute("class", "remove-btn");
      productItemBtn.appendChild(productItemBtnTwo);
      const productItemBtnTwoText = document.createTextNode("Remove");
      productItemBtnTwo.appendChild(productItemBtnTwoText);
  });
  
  