const mongoose = require('mongoose');
// Ensure that the Category model is loaded into Mongoose (for populating Item queries)
require('./category');

const wineSchema = require('./wineSchema');

module.exports = mongoose.model('Wine', wineSchema);