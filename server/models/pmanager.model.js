const mongoose = require('mongoose');

const ProductManager = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "A product needs a title"]
    },
    price:{
        type:Number,
        required:[true, "A price is required"],
        min:[1, "price must be at least 1 dollar"]
    },
    description:{
        type:String,
        required:[true, "A description is required"],
        minlength:[3, "description must be at least 3 characters"]
    }
},{timestamps:true})

module.exports = ProductManager;