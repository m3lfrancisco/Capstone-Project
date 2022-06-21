import { useState, useEffect } from 'react';
import OrderList from "../../components/OrderList/OrderList";
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import * as ordersAPI from '../../utilities/orders-api';
import './OrderHistoryPage.css';

export default function OrderHistoryPage() {
    const [orders, setOrders] = useState([]);
    const [activeOrder, setActiveOrder] = useState(null);
    
    useEffect(function() {
        // Get previous orders (paid)
        async function getOrders() {
            const orders = await ordersAPI.getOrderHistory();
            setOrders(orders);
            // If no previous orders, activeOrder will be set to null
            setActiveOrder(orders[0] || null);
        }
        getOrders();
    }, []);

    return (
        <main className="OrderHistoryPage">
            <OrderList 
                orders={orders} 
                setActiveOrder={setActiveOrder}
            />
            <OrderDetail order={activeOrder} />
        </main>
    );
}