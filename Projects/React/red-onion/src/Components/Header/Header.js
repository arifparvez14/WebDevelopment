import React from 'react';
import logo from '../Images/logo2.png'
import cart from '../Images/smart-cart.png'
import './Header.css'


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <a className="navbar-brand" href="index.html"><img src={logo} width="150" height="50" alt="Red Onion Logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                                <img src={cart} width="25" height="25" alt="Cart image"/>
                            </li>
                            <li className="nav-item login-btn">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item signup-btn">
                                <a className="nav-link" href="#">Signup</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
