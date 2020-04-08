import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';

import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Review = () => {

    const [cart, setCart] = useState([]);
    const auth = useAuth();

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        fetch('http://localhost:4200/getProductsByKey', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => {
            const cardProducts = productKeys.map(key => {
                const product = data.find(pd => pd.key === key);
                product.quantity = savedCart[key];
                return product;
            });
            setCart(cardProducts);
        })
    }, []);

    return (
        <div className="twin-container">
            <div className="product-container">
            {
                cart.map(pd => <ReviewItem 
                    key={pd.key}
                    removeProduct = {removeProduct} 
                    product={pd}></ReviewItem>)
            }

            {
                !cart.length && <h1>You card is empty. <a href ="/shop">Keep shopping</a></h1>
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    {/* <button onClick={handlePlaceOrder} className="main-button">Place Order</button> */}
                    <Link to="shipment">
                        {
                            auth.user ? <button className="main-button">Proceed shipment</button>
                            : <button className="main-button">Login to Proceed</button>
                        }
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;