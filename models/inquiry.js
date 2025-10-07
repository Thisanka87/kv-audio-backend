
import mongoose from "mongoose";

const inquirySchema = mongoose.Schema({

    id: {
        type : String,
        required : true,
        unique : true,
    },

    email : {
        type : String,
        required : true,
        unique : false,
    },

    message : {
        type : String,
        required : true,
    },  
    date : {
        type : Date,
        required : true,
        default : Date.now
    },
    phoneNumber : {
        type : String,
        required : true,
    },
    response : {
        type : String,
        required : false,
        default : "No response yet" 
    },
    responsedBy : {
        type : String,
        required : false,
        default : "Not responsed yet"
    }
})
const inquiryModel = mongoose.model("inquiries",inquirySchema)

export default inquiryModel


