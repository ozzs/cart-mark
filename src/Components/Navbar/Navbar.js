import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaHome } from 'react-icons/fa'
import './Navbar.css';

function Navbar() {

    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <header>
            <nav className={showNavbar ? 'hidden-navbar': ''}>
                <NavLink to="/" className='link' activeclassname='active'> <FaHome className='home-button'/> </NavLink>
                <NavLink to="/additem" className='link' activeclassname='active'> Add Item </NavLink>
                <NavLink to="/createlist" className='link' activeclassname='active'> Create List </NavLink>
                <NavLink to="/shoppinglist" className='link' activeclassname='active'> Go Shopping! </NavLink>
            </nav>
            <FaBars className='nav-btn' onClick={() => setShowNavbar(!showNavbar)}/>
        </header>
    )
}

export default Navbar