import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <div>
                <h1>
                    <Link to='/' className='logo'>
                        Hometown Barbershop Apparel
                    </Link>
                </h1>
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
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
