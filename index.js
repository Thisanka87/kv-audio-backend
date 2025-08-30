import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken"
import productRouter from "./routes/productRouter.js";
import dotenv from "dotenv"
const app = express()
dotenv.config()
app.use(bodyParser.json());

app.use((req,res,next)=>{

    let token = req.header("Authorization")
    if(token!= null)
    {
        token =  token.replace("Bearer ","")

        jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
            console.log(err)
            if(err!=null)
            {
                req.user = decoded
            }
        })
    }
next()
})


const mongoUrl = process.env.MONGO_URL

mongoose.connect(mongoUrl)

let connection = mongoose.connection

connection.once("open",()=>{
    console.log("mongo db connection established successfully")
})


app.use("/api/users",userRouter)
app.use("/api/products",productRouter)

app.listen(3000,()=>{
    console.log("server is ruining on port 3000")
})