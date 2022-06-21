import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import OrderDetail from "../../components/OrderDetail/OrderDetail";

export default function CartDetailPage() {
    const [cart, setCart] = useState(null);
    const history = useHistory();

    useEffect(function() {
    async function getCart() {
        const cart = await ordersAPI.getCart();
        setCart(cart);
    }
    getCart();
    }, []);

    async function handleChangeQty(wineId, newQty) {
        const cart = await ordersAPI.setItemQtyInCart(wineId, newQty);
        setCart(cart);
    }

    async function handleCheckout() {
        await ordersAPI.checkout();
        history.push('/orders');
    }

    return (
        <OrderDetail 
            order={cart}
            handleChangeQty={handleChangeQty}
            handleCheckout={handleCheckout}
        />
    );
}