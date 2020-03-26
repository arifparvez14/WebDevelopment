import React, { useState, useEffect } from 'react';
import './Items.css'
import fakeData from '../../fakeData';
import logo from '../Images/logo2.png'
import cart from '../Images/smart-cart.png'
import bgImg from '../Images/bannerbackground.png'

const Items = () => {

    var setImage = {
        width: "100%",
        height: "400px",
        backgroundImage: `url(${bgImg})`
    };

    const category = { Breakfast: "breakfast", Lunch: "lunch", Dinner: "dinner" };

    const foods = fakeData;
    const currentItem = foods.filter(item => item.category === category.Lunch);
    const [item, setItem] = useState(currentItem);
    console.log("Previous:")
    console.log(item);

    const handleTap = (catName) => {
        const presentItem = foods.filter(item => item.category === catName);
        setItem(presentItem);
        console.log("Selected:");
        console.log(item);
    }



    return (
        <div className="container">
            {/* Navbar */}

            <div className="components">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container">
                        <a className="navbar-brand" href="/"><img src={logo} width="150" height="50" alt="Red Onion Logo" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item ">
                                    <img src={cart} width="25" height="25" alt="Cart image" />
                                </li>
                                <li className="nav-item login-btn">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                                <li className="nav-item signup-btn">
                                    <a className="nav-link" href="/signup">Signup</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Background */}
            <div style={setImage} className="background components">
                <div className="bgImgTxt">
                    <h1>Best food for your belly</h1>
                </div>
            </div>

            {/* Buttons */}
            <div className="main-buttons d-flex justify-content-center components">
                <button onClick={() => handleTap(category.Breakfast)} className="main-button"> BreakFast</button>
                <button onClick={() => handleTap(category.Lunch)} className="main-button"> Lunch</button>
                <button onClick={() => handleTap(category.Dinner)} className="main-button"> Dinner</button>
            </div>

            {/* Cards 1 */}
            <div className="cards components">
                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <h3>$ 9.99</h3>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <h3>$ 9.99</h3>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <h3>$ 9.99</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards2 */}
            <div className="cards components">
                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <h3>$ 9.99</h3>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <h3>$ 9.99</h3>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <h3>$ 9.99</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Items;