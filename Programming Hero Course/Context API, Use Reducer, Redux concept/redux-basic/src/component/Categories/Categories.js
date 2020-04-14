import React from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import { useContext } from 'react';
import { useState } from 'react';
import { CategoryContext } from '../../App';
import { useEffect } from 'react';


const allProducts = [
    {name:'Lenovo', cat: 'laptop'}, {name:'Asus', cat: 'laptop'}, {name: 'Dell', cat: 'laptop'},
    {name:'Samsung', cat: 'mobile'}, {name:'Nokia', cat: 'laptop'},{name:'Apple', cat: 'mobile'}, 
    {name:'Canon', cat: 'camera'}, {name:'Nikkon', cat: 'camera'},{name:'Sony', cat: 'camera'},
]

const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log({category});
        const matchedProduct = allProducts.filter(pd => pd.cat === category.toLowerCase());
        console.log(matchedProduct);
        setProducts(matchedProduct);
    }, [category])

    return (
        <div>
            <h2>Select your category: {category}</h2>
            {
                products.map(pd => <CategoryDetails product = {pd}></CategoryDetails>)
            }
        </div>
    );
};

export default Categories;