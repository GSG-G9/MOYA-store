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

const addToCart = function (product, myCart) {
  const pId = product.id;
  let newCart = [...myCart];
  for (let index = 0; index < newCart.length; index++) {
    if (newCart[index].product.id === pId) {
      newCart[index].qty += 1;
      newCart[index].total = newCart[index].product.price * newCart[index].qty;
      return newCart;
    }
  }

  newCart.push({ id: "c5", qty: 1, total: product.price, product });
  return newCart;
};

const totalPrice = function (myCart) {
  const newCart = [...myCart];
  let total = 0;
  newCart.forEach((element) => {
    total += element.total;
  });

  newCart.total = total;
  return total;
};

const deleteProductFromCart = (deleteProduct, oldCart) => {
  const newCart = [...oldCart];

  return newCart.filter((item) => {
    if (item.product.id !== deleteProduct.id) {
      console.log(item);
      return item;
    }
  });
};

module.exports = {
  products,
  productSearch,
  filterProoduct,
  addToCart,
  totalPrice,
  productSearchByPrice,
  cart,
  deleteProductFromCart,
};
