import inquiryModel from "../models/inquiry.js"
import { isItCustomer } from "./controller.js"


export async function addInquiry(req,res)
{
try{
if(isItCustomer(req))
   // console.log(req.user);
{
    const data = req.body;
    data.email = req.user.email;
    data.id = req.user.id;
    data.phoneNumber = req.user.phoneNumber;

let id = 0;
    const inquiries = await inquiryModel.find().sort({id:-1}).limit(1);
    if(inquiries.length==0)
    {
        id = 1;
    }else{
        id = inquiries[0].id + 1;
    }
    data.id = id;

    const newInquiry = new inquiryModel(data);
    await newInquiry.save();
    res.json({message:"inquiry added successfully"})
    return      
}else{
    return res.status(401).json({message:"please login & try again"})




}



}catch(error){
    console.log(error);
    return res.status(500).json({message:"something went wrong"})

}
}