import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        let cost = cart[i].income
        total = total + cost;
    }

    return (
        <div>
            <div className="cart">
                <h2>Add History</h2>
                <p><b>Number of Friends:</b> {cart.length}</p>
                <p><b>Total amount:</b> ${total.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Cart;