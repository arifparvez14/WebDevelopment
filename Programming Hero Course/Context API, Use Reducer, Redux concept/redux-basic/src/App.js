import React, { useState, createContext } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home'
import Shipment from './component/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {
  //declare global state
  const [category, setCategory] = useState('laptop');

  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <p>count value:{category}</p>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment> 
    </CategoryContext.Provider>
  );
}

export default App;
