import { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as winesAPI from '../../utilities/wines-api';
import * as ordersAPI from '../../utilities/orders-api';
// import Logo from '../../components/Logo/Logo';
import WineList from '../../components/WineList/WineList';
import CategoryList from '../../components/CategoryList/CategoryList';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import './NewOrderPage.css';

export default function NewOrderPage({ user, setUser }) {
    const [wineItems, setWineItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [cart, setCart] = useState(null);
    const categoriesRef = useRef([]);
    const history = useHistory();

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

    async function handleChangeQty(wineId, newQty) {
        const cart = await ordersAPI.setItemQtyInCart(wineId, newQty);
        setCart(cart);
    }

    async function handleCheckout() {
        await ordersAPI.checkout();
        history.push('/orders');
    }

    return (
        <main className="NewOrderPage">
            <aside>
                {/* <Logo /> */}
                <CategoryList
                    categories={categoriesRef.current}
                    activeCat={activeCat}
                    setActiveCat={setActiveCat}
                />
                <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
                <UserLogOut user={user} setUser={setUser} />
            </aside>
            <WineList
                wineItems={wineItems.filter(wine => wine.category.name === activeCat)}
                handleAddToOrder={handleAddToOrder}
            />
            <OrderDetail 
                order={cart}
                handleChangeQty={handleChangeQty}
                handleCheckout={handleCheckout}
            />
        </main>
    );
}