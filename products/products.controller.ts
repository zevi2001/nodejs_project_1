import { Request, Response } from 'express';
import products from './products.services.ts';

const getProducts = async (req: Request, res: Response) => {
  try {
    const productsData = await products.getProducts();
    res.status(200).send(productsData);
    console.log('controller work');
  } catch (error) {
    res.status(400);
    console.error(error);
  }
};

const addProducts = async (req: Request, res: Response) => {
  try {
    const {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      quantity,
    } = req.body;
    const newUser = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      quantity,
    };
    const addData = await products.addProducts(newUser);
    res.status(200).send(addData);
    console.log('controller work');
  } catch (error) {
    console.error(error);
  }
};

const getProductsById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    console.log(id);
    const productsData = await products.getProductsById(id);
    res.status(200).send(productsData);
    console.log('controller work');
  } catch (error) {
    res.status(400);
    console.error(error);
  }
};

const patchProductsById = async (req: Request, res: Response) => {
  try {
    const productsData = await products.patchProductsById(req.body.id);
    productsData.title = req.body.title;
    productsData.price = req.body.price;
    productsData.description = req.body.description;
    productsData.category = req.body.category;
    productsData.image = req.body.image;
    productsData.rating = req.body.rating;
    productsData.quantity = req.body.quantity;
    res.status(200).send(productsData);
    console.log('controller work');
  } catch (error) {
    res.status(400);
    console.error(error);
  }
};

const deleteProductsById = async (req: Request, res: Response) => {
  try {
    const productsData = await products.deleteProductsById(req.params.id);
    res.status(200).send(productsData);
    console.log('controller work');
  } catch (error) {
    res.status(400);
    console.error(error);
  }
};

const productsIncQuantityById = async (req: Request, res: Response) => {
  try {
    const productsData = await products.productsIncQuantityById(req.params.id);
    res.status(200).send(productsData);
  } catch (error) {
    res.status(400);
    console.error(error);
  }
};

const productsInsertQuantityById = async (req: Request, res: Response) => {
  try {
    const productsData = await products.productsInsertQuantityById(
      req.params.id
    );
    res.status(200).send(productsData);
  } catch (error) {
    res.status(400);
    console.error(error);
  }
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
