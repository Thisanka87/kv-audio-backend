import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken"
import productRouter from "./routes/productRouter.js";

const app = express()
app.use(bodyParser.json());

app.use((req,res,next)=>{

    let token = req.header("Authorization")
    if(token!= null)
    {
        token =  token.replace("Bearer ","")

        jwt.verify(token,"kvSecretKey19",(err,decoded)=>{
            console.log(err)
            if(err!=null)
            {
                req.user = decoded
            }
        })
    }
next()
})


const mongoUrl = "mongodb+srv://thisa:thisa123@cluster0.vl8nd4g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

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