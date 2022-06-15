const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const wineSchema = require('./wineSchema');

const lineItemSchema = new Schema({
    qty: { type: Number, default: 1 },
    wine: wineSchema
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

lineItemSchema.virtual('extPrice').get(function(){
  return this.qty * this.wine.price;
})

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false },
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

// Add the following helpful virtuals to order documents
orderSchema.virtual('orderTotal').get(function () {
    return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function () {
    return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual('orderId').get(function () {
    return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = async function(userId) {
    return this.findOneAndUpdate(
    { user: userId, isPaid: false},
    { user: userId},
    { upsert: true, new: true }
    );
};

orderSchema.methods.addItemToCart = async function(wineId) {
    const cart = this;
    const lineItem = cart.lineItems.find(lineItem => lineItem.wine._id.equals(wineId));
    if (lineItem) {
        lineItem.qty += 1;
    } else {
        const wine = await mongoose.model('Wine').findById(wineId);
        cart.lineItems.push({ wine });
    }
    return cart.save();
}

orderSchema.methods.setItemQty = async function(wineId, newQty) {
    const cart = this;
    const lineItem = cart.lineItems.find(lineItem => lineItem.wine._id.equals(wineId));
    if (lineItem && newQty <= 0) {
        lineItem.remove();
    } else if (lineItem) {
        lineItem.qty = newQty;
    }
    return cart.save();
}

module.exports = mongoose.model('Order', orderSchema);