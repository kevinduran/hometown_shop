import React, { useState } from 'react';

import './App.css';
import data from './components/back/Data/Data';
import Navigation from './components/front/Navigation/Navigation'
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

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item)=> item.id === product.id )
    if (ProductExist.quantity===1){
      setCartItems(cartItems.filter((item)=>item.id !== product.id))
    }else{
      setCartItems(
        cartItems.map((item)=> item.id === product.id 
        ? {...ProductExist, quantity: ProductExist.quantity - 1}
        : item
        )
      )
    }
  }

 
  const handleCartClearance = () => {
    setCartItems([])
  }
  const handleCartItemClearance = (item) => {
    const filteredCart = cartItems.filter(product => product.name !== item )
    setCartItems(filteredCart)
  }

  

  return (
    <div className="App">
      <Router>
        <Navigation cartItems={cartItems} /> 
        <Routez 
          productItems={productItems} 
          cartItems={cartItems} 
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
          handleCartItemClearance={handleCartItemClearance}
        />
      </Router>
    </div>
  );
}

export default App;
