import React from 'react';
import './index.css'
import logo from '../../assets/logo192.png';

export default function Nav() {
    return (
        <nav className="Nav">
            <img className="Nav-logo" src={logo} alt="logo"/>
            <h1>My App</h1>
        </nav>
    );
};