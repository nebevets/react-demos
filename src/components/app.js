import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Greeting from './greeting';

const App = () => (
    <div>
        <div className="app">
            <Greeting name="esther bunny" favColor="#f3d6e4" food="pizza" candy="berry"/>
            <Greeting name="steev" favColor="purple"/>
            <img src={logo} className="logo rotate"/>
            <h1>Welcome to React</h1>
        </div>
    </div>
);

export default App;