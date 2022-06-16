import { Link } from 'react-router-dom';
import './OrderListItem.css';

export default function OrderListItem({ order }) {
    return (
        <Link to="">
            <div className="OrderListItem">
                <div className="name">Order Id: {order.orderId}
                    <div className="date">{new Date(order.updatedAt).toLocaleDateString()}</div>
                </div>
                <div className="price">
                    <span>${order.orderTotal.toFixed(2)}</span>
                    <span>{order.totalQty} items</span>
                </div>
            </div>
        </Link>
    );
}