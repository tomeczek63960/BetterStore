const mongoose = require('mongoose');
const config = require('config');

mongoose.connect( process.env.DB_KEY, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false  });

module.exports = mongoose;