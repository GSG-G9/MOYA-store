// const products = [
//   {
//     id: "p1",
//     name: "T-shirt",
//     imageUrl: "https://via.placeholder.com/150/255595/808080",
//     details: "",
//     price: 25,
//     category: "cat_1",
//   },
//   {
//     id: "p2",
//     name: "Shouse",
//     imageUrl: "https://via.placeholder.com/150/255595/808080",
//     details: "",
//     price: 15,
//     category: "cat_1",
//   },
//   {
//     id: "p3",
//     name: "Toy",
//     imageUrl: "https://via.placeholder.com/150/255595/808080",
//     details: "",
//     price: 5,
//     category: "cat_2",
//   },
// ];

// const cart = [
//   {
//     id: "c1",
//     product: {
//       id: "p3",
//       name: "Toy",
//       imageUrl: "https://via.placeholder.com/150/255595/808080",
//       details: "",
//       price: 5,
//       category: "cat_2",
//     },
//     qty: 2,
//     total: 10,
//   },
//   {
//     id: "c2",
//     product: {
//       id: "p1",
//       name: "T-shirt",
//       imageUrl: "https://via.placeholder.com/150/255595/808080",
//       details: "",
//       price: 25,
//       category: "cat_1",
//     },
//     qty: 2,
//     total: 50,
//   },
//   {
//     id: "c3",
//     product: {
//       id: "p2",
//       name: "Shouse",
//       imageUrl: "https://via.placeholder.com/150/255595/808080",
//       details: "",
//       price: 15,
//       category: "cat_1",
//     },
//     qty: 3,
//     total: 45,
//   },
// ];

if (!JSON.parse(localStorage.getItem("products"))) {
  localStorage.setItem(
    "products",
    JSON.stringify([
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
    ])
  );
}

const products = JSON.parse(localStorage.getItem("products")) || [];

if (!JSON.parse(localStorage.getItem("cart"))) {
  localStorage.setItem("cart", JSON.stringify([]));
}

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const productSearch = function (text) {
  const textSearch = text.trim();
  const productsArr = JSON.parse(localStorage.getItem("products"));
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
  const text = filteredBy.trim();
  let productsArr = JSON.parse(localStorage.getItem("products"));
  return productsArr.filter((item) => {
    return item.category.includes(text);
  });
};

const addToCart = function (product) {
  const pId = product.id;
  let newCart = JSON.parse(localStorage.getItem("cart"));
  for (let index = 0; index < newCart.length; index++) {
    if (newCart[index].product.id === pId) {
      ++newCart[index].qty;
      newCart[index].total = newCart[index].product.price * newCart[index].qty;
      localStorage.setItem("cart", JSON.stringify([...newCart]));
      return;
    }
  }
  newCart.push({
    id: "c-" + Math.floor(Math.random() * 1000) + new Date().getTime().toString(16),
    qty: 1,
    total: product.price,
    product,
  });
  localStorage.setItem("cart", JSON.stringify(newCart));
};

const totalPrice = function () {
  const newCart = JSON.parse(localStorage.getItem("cart"));
  let total = 0;
  if (newCart.length === 0) return total;
  newCart.forEach((element) => {
    total += element.total;
  });

  newCart.total = total;
  return newCart.total;
};

const deleteProductFromCart = (productToDelete) => {
  const newCart = JSON.parse(localStorage.getItem("cart"));
  totalPrice(newCart);
  const arrFiltered = newCart.filter((item) => {
    if (item.product.id !== productToDelete.product.id) {
      return item;
    }
  });
  localStorage.setItem("cart", JSON.stringify(arrFiltered));
};

// const cartToTest = [
//   {
//     id: "c-208",
//     product: {
//       category: "cat_2",
//       details: "",
//       id: "p3",
//       imageUrl: "https://via.placeholder.com/150/255595/808080",
//       name: "Toy",
//       price: 5,
//     },
//     qty: 1,
//     total: 5,
//   },
//   {
//     id: "c-413",
//     product: {
//       id: "p2",
//       name: "Shouse",
//       imageUrl: "https://via.placeholder.com/150/255595/808080",
//       details: "",
//       category: "cat_1",
//       price: 15,
//     },
//     qty: 1,
//     total: 15,
//   },
//   {
//     id: "c-85",
//     product: {
//       id: "p1",
//       name: "T-shirt",
//       imageUrl: "https://via.placeholder.com/150/255595/808080",
//       details: "",
//       category: "cat_1",
//       price: 25,
//     },
//     qty: 1,
//     total: 25,
//   },
// ];

if (global !== undefined) {
  module.exports = {
    products,
    productSearch,
    filterProoduct,
    addToCart,
    totalPrice,
    productSearchByPrice,
    deleteProductFromCart
  };
}
