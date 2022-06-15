import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './pages/App/App';

ReactDOM.render(
    <React.StrictMode>
        <Router><App/></Router>
    </React.StrictMode>,
    document.getElementById('root')
);