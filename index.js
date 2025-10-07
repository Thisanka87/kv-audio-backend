import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken"
import productRouter from "./routes/productRouter.js";
import dotenv from "dotenv"
import reviewRouter from "./routes/reviewRoute.js";
import inquiryRouter from "./routes/inquiryRouter.js";
const app = express()
dotenv.config()
app.use(bodyParser.json());

app.use((req, res, next) => {
    let token = req.header("Authorization");

    if (token) {
        console.log(token)
        if (token.startsWith("Bearer ")) {
            token = token.split(" ")[1];
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log("Invalid token:", err.message);
            } else {
                req.user = decoded; // attach user info
                console.log("User verified:", decoded);
            }
        });
    }

    next();
});


const mongoUrl = process.env.MONGO_URL

mongoose.connect(mongoUrl)

let connection = mongoose.connection

connection.once("open",()=>{
    console.log("mongo db connection established successfully")
})


app.use("/api/users",userRouter)
app.use("/api/products",productRouter)
app.use("/api/reviews",reviewRouter)
app.use("/api/inquiries",inquiryRouter)

app.listen(3000,()=>{
    console.log("server is ruining on port 3000")
})