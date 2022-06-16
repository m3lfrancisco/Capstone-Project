import OrderListItem from '../OrderListItem/OrderListItem';
import './OrderList.css';

export default function OrderList({ orders, setActiveOrder }) {
    const pastOrders = orders.map(order =>
        <OrderListItem
            order={order}
            setActiveOrder={setActiveOrder}
        />
    );

    return (
        <main className="OrderList">
            {pastOrders.length ? pastOrders : <span>No Previous Orders</span>} 
        </main>
    );
}