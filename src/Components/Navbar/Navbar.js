import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <nav>
                <NavLink to="/" className='link' activeclassname='active'> Home </NavLink>
                <NavLink to="/additem" className='link' activeclassname='active'> Add Item </NavLink>
                <NavLink to="/createlist" className='link' activeclassname='active'> Create List </NavLink>
                <NavLink to="/shoppinglist" className='link' activeclassname='active'> Go Shopping! </NavLink>
            </nav>
            <FaBars className='nav-btn'/>
        </header>
    )
}

export default Navbar