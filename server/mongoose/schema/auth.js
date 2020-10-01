const mongoose = require("../index");

const loginSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    surname: String
}, { collection: "users" });

module.exports = loginSchema;