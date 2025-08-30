import mongoose from "mongoose"

const productSchema = mongoose.Schema({

    itemCode : {
        type : String,
        required : true,
    },

     itemName : {
        type : String,
        required : true,
    },


      itemDescription : {
        type : String,
        required : true,
    },   

})

const productModel = mongoose.model("products",productSchema)

export default productModel