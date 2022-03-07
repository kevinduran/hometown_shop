import React from 'react'
import Products from '../Products/Products'
import {Route, Routes} from 'react-router-dom'
import Signup from '../Signup/Signup'
import Cart from '../Cart/Cart'


export default function Routez({productItems,cartItems, handleAddProduct,handleRemoveProduct,handleCartClearance}) {
    return (
        <div>
            <Routes>
                <Route path='/' exact  element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />}/>
                <Route path='/signup' exact  element={<Signup />}/>
                <Route path='/cart' exact  element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} />}/>
            </Routes>
        </div>
    )
}
