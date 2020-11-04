const {
  productSearch,
  filterProoduct,
  addToCart,
  totalPrice,
  products,
  productSearchByPrice,
  cart,
  deleteProductFromCart,
} = require("./main.js");

describe("Test Buyer functions", () => {
  test("Expect [{}]", () => {
    expect(productSearch("t-shi", products)).toEqual([
      {
        id: "p1",
        name: "T-shirt",
        imageUrl: "https://via.placeholder.com/150/255595/808080",
        details: "",
        price: 25,
        category: "cat_1",
      },
    ]);
  });

  test("have all the same properties", () => {
    expect(productSearchByPrice(25, products)).toEqual([
      {
        id: "p1",
        name: "T-shirt",
        imageUrl: "https://via.placeholder.com/150/255595/808080",
        details: "",
        price: 25,
        category: "cat_1",
      },
    ]);
  });

  test("Expect [{}] when select category-1", () => {
    expect(filterProoduct("cat_1")).toEqual([
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
    ]);
  });

  test("have all the same properties", () => {
    expect(
      addToCart(
        {
          id: "p1",
          name: "T-shirt",
          imageUrl: "https://via.placeholder.com/150/255595/808080",
          details: "",
          price: 25,
          category: "cat_1",
        },
        cart
      )
    ).toEqual([
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
        qty: 3,
        total: 75,
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
    ]);
  });

  test("Expect 105", () => {
    expect(totalPrice(cart)).toEqual(130);
  });

  test("Expect [{}] Delete Item From Cart", () => {
    expect(deleteProductFromCart({
          id: "p1",
          name: "T-shirt",
          imageUrl: "https://via.placeholder.com/150/255595/808080",
          details: "",
          price: 25,
          category: "cat_1",
        },
        cart
      )
    ).toEqual([
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
    ]);
  });
});
