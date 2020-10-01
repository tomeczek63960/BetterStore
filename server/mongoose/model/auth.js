const mongoose = require('../index');
const loginSchema = require('../schema/auth');

const loginModel = mongoose.model('login', loginSchema);

module.exports = loginModel;