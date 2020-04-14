import React from 'react';
import Categories from '../Categories/Categories';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Home = () => {
  const [category, setCategory] = useContext(CategoryContext);
    return (
        <div style={{border: '1px solid purple'}}>
          <h1>This is Home: {category}</h1> 
          <Categories></Categories> 
        </div>
    );
};

export default Home;