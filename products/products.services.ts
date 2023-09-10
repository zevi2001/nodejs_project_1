import products from "./products.dal.ts";

const getProducts = async (): Promise<any[]> => {
  const productsData = await products.getProducts();
  return productsData;
};

const addProducts = async (data: any): Promise<any[]> => {
  const productsData = await products.getProducts();
  productsData.push(data);
  return productsData;
};

const getProductsById = async (id: number): Promise<any | undefined> => {
  const productsData = await products.getProducts();
  const userById = productsData.find((user:any) => user.id == id);
  return userById;
};

const patchProductsById = async (id: number): Promise<any | undefined> => {
  const productsData = await products.getProducts();
  const patchUserById = await productsData.find((user:any) => user.id == id);
  return patchUserById;
};

const deleteProductsById = async (id: number): Promise<any[]> => {
  console.log(id);
  const productsData = await products.getProducts();
  for (let i = 0; i < productsData.length; i++) {
    if (productsData[i].id == id) {
      productsData.splice(i, 1);
    }
  }
  return productsData;
};

const productsIncQuantityById = async (id: number): Promise<any[]> => {
  const productsData = await products.getProducts();
  for (let i = 0; i < productsData.length; i++) {
    if (productsData[i].id == id) {
      productsData[i].quantity++;
    }
  }
  return productsData;
};

const productsInsertQuantityById = async (id: number): Promise<any[]> => {
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
