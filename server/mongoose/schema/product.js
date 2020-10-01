const mongoose = require('../index');

const productSchema = new mongoose.Schema({
    title: String,
    handle: String,
    description: String,
    img: String,
    category: String,
    price: Number,
    discount: Number,
    rates: Number,
    ratesAmount: Number
},{ collection: "products"});

module.exports = productSchema;