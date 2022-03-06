import React from 'react'

function Cart({cartItems}) {
    return (
        <div className="cart-items">
            <div className="cart-items-header">Cart Items</div>
            
            {cartItems.length === 0 && (
                <div className="cart-items-empty">no items are added</div>
            )}

            {cartItems.map((item)=>(
                <div key="item.id" className="cart-item-list">
                    <img 
                        alt={item.name} 
                        src={item.image} 
                        className="cart-items-image" 
                    />
                    <div className="cart-item-name">
                        {item.name}
                    </div>

                </div>
            ))}
        </div>    
    )
}

export default Cart
