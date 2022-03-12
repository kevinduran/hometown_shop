import React from 'react'
import Top from '../Top/Top'
import './Products.css'


const Products = ({productItems, handleAddProduct})=> {




    return (
        <div className="products">  
            <Top/>
           {productItems.map((item)=>{
            return(
                <div className="card">
                    <div>
                        <img className="product-image" src={item.image} alt={item.name} />
                    </div>
                    <div>
                        <h3 className="product-name">{item.name}</h3>
                    </div>
                    <div className="product-price">
                        <h4>${item.price}</h4>
                    </div>
                    <div>
                        <button className="product-add-button" onClick={()=>handleAddProduct(item)}>add to cart</button>
                    </div>
                </div>
            ) 
           })}
        </div>
    )
}

export default Products
