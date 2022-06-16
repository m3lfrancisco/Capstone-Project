const Order = require('../../models/orders');

module.exports = {
    cart,
    addToCart,
    setItemQtyInCart,
    checkout,
    history
};

// A cart is the unpaid order for a user
async function cart(req, res) {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
}

// Add a wine to the cart
async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.json(cart);
}

// Updates a wine's qty in the cart
async function setItemQtyInCart(req, res) {
    let cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.body.wineId, req.body.newQty);
    res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.json(cart);
}

async function history(req, res) {
    const orders = await Order.find({ user: req.user._id, isPaid: true}).sort('-updatedAt').exec();
    res.json(orders);
}