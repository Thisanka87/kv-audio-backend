import productModel from "../models/products.js";

export function addProduct(req,res)
{

    if(req.user == null) {
        return res.status(401).json({message:"please login  & try again"});
    }
    if(req.user.role != "admin") {
        return res.status(401).json({message:"you are not authorized to perform this action"});
    }


    const data = req.body;
    const newProduct = new productModel(data);

    newProduct.save().then(()=>{
        res.json({message:"product added successfully"})
    }).catch((err)=>{
        res.status(500).json({error:"product add failed"})
    })


}