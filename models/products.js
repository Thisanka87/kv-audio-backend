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
    
    dimensions : {
        type : String,
        required : true,
    },  
    
    category : {
        type : String,
        required : true,
        default :  "uncategorized"
    }, 
    
    availabe : {
        type : Boolean,
        required : true,
        default : true
    },

})

const productModel = mongoose.model("products",productSchema)

export default productModel