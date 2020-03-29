import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider, PrivateRoute } from './Components/SignUp/useAuth';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import SignUp from './Components/SignUp/SignUp';
import Foods from './Components/Foods/Foods';
import Features from './Components/Features/Features';


function App() {

    const [cart, setCart] = useState([]);
    const [deliveryDetails, setDeliveryDetails] = useState({
        todoor: null, road: null, flat: null, businessname: null, address: null
    });

    const deliveryDetailsHandler = (data) => { setDeliveryDetails(data);}
    const clearCart = () => {setCart([]);}

    const cartHandler = (data) => {
        const alreadyAdded = cart.find(crt => crt.id == data.id);
        const newCart = [...cart, data];
        setCart(newCart);

        if (alreadyAdded){
            const remainingCarts = cart.filter(crt => cart.id != data);
            setCart(remainingCarts);
        } else {
            const newCart = [...cart, data];
            setCart(newCart);
        }
    }

    const checkOutItemHandler = (productId, productQuantity) => {
        const newCart = cart.map(item => {
            if (item.id == productId){
                item.quantity = productQuantity;
            }
            return item;
        })

        const filterdCart = newCart.filter(item => item.quantity > 0)
        setCart(filterdCart);
    }

    return (
        <AuthProvider>
            <Router>
                <div className="main">
                    <Switch>
                        <Route exact path="/">
                            <Header cart={cart}></Header>
                            <Banner></Banner>
                            <Foods cart={cart}></Foods>
                            <Features></Features>
                        </Route>
                        <Route path="/login">
                            <SignUp></SignUp>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
