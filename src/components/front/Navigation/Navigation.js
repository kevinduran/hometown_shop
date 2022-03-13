import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation ({cartItems}) {
    return (
        <nav className="navigation">
            <div className="navigation-logo">          
                <a href='https://hometownbarbershop805.com/' className='logo' >
                    <img className="logo-image" alt='logo' src='assets/logoNameSmall.png' />
                </a>
               
            </div>
            <div className="navigation-links">
                <ul>
                    <li>
                        <Link to='/'>Shop</Link>
                    </li>
                    {/* <li>
                        <Link to='/signup'>Sign-Up</Link>
                    </li> */}
                    <li>
                        <Link to='/cart' className="cart">
                            <i class="fas fa-shopping-cart"></i>
                            <span className="cart-length">
                                {cartItems.length === 0 ? "" : cartItems.length}
                            </span> 
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


