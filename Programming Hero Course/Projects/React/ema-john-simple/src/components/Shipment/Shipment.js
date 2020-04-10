import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useAuth } from '../Login/useAuth';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Shipment = () => {
    const { register, handleSubmit, errors } = useForm();
    const auth = useAuth();

    const stripePromise = loadStripe('pk_test_KUPWr1KiYRX9K0sFYhmfNoNW00YZ0gv9G5');

    const onSubmit = data => {
        const savedCart = getDatabaseCart();
        const orderDetails = {
            email: auth.user.email,
            cart: savedCart,
            shipment: data
        }

        fetch('http://localhost:4200/placeOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                alert('Successfully placed your order with orderID: ' + data._id)
                processOrder();
            })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <   h3>Shipment Information</h3>
                    < form className="ship-form" onSubmit={handleSubmit(onSubmit)} >
                        < input name="name"
                            defaultValue={auth.user.name}
                            ref={register({ required: true })}
                            placeholder="Your Name" />
                        {
                            errors.name && <span className="error">Name is required</span>
                        }

                        < input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="Your Email" />
                        {errors.email && <span className="error">Email is required</span>}

                        < input name="AddressLine1" ref={register({ required: true })} placeholder="Address Line 1" />
                        {errors.AddressLine1 && <span className="error">Address is required</span>}

                        < input name="AddressLine2" ref={register} placeholder="Address Line 2" />

                        < input name="city" ref={register({ required: true })} placeholder="City" />
                        {errors.city && <span className="error">City is required</span>}

                        < input name="country" ref={register({ required: true })} placeholder="Country" />
                        {errors.country && <span className="error">Country is required</span>}

                        < input name="zipcode" ref={register({ required: true })} placeholder="Zip Code" />
                        {errors.zipcode && <span className="error">Zipcode is required</span>}

                        <input type="submit" />
                    </form >
                </div>
                <div className="col-md-6">
                    <h3>Payment Information</h3>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    )
};

export default Shipment;