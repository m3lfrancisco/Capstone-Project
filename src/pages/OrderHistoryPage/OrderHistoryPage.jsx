// import { checkToken } from "../../utilities/users-service";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrderList from "../../components/OrderList/OrderList";
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import * as ordersAPI from '../../utilities/orders-api';
import './OrderHistoryPage.css';


export default function OrderHistoryPage({ user,setUser }) {
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

    function handleSelectOrder(order) {
        setActiveOrder(order);
    }

    // async function handleCheckToken() {
    //     // alert("clicked");
    //     const expDate = await checkToken();
    //     console.log(expDate);
    // }

    return (
        <main className="OrderHistoryPage">
            <h1>Order History</h1>
            <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
            <UserLogOut user={user} setUser={setUser} />
            <OrderList 
                orders={orders} 
                activeOrder={activeOrder}
                handleSelectOrder={handleSelectOrder}
            />
        </main>
    );
}