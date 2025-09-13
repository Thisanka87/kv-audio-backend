import express from "express"
import { addReveiw, getReviews } from "../controller/reviewController.js"

const reviewRouter = express.Router()

reviewRouter.post("/",addReveiw)
reviewRouter.get("/",getReviews)

export default reviewRouter 