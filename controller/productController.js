import productModel from "../models/products.js";
import { isItAdmin } from "./controller.js";

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


export async function getProducts(req,res)
{
    let isAdmin = isItAdmin(req);
    

    try{
        if(isAdmin){
        const products =await productModel.find();
        res.json(products)
    }else{
        const products = await productModel.find({availabe:true});
        res.json(products)
    }

    }catch(error){
        return res.status(500).json({message:"something went wrong"})
    }
}

export async function updateProduct(req,res)
{
    let isAdmin = isItAdmin(req);
    try{
        if(isAdmin){
            const itemCode = req.params.id;
            const data = req.body;
        await productModel.updateone({itemCode:itemCode},data)
        res.json({message:"product updated successfully"})
        }
        return


    }catch(error){

        return res.status(500).json({message:"you are not authorized to perform this action"})
    }

}


export async function deleteProduct(req,res){
let isAdmin = isItAdmin(req);
    try{
        if(isAdmin){
            const itemCode = req.params.id;
        await productModel.deleteOne({itemCode:itemCode})
        res.json({message:"product deleted successfully"})
        }



    }catch(error){
        return res.status(500).json({message:"you are not authorized to perform this action"})
    }




}
