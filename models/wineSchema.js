const Schema = require('mongoose').Schema;

const wineSchema = new Schema({
    winery: { type: String, required: true },
    name: { type: String },
    location: { type: String, required: true },
    image: {  type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category'},
    price: { type: Number, required: true, default: 0 }
}, {
    timestamps: true
});

module.exports = wineSchema;