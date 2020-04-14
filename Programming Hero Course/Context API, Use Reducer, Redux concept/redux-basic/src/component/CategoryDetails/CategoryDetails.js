import React, { useContext } from 'react';

const CategoryDetails = (props) => {

    const {name} = props.product;

    console.log(props);
    return (
        <div>
            <h4>This is category Detail</h4>
            <h6>Selected category:{name}</h6>
        </div>
    );
};

export default CategoryDetails;