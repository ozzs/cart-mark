import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <NavLink to="/" className='link' activeclassname='active'> Home </NavLink>
            <NavLink to="/" className='link' activeclassname='active'> Add Item </NavLink>
            <NavLink to="/" className='link' activeclassname='active'> Create List </NavLink>
            <NavLink to="/shoppinglist" className='link' activeclassname='active'> Go Shopping! </NavLink>
        </nav>
    )
}

export default Navbar