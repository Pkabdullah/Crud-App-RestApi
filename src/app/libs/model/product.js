import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    product: String,
    quantity: String 
})
export const Product = mongoose.models.products||mongoose.model("products",productModel)
