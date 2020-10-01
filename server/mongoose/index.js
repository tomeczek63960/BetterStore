const mongoose = require('mongoose');
const config = require('config');

mongoose.connect( config.get("dbKey"), { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false  });

module.exports = mongoose;