const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "A title for the product is required"]
    },
    price: {
        type: Number,
        min: 0,
        required: [true, "A price for the product is required"]
    },
    description: {
        type: String,
        required: [true, "A description for the product is required"]
    }
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;