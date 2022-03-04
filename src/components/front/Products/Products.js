import React from 'react'
import './Products.css'

function Products({productItems}) {
    return (
        <div className="products">   
           {productItems.map( (productItem) => (
               <div className="card">
                   <div>
                       <img src={productItem.image} alt={productItem.name} className="product-image" />
                   </div>
               </div>
           ))}
        </div>
    )
}

export default Products
