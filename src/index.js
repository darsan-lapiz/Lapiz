
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Components/home';
import About from './Components/overview';
import Vision from './Components/Vision';
import Support from './Components/Support';
import Mentor from './Components/mentor';
import Footer from './Components/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    <Home/>
    <About/>
    <Vision/>
    <Support/>
    <Mentor/>
    <Footer/>
    </>
);


