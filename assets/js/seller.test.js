const {
  filterByName,
  filterByPrice,
  filterByCategory,
  addProduct,
  removeProduct,
} = require("./sellerLogic");
let { products } = require("./data");

test("test proudest by name", function () {
  expect(filterByName(products, "Toy")).toEqual([
    {
      id: "p3",
      name: "Toy",
      imageUrl: "https://via.placeholder.com/150/255595/808080",
      details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      price: 5,
      category: "cat_3",
    },
  ]);
  expect(filterByName(products, "T-shirt")).toEqual([
    {
      id: "p1",
      name: "T-shirt",
      imageUrl: "https://via.placeholder.com/150/255595/808080",
      details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      price: 25,
      category: "cat_1",
    },
  ]);
});

test("test proudest by price", function () {
  expect(filterByPrice(products, "5")).toEqual([
    {
      id: "p3",
      name: "Toy",
      imageUrl: "https://via.placeholder.com/150/255595/808080",
      details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      price: 5,
      category: "cat_3",
    },
  ]);
});

test("test proudest by category", function () {
  expect(filterByCategory(products, "cat_2")).toEqual([
    {
      id: "p2",
      name: "Shouse",
      imageUrl: "https://via.placeholder.com/150/255595/808080",
      details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      price: 15,
      category: "cat_2",
    },
  ]);
  expect(filterByCategory(products, "cat_1")).toEqual([
    {
      id: "p1",
      name: "T-shirt",
      imageUrl: "https://via.placeholder.com/150/255595/808080",
      details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      price: 25,
      category: "cat_1",
    },
  ]);
});

test("test proudest addProduct", function () {
  expect(
    addProduct({
      id: "p",
      name: "Suse",
      imageUrl: "https://via.placeholder.com/150/255595/808080",
      details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      price: 12,
      category: "cat_9",
    })
  ).toEqual([...products,
    {
      id: "p",
      name: "Suse",
      imageUrl: "https://via.placeholder.com/150/255595/808080",
      details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      price: 12,
      category: "cat_9",
    },
  ]);
});

test("test removeProduct",function () {
  expect(removeProduct("p3")).toEqual([
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
      id: "p",
      name: "Suse",
      imageUrl: "https://via.placeholder.com/150/255595/808080",
      details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      price: 12,
      category: "cat_9",
    },
  ]);
});
console.log(products)