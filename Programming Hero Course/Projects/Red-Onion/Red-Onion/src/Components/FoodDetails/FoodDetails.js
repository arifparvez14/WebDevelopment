import React , { useState } from 'react';
import './FoodDetails.css';
import allFoods from '../../Data/foods.json';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';


const FoodDetails = (props) => {
    const {id} = useParams();
    const [currentFood, setCurrentFood] = useState({})
    const [quantity, setQuantity] = useState(1);
    const [selectedBigImg, setSelectedBigImg] = useState(null)
    const [isSuccess, setIsSuccess] = useState(false);
   

    useEffect(() => {
        fetch('https://quiet-eyrie-75065.herokuapp.com/food/'+id)
        .then(res => res.json())
        .then(data => {
            setCurrentFood(data);
        })
        .catch(err => console.log(err))

        if (currentFood.image) {
            setSelectedBigImg(currentFood.image)
        }

    }, [currentFood.name])

    const finalCartHandler = (currentFood) => {
        currentFood.quantity = quantity;
        props.cartHandler(currentFood);
        setIsSuccess(true);

    }
    
    if(isSuccess){
        setTimeout(() => setIsSuccess(false),1500)
    }
    return (
        <div className="food-details my-5 pt-5 container">
            <div className="row">
                <div className="col-md-6 pr-md-4">
                    <h1>{currentFood.name}</h1>
                    <p className="my-5">{currentFood.longDes}</p>
                    <div className="d-flex  my-4">
                        <h2 className="price">${currentFood.amount}</h2>

                        <div className="cart-controller ml-3 btn">
                            <button className="btn" onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}>-</button> {quantity} <button className="btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                    </div>
                    <div className="action d-flex align-items-center">
                        <button className="btn btn-danger btn-rounded mb-2" onClick={() => finalCartHandler(currentFood)}><FontAwesomeIcon icon={faCartArrowDown} /> Add</button>
                        {isSuccess &&
                         <p className="ml-3 success-mgs text-success"><FontAwesomeIcon icon={faCheckCircle} />  Item added to Cart</p>
                         
                        }
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={selectedBigImg} alt=""/>
                </div>

            </div>
        </div>
    );
};

export default FoodDetails;