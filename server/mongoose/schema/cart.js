const mongoose = require('../index');

const cartSchema = new mongoose.Schema({
    email: String,
    productId: String,
    amount: Number,
    title: String,
    price: Number,
    img: String
},{ collection: "cart"});

module.exports = cartSchema;