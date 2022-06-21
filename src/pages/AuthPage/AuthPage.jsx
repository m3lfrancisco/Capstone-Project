import { useState } from "react";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
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
                <video autoPlay muted loop src="https://vod-progressive.akamaized.net/exp=1655823090~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2532%2F15%2F387662274%2F1635192732.mp4~hmac=70cecedb77b7d5285897e12222cb62652ba7d800f3ab72aa2f4355f25b320ebd/vimeo-prod-skyfire-std-us/01/2532/15/387662274/1635192732.mp4?filename=Vines+-+31527.mp4" />
            </div>
        </main>
    );
}