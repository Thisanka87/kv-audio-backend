import express from "express"
import { addReveiw } from "../controller/reviewController.js"

const reviewRouter = express.Router()

reviewRouter.post("/",addReveiw)

export default reviewRouter