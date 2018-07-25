const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://victordev:victordev7@ds147361.mlab.com:47361/heroku_n26zxzb5' || process.env.MONGODB_URI || 'mongodb://localhost:27017/physicians');

module.exports = {mongoose};