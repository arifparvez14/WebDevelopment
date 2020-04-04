import React from 'react';
import fakeData from '../../fakeData'

const Inventory = () => {

    const handleAddInventory = () => {
        const product = fakeData[0]; 
        console.log('Before post',product);
        fetch('http://localhost:4200/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
        .then(res => res.json())
        .then(data => {
            console.log('Post Success', data);
        })
    }

    return (
        <div>
            <h1>Add inventory to sell more.</h1>
            <button onClick={handleAddInventory}>Add Inventory</button>
        </div>
    );
};

export default Inventory;