import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
firstNmae : {
    type : String,
    required : true
},

lastNmae : {
    type : String,
    required : true
},
email : {
    type : String,
    required : true,
    unique : true
    
},

rating : {
    type : Number,
    required : true
},

date : {
    type : Date,
    required : true,
    default : Date.now()
},

comment : {
    type : String,
    required : true
},

isApproved : {
    type : Boolean,
    required : true,
    default : false
},

profilePicthure : {
        type : String,
        required : true,
        defaut : "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"
        
    },


})

const reveiwModel = mongoose.model("reviews",reviewSchema)

export default reveiwModel