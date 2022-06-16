// import { useState, useEffect } from 'react';
// import * as ordersAPI from '../../utilities/orders-api';
import OrderListItem from '../OrderListItem/OrderListItem';
import './OrderList.css';

export default function OrderList({ orders }) {
    const pastOrders = orders.map(order =>
        <OrderListItem
            order={order}
            // isSelected={order === activeOrder}
            // handleSelectOrder={handleSelectOrder}
            key={order._id}
        />
    );
    // const [orders, setOrders] = useState([]);
    
    // useEffect(function() {
    //     async function getOrders() {
    //         const orders = await ordersAPI.getOrders();
    //         setOrders(orders);
    //     }
    //     getOrders();
    // }, []);

    return (
        <main className="OrderList">
            {pastOrders.length ? pastOrders : <span>No Previous Orders</span>} 
        </main>
    );
}