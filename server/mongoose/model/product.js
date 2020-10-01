const mongoose = require('../index');
const productSchema = require("../schema/product");
const productModel = mongoose.model('book', productSchema);

module.exports = productModel;