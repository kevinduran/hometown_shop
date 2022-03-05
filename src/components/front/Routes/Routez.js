import React from 'react'
import Products from '../Products/Products'
import {Route, Routes} from 'react-router-dom'
import Signup from '../Signup/Signup'



export default function Routez({productItems}) {
    return (
        <div>
            <Routes>
                <Route path='/' exact  element={<Products productItems={productItems} />}/>
                <Route path='/signup' exact  element={<Signup  />}/>

            </Routes>
        </div>
    )
}
