import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
}

// Retrieve an unpaid order for the logged in user
export function addItemToCart(wineId) {
  // Just send wineId for best security (no pricing)
    return sendRequest(`${BASE_URL}/cart/items/${wineId}`, 'POST');
}

// Update the wine's qty in the cart
// Will add the wine to the order if not currently in the cart
// Sending info via the data payload instead of a long URL
export function setItemQtyInCart(wineId, newQty) {
    return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { wineId, newQty });
}

// Updates the order's (cart's) isPaid property to true
export function checkout() {
  // Changing data on the server, so make it a POST request
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getOrderHistory() {
    return sendRequest(`${BASE_URL}/history`);
}