let{products}=require("./data")

filterByName = (array, name) =>
  array.filter((product) => product.name.includes(name));

filterByPrice = (array, price) =>
  array.filter((product) => product.price == price);

filterByCategory = (array, category) =>
  array.filter((product) => product.category.includes(category));

addProduct = (productDetails) => {
  products = [...products, productDetails];
  return products;
};

removeProduct = (id) => products.filter((product) => product.id !== id);

if (global !== undefined) {
  module.exports = {
    filterByName,
    filterByPrice,
    filterByCategory,
    addProduct,
    removeProduct,
  };
}
