export default function WineListItem({ wineItem, handleAddToOrder }) {
    return (
        <div className="WineListItem">
            <img src={wineItem.image} alt={wineItem.name}/>
            <div className="winery">{wineItem.winery}</div>
            <div className="location">{wineItem.location}</div>
            <div className="name">{wineItem.name}</div>
            <div className="buy">
                <span>${wineItem.price.toFixed(2)}</span>
                <button className="btn-sm" onClick={() => 
                    handleAddToOrder(wineItem._id)}>
                    ADD
                </button>
            </div>
        </div>
    );
}