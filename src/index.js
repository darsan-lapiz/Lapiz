import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Components/home';
import Overview from './Components/overview';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    <Home/>
    <Overview/>
    </>
);


