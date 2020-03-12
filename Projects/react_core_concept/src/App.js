import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman', 'Shakib']
  const products = [
    { name: 'Photoshop', price: '$90' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' },
    { name: 'Premier El', price: '$249.99' }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }

        <Person name={nayoks[0]} nayika="Mousumi" food="fuska"></Person>
        <Person name={nayoks[1]} nayika="Shabana"></Person>
        <Person name="Bappa Raz" nayika="Cheka"></Person>
        <Person name="Elias K" nayika="Bobita"></Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount)
  };

  const handleDecrease = () => setCount(count - 1)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy now</button>
    </div>
  )
}

function Person(props) {
  var personStyle = {
    border: '2px solid yellow',
    margin: '10px',
    width: '50%'
  }
  return (
    <div style={personStyle}>
      <h3>Nayok: {props.name}</h3>
      <h3>Hero of: {props.nayika}</h3>
    </div>
  )
}

export default App;
