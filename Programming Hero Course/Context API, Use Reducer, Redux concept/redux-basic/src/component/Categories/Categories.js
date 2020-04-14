import React from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import { useContext } from 'react';
import { useState } from 'react';


const allProducts = [
    {name:'Lenovo', category: 'laptop'}, {name:'Asus', category: 'laptop'}, {name: 'Dell', category: 'laptop'},
    {name:'Samsung', category: 'mobile'}, {name:'Nokia', category: 'laptop'},{name:'Apple', category: 'mobile'}, 
    {name:'Canon', category: 'camera'}, {name:'Nikkon', category: 'camera'},{name:'Sony', category: 'camera'},
]

const Categories = () => {
    //const category = useContext(CategoryDetails);
    //const [products, setProducts] = useState([]);
    return (
        <div>
            <h2>Select your category</h2>
            <CategoryDetails></CategoryDetails>
            {/* {
                products.map(pd => <CategoryDetails product = {pd}></CategoryDetails>)
            } */}
        </div>
    );
};

export default Categories;