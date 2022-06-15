import WineListItem from "../WineListItem/WineListItem";

export default function WineList({ wineItems, handleAddToOrder }) {
    const wines = wineItems.map(wine =>
        <WineListItem
            key={wine._id}
            wineItem={wine}
            handleAddToOrder={handleAddToOrder}
        />
    );
    return (
        <main className="WineList">
            {wines}
        </main>
    );
}