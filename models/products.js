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

    price : {
        type : Number,
        required : true,
    },  

    image : {
        type : [String],
        required : true,
        default : ["https://www.pngall.com/wp-content/uploads/5/No-Image-PNG.png"]
    }

})

const productModel = mongoose.model("products",productSchema)

export default productModel