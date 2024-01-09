const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    productName: String,
    category : String,
    image: String,
    price: String ,
    description : String
})

const Product = mongoose.model('product', productSchema)

module.exports = Product;