import products from './data.json' assert {type: 'json'}

const getProducts=async ()=>{
    const productsData=await products;
    return productsData;
}


export default {getProducts}



