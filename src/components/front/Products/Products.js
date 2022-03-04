import React from 'react'
import './Products.css'

const Products = ({productItems})=> {
    return (
        <div className="products">   
           {productItems.map((item)=>{
             return <img src={item.image} alt={item.name} />
           })}
        </div>
    )
}

export default Products
