const products = [
  {
    id: "p1",
    name: "T-shirt",
    imageUrl: "https://via.placeholder.com/150/255595/808080",
    details: "",
    price: 25,
    category: "cat_1",
  },
  {
    id: "p2",
    name: "Shouse",
    imageUrl: "https://via.placeholder.com/150/255595/808080",
    details: "",
    price: 15,
    category: "cat_1",
  },
  {
    id: "p3",
    name: "Toy",
    imageUrl: "https://via.placeholder.com/150/255595/808080",
    details: "",
    price: 5,
    category: "cat_2",
  },
];

const productSearch = function (text, products) {
  const textSearch = text.trim();
  const productsArr = [...products];
  return productsArr.filter((item) => {
    return item.name.toLowerCase().includes(textSearch.toLowerCase());
  });
};

const productSearchByPrice = function (text, products) {
  const textSearch = text;
  const productsArr = [...products];
  return productsArr.filter((item) => {
    return item.price === textSearch;
  });
};

const filterProoduct = function (filteredBy) {
  const text = filteredBy;
  return products.filter((item) => {
    return item.category === text;
  });
};

const addToCart = function (product, cart) {
  return [];
};

const totalPrice = function (cart) {
  return 0;
};

// totalPrice(cart);

module.exports = {
  products,
  productSearch,
  filterProoduct,
  addToCart,
  totalPrice,
  productSearchByPrice,
  // cart,
};
