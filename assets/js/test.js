const {
  productSearch,
  filterProoduct,
  addToCart,
  totalPrice,
  products,
  productSearchByPrice,
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
        category: "clothes",
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
        category: "clothes",
      },
    ]);
  });

  test("Expect [{}] when select category-1", () => {
    expect(filterProoduct("clothes")).toEqual([
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
    ]);
  });

  test("have all the same properties", () => {
    expect(
      addToCart({
        id: "p1",
        name: "T-shirt",
        imageUrl: "https://via.placeholder.com/150/255595/808080",
        details: "",
        price: 25,
        category: "clothes",
      })
    ).toEqual([
      {
        id: "c1",
        product: {
          id: "p3",
          name: "Toy",
          imageUrl: "https://via.placeholder.com/150/255595/808080",
          details: "",
          price: 5,
          category: "toy",
        },
        qty: 1,
        total: 5,
      },
      {
        id: "c2",
        product: {
          id: "p1",
          name: "T-shirt",
          imageUrl: "https://via.placeholder.com/150/255595/808080",
          details: "",
          price: 25,
          category: "clothes",
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
          category: "clothes",
        },
        qty: 1,
        total: 15,
      },
    ]);
  });

  test("Expect 75", () => {
    expect(totalPrice()).toEqual(75);
  });

  test("Expect [{}] Delete Item From Cart", () => {
    expect(
      deleteProductFromCart({
        id: "p1",
        name: "T-shirt",
        imageUrl: "https://via.placeholder.com/150/255595/808080",
        details: "",
        price: 25,
        category: "clothes",
      })
    ).toEqual([
      {
        id: "c1",
        product: {
          id: "p3",
          name: "Toy",
          imageUrl: "https://via.placeholder.com/150/255595/808080",
          details: "",
          price: 5,
          category: "toy",
        },
        qty: 1,
        total: 5,
      },
      {
        id: "c3",
        product: {
          id: "p2",
          name: "Shouse",
          imageUrl: "https://via.placeholder.com/150/255595/808080",
          details: "",
          price: 15,
          category: "clothes",
        },
        qty: 1,
        total: 15,
      },
    ]);
  });
});
