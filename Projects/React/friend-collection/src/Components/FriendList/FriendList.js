import React, { useState } from 'react';
import './FriendList.css';
import fakeData from '../../fakeData'
import Friend from '../Friend/Friend'
import Cart from '../Cart/Cart'

const FriendList = () => {

    const friends = fakeData;
    const [friend, useFriend] = useState(friends);
    const [cart, setCart] = useState([]);

    const handleAddFriend = (friend) => {
        const newCart = [...cart, friend];
        setCart(newCart);
    }

    return (
        <div className="friendList-container">
            <div className="friend-container">
                {
                    friend.map(fr => <Friend handleAddFriend={handleAddFriend} friend={fr}></Friend>)
                }
            </div>
            <div className="cart-container">
                <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default FriendList;