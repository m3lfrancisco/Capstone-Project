import { useState } from "react";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import videoBg from '../../assets/Vines.mp4';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <main className="AuthPage">
            <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
            {showLogin ? <LoginForm setUser={setUser}/> : <SignUpForm setUser={setUser}/>}
            <div className="welcome-video">
                <div className="welcome-msg">
                    <h1>Welcome To Vintage Vintner</h1>
                </div>
                <video autoPlay muted loop src={videoBg} />
            </div>
        </main>
    );
}