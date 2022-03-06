import React, { useState } from 'react';

import './App.css';
import data from './components/back/Data/Data';
import Header from './components/front/Header/Header'
import {BrowserRouter as Router} from 'react-router-dom'
import Routez from './components/front/Routes/Routez'


function App() {
  const {productItems} = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item)=> item.id === product.id )
    if ( ProductExist ){
      setCartItems(cartItems.map((item)=> item.id === product.id ?
       {...ProductExist, quantity: ProductExist.quantity + 1}: item)
      );
    }
    else{
      setCartItems([...cartItems, {...product, quantity: 1}])
    }  
  }


  return (
    <div className="App">
      <Router>
        <Header/>
        <Routez productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct}/>
      </Router>
    </div>
  );
}

export default App;
