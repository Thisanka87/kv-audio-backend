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

})

const reveiwModel = mongoose.model("reviews",reviewSchema)

export default reveiwModel