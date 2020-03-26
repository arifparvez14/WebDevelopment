import React from 'react';
import logo from '../../images/friendbook.PNG';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <div className="headline">
                <h1>Friend's Book</h1>
            </div>
        </div>
    );
};

export default Header;