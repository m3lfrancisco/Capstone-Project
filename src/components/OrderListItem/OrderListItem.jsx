import './OrderListItem.css';

export default function OrderListItem({ order, setActiveOrder  }) {

    function handleSelectOrder() {
        setActiveOrder(order);
    }

    return (
        <div className="OrderListItem" onClick={handleSelectOrder}>
            <div className="name">Order Id: {order.orderId}
                <div className="date">{new Date(order.updatedAt).toLocaleDateString()}</div>
            </div>
            <div className="price">
                <span>${order.orderTotal.toFixed(2)}</span>
                <span>{order.totalQty} items</span>
            </div>
        </div>
    );
}