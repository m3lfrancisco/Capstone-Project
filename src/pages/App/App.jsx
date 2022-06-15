import './App.css';
import { useState } from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import { getUser } from '../../utilities/users-service';
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
    const [user, setUser] = useState(getUser());

    return (
        <main className="App">
            {user ? 
                <>
                    <h1>Welcome { user }!</h1>
                    <NavBar user={user} setUser={setUser}/>
                    <Switch>
                        <Route path="/orders/new">
                            <NewOrderPage user={user} setUser={setUser}/>
                        </Route>
                        <Route path="/orders">
                            <OrderHistoryPage user={user} setUser={setUser}/>
                        </Route>
                        <Redirect to="/orders"/>
                    </Switch>
                </> 
                : <AuthPage setUser={setUser}/>}
        </main>
    );
}