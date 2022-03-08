import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header({cartItems}) {
    return (
        <header className="header">
            <div className="header-logo">
                <Link to='/' className='logo'>
                        <img className="logo-image" alt='logo' src='assets/logoNameSmall.png' />
                </Link>
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Sign-Up</Link>
                    </li>
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
        </header>
    )
}
