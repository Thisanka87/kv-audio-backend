import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },

     password : {
        type : String,
        required : true,
        unique : true
    },

     firstName : {
        type : String,
        required : true,
        
    },

     lastName : {
        type : String,
        required : true,
       
    },

     role : {
        type : String,
        required : true,
        default : "customer"
    },

    address: {
        type : String,
        required : true,
        
    },

     phoneNumber : {
        type : String,
        required : true,
        
    },

    profilePicthure : {
        type : String,
        required : true,
        defaut : "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"
        
    },

})

const userModel = mongoose.model("user",userSchema)

export default userModel