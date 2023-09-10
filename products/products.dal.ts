// import products from './data.json' assert {type: 'json'}
// //import webSite from '../../../../js/day3 DOM/DOM project/index.js'

// const getProducts=async ()=>{
//     const productsData=await products ;
//     return productsData;
// }

// export default {getProducts}



import products from "./data.json"

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
};
const getProducts = async (): Promise<Product[]> => {
  return products;
};
export default { getProducts };
