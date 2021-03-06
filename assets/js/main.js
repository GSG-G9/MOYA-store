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
        category: "clothes",
      },
      {
        id: "p2",
        name: "Shouse",
        imageUrl: "https://via.placeholder.com/150/255595/808080",
        details: "",
        price: 15,
        category: "clothes",
      },
      {
        id: "p3",
        name: "Toy_story",
        imageUrl: "https://via.placeholder.com/150/255595/808080",
        details: "",
        price: 5,
        category: "toy",
      },
      {
        id: "p4",
        name: "Forky",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71s9C50wGkL._AC_SX425_.jpg",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 7.99,
        category: "toy",
      },
      {
        id: "p4",
        name: "Shrek",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgQood3geX38FFVB1PLXulLdRhMuQ1MbWYdg&usqp=CAU",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 6.99,
        category: "toy",
      },
      {
        id: "p4",
        name: "Ball",
        imageUrl: "https://www.sportsdirectoryuk.co.uk/images/contentimages/Web_Feature_handball.jpg",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 6.99,
        category: "sport",
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

if (typeof module !== 'undefined') {
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
