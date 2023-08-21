import products from "./products.dal.js";

const getProducts = async () => {
  const productsData = await products.getProducts();
  return productsData;
};
const addProducts = async (data) => {
  const productsData = await products.getProducts();
  productsData.push(data);
  return productsData;
};
const getProductsById = async (id) => {
  const productsData = await products.getProducts();
  const userById = productsData.find((user) => user.id == id);
  return userById;
};
const patchProductsById = async (id) => {
  const productsData = await products.getProducts();
  const patchUserById = await productsData.find((user) => user.id == id);
  return patchUserById;
};
const deleteProductsById = async (id) => {
  console.log(id);
  const productsData = await products.getProducts();
  for (let i = 0; i < productsData.length; i++) {
    if (productsData[i].id == id) {
      productsData.splice(i, 1);
    }
  }
  return productsData;
};
const productsIncQuantityById = async (id) => {
  const productsData = await products.getProducts();
  for (let i = 0; i < productsData.length; i++) {
    if (productsData[i].id == id) {
      productsData[i].quantity++;
    }
  }
  return productsData;
};
const productsInsertQuantityById = async (id) => {
  const productsData = await products.getProducts();
  for (let i = 0; i < productsData.length; i++) {
    if (productsData[i].id == id) {
      if (productsData[i].quantity > 0) {
        productsData[i].quantity--;
      }
    }
  }
  return productsData;
};



export default {
  getProducts,
  addProducts,
  getProductsById,
  patchProductsById,
  deleteProductsById,
  productsIncQuantityById,
  productsInsertQuantityById,
};
