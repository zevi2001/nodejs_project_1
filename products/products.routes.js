import products from './products.controller.js'
import express from 'express'
const router =express.Router()


router.get("/products", products.getProducts )
router.post("/products", products.addProducts )
router.get("/products/:id", products.getProductsById)
router.patch("/products", products.patchProductsById)
router.delete("/products/:id", products.deleteProductsById)
router.patch("/productsIncQuantity/:id", products.productsIncQuantityById)
router.patch("/productsInsertQuantity/:id", products.productsInsertQuantityById)


export default router