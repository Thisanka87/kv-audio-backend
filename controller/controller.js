import userModel from "../models/user.js";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"

export function registerUser(req,res){

    const data = req.body
    data.password = bcrypt.hashSync(data.password,10)
    const newUser = new userModel(data)

    newUser.save().then(()=>{

        res.json({message:"user registration successfully"})

    }).catch((error)=>{
        res.status(500).json({message:"user registration failed"})
    })
}


export function loginUser(req,res){

    const data = req.body
    userModel.findOne({
        email : data.email,
    }).then(
        (user)=>{
            if(user==null)
            {
                res.status(500).json({error:"user not found"})
            }else{
    
              //  return

                const isPasswordCorrect = bcrypt.compareSync(data.password,user.password)
                //console.log("hi")

                if(isPasswordCorrect)

                    
                {
                    
               const token =  Jwt.sign({
                    email : user.email,
                    firstName : user.firstName,
                    lastName : user.lastName,
                    password : user.password,
                    role : user.role,
                     profilePicthure : user. profilePicture,
                     phoneNumber : user.phoneNumber,
                },process.env.JWT_SECRET)


                    res.json({message:"Login successful",token : token})
                }else{
                    res.status(400).json({error:"Login Failed"})
                }
            }
        }
    )



}


    
export function isItAdmin(req)
{
    let isAdmin = false;
    if(req.user!= null && req.user.role == "admin") {
        isAdmin = true;
    }
    return isAdmin;
}

export function isItCustomer(req)
{
    let isCustomer = false;
    if(req.user!=null && req.user.role == "customer") {
        isCustomer = true;
    } 
    return isCustomer;      


}