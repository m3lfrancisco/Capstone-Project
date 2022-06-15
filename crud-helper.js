// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Wine = require('./models/wine');
const Category = require('./models/category');
const Order = require('./models/order');

(async function() {
    // Local variables will come in handy
    let u, i, c, o;
    console.log(await Wine.find({}));

})();