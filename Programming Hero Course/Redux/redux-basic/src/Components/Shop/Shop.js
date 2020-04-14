import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products = [
        { name: 'Lenovo', id: 1 },
        { name: 'Asus', id: 2 },
        { name: 'Dell', id: 3 },
        { name: 'Hp', id: 4 },
        { name: 'Toshiba', id: 5 },
    ]
    return (
        <div>
            <h2>This is shop</h2>
            {
                products.map(pd => <Product product = {pd}></Product>)
            }
        </div>
    );
};

export default Shop;