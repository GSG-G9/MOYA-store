const { array } = require("yargs");
const products = [
    {
      "id": "1",
      "Name": "Name 1",
      "Price": 10,
      "image": "./url",
      "date_added": 1496757350
    },
    {
      "id": "2",
      "Name": "Name 2",
      "Price": 40,
      "image": "./url",
      "date_added": 1496757290
    },
    {
      "id": "10",
      "Name": "Name 10",
      "Price": 40,
      "image": "./url",
      "date_added": 1496757290
    }
  ]
const{filterByName}=require("./functions")
test('Refactor our addNumberArray function so it is pure.', function () {
    expect(filterByName(products, "Name 2")).toEqual([{ "id": "2",
    "Name": "Name 2",
    "Price": 40,
    "image": "./url",
    "date_added": 1496757290}]);
  
  })
  test('Refactor our addNumberArray function so it is pure.', function () {
    expect(filterByName(products,"name")).toEqual(products);
  
  })
  test('Refactor our addNumberArray function so it is pure.', function () {
    expect(filterByName(products,"n")).toEqual([]);
  
  })