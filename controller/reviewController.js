import reveiwModel from "../models/reveiw.js";

export function addReveiw(req,res)
{
    if(req.user == null)
    {
        res.status(401).json({message:"please login & try again"})
    }

     const data = req.body

     data.name = req.user.firstName + ""+ req.user.lastName,
     data.email = req.user.email

     const newReview = new reveiwModel(data)

     newReview.save().then(()=>{
        res.json({message:"review added successfully"})
     }).catch(()=>{
        res.status(400).json({message:"review addition failed"})
     })



}