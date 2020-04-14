import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetails = () => {
    //const {name} = props.product;
    const category = useContext(CategoryContext);

    return (
        <div>
            <h4>This is category Detail</h4>
            <h6>Selected category:{category}</h6>
        </div>
    );
};

export default CategoryDetails;