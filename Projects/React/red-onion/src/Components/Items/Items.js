import React, { useState, useEffect } from 'react';
import './Items.css'
import fakeData from '../../fakeData';

const Items = () => {

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

            <div className="main-buttons">
                <button onClick={() => handleTap(category.Breakfast)} className="main-button"> BreakFast</button>
                 <button onClick={() => handleTap(category.Lunch)} className="main-button"> Lunch</button>
                 <button onClick={() => handleTap(category.Dinner)} className="main-button"> Dinner</button>
            </div>

            <div className="cards">
                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <h3>$ 9.99</h3>
                        </div>
                    </div>
                    <div className="card">
                        <img className ="card-img-top" src="..." alt="Card image cap" />
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

            <div className="cards">
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

//console.log(item);

    // useEffect(() => {
    //     const foods = fakeData;
    //     const currentItem = foods.filter(item => item.category === category.Lunch);
    //     console.log(currentItem);
    //     setItem(currentItem);
    //     console.log(item);
    // }, [])