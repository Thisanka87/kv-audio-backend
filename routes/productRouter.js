import express from "express"
import { addProduct } from "../controller/productController.js"
import { getProducts } from "../controller/productController.js"
import { updateProduct } from "../controller/productController.js"

const productRouter = express.Router()

productRouter.post("/",addProduct)

productRouter.get("/",getProducts)  

productRouter.put("/:id",updateProduct)


export default productRouter