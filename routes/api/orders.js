const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// GET /api/orders/orders
router.get('/orders', ordersCtrl.orderHistory);
// POST /api/orders/cart/wines/:id
router.post('/cart/wines/:id', ordersCtrl.addToCart);
// POST /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);

module.exports = router;