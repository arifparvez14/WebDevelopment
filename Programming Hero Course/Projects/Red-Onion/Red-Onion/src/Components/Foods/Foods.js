import React from 'react';
import {Link} from 'react-router-dom';
import './Foods.css'
import FoodItem from '../FoodItem/FoodItem';
import { useState } from 'react';
import { useEffect } from 'react';

const Foods = (props) => {
    const [foods, setFoods] = useState([]);
    const [selectedFoodType, setSelectedFoodType] = useState("breakfast");
    useEffect(() => {
        fetch('https://quiet-eyrie-75065.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => {
            setFoods(data);
            console.log(data)
        })
        .catch(err => console.log(err))
    } ,[foods.length])

    const selectedFoods =  foods.filter(food => food.category === selectedFoodType)
    
    return (
        
        <section className="food-area my-5">
            <div className="container">
                <nav>
                    <ul className="nav justify-content-center">
                        <li onClick={() => setSelectedFoodType("breakfast")} className="nav-item">
                            <span  to="breakfast" className={selectedFoodType === "breakfast" ?  "active nav-link" : "nav-link"}>Breakfast</span>
                        </li>
                        <li onClick={() => setSelectedFoodType("lunch")} className="nav-item">
                            <span to="breakfast" className={selectedFoodType === "lunch" ?  "active nav-link" : "nav-link"}>Lunch</span>
                        </li>
                        <li onClick={() => setSelectedFoodType("dinner")} className="nav-item">
                            <span to="breakfast" className={selectedFoodType === "dinner" ?  "active nav-link" : "nav-link"}>Dinner</span>
                        </li>
                    </ul>
                </nav>

                <div className="row my-5">
                   
                    {
                        selectedFoods.map(food => <FoodItem key={food.id}  food={food} />)
                    }
                </div>
                <div className="text-center">
                    {
                        props.cart.length ? 
                        <Link to="/checkout">
                            <button  className="btn btn-danger btn-secondary">Check Out Your Food</button>
                        </Link>
                        :
                        <button disabled className="btn btn-secondary">Check Out Your Food</button>

                    }

                </div>
            </div>
        </section>
    );
};

export default Foods;