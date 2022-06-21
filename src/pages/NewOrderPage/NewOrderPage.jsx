import { useState, useEffect, useRef } from 'react';
import * as winesAPI from '../../utilities/wines-api';
import * as ordersAPI from '../../utilities/orders-api';
import WineList from '../../components/WineList/WineList';
import CategoryList from '../../components/CategoryList/CategoryList';
import './NewOrderPage.css';

export default function NewOrderPage() {
    const [wineItems, setWineItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [cart, setCart] = useState(null);
    const categoriesRef = useRef([]);

    useEffect(function() {
    async function getWines() {
        const wines = await winesAPI.getAll();
        categoriesRef.current = wines.reduce((cats, wine) => {
            const cat = wine.category.name;
            return cats.includes(cat) ? cats : [...cats, cat];
        }, []);
        setWineItems(wines);
        setActiveCat(wines[0].category.name);
    }
    getWines();

    async function getCart(){
        const cart = await ordersAPI.getCart();
        setCart(cart);
    }
    getCart();
  }, []);  // an empty dependency array will run the effect after the first render only

  // Event HANDLERS
    async function handleAddToOrder(wineId) {
        const cart = await ordersAPI.addItemToCart(wineId);
        setCart(cart);
    }

    return (
        <main className="NewOrderPage">
            <div className="NewOrderPageHeader">
                <h1>We Offer A Fine Selection of Rare Wines</h1>
                <h3>Please Choose Your Wine</h3>
            </div>
            <div className="NewOrderPageBody">
                <aside>
                    <CategoryList
                        categories={categoriesRef.current}
                        activeCat={activeCat}
                        setActiveCat={setActiveCat}
                    />
                </aside>
                <WineList
                    wineItems={wineItems.filter(wine => wine.category.name === activeCat)}
                    handleAddToOrder={handleAddToOrder}
                />
            </div>
        </main>    
    );
}