import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser } from '../../utilities/users-service';
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import CartDetailPage from '../CartDetailPage/CartDetailPage';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    const [user, setUser] = useState(getUser());

    return (
        <main className="App">
            {user ? 
                <>
                    <NavBar user={user} setUser={setUser}/>
                    <Switch>
                        <Route exact path="/orders/new">
                            <NewOrderPage user={user} setUser={setUser}/>
                        </Route>
                        <Route exact path="/orders">
                            <OrderHistoryPage />
                        </Route>
                        <Route exact path="/cart">
                            <CartDetailPage />
                        </Route>
                        <Redirect to="/orders/new"/>
                    </Switch>
                </> 
                :
                <AuthPage setUser={setUser}/>
            }
        </main>
    );
}