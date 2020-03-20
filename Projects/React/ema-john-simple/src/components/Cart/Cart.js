import React from 'react';
import { useAuth } from '../Login/useAuth';
// import {UserContext} from '../../App'

const Cart = (props) => {

    //const user = useContext(UserContext);
    const auth = useAuth();
    console.log(auth.user);

    const cart = props.cart;
    //const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    } else if (total > 0) {
        shipping = 12.99;
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formateNumber = num => {
        const precesion = num.toFixed(2);
        return Number(precesion);
    }


    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formateNumber(total)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + Vat: {tax}</small></p>
            <p>Total price: {grandTotal}</p>
            <br />
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;