const mongoose = require('../index');
const cartSchema = require('../schema/cart');

const cartModel = mongoose.model('cart', cartSchema);

module.exports = cartModel;