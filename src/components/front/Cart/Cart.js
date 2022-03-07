import React from 'react'
import './Cart.css'

function Cart({cartItems,handleAddProduct,handleRemoveProduct}) {
    
    
        const totalPrice = cartItems.reduce((price,item)=>price + item.quantity * item.price, 0)
    return (
        <div className="cart-items">
            <div className="cart-items-header">Cart Items</div>
            
            {cartItems.length === 0 && (
                <div className="cart-items-empty">no items are added</div>
            )}
            <div>
                {cartItems.map((item)=>(
                    <div key="item.id" className="cart-item-list">
                        <img 
                            alt={item.name} 
                            src={item.image} 
                            className="cart-items-image" 
                        />
                        <div className="cart-items-name">
                            {item.name}
                        </div>
                        <div className="cart-items-functions">
                            <button className="cart-items-add" onClick={()=> handleAddProduct(item)}>+</button>
                            <button className="cart-items-remove" onClick={()=> handleRemoveProduct(item)}>-</button>
                        </div>
                        <div className="cart-items-price">
                            {item.quantity} * ${item.price}
                        </div>

                    </div>
                ))}
            </div>    

            <div className="cart-items-total-price-name">
                Total Price:
                <div className="cart-item-total-price">
                    ${totalPrice}
                </div>
            </div>
        </div>  
        
        
    )
}

export default Cart
