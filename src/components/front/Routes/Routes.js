import React from 'react'
import Products from '../Products/Products'
import {Route, Routes} from 'react-router-dom'


export default function Routez() {
    return (
        <div>
            <Routes>
                <Route path='/' exact  element={<Products />}/>
            </Routes>
        </div>
    )
}
