import React, {useRef} from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css';

function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav");
    }

    return (
        <header>
            <nav ref={navRef}>
                <NavLink to="/" className='link' activeclassname='active'> Home </NavLink>
                <NavLink to="/additem" className='link' activeclassname='active'> Add Item </NavLink>
                <NavLink to="/createlist" className='link' activeclassname='active'> Create List </NavLink>
                <NavLink to="/shoppinglist" className='link' activeclassname='active'> Go Shopping! </NavLink>
                <FaTimes className='nav-btn nav-close-btn' onClick={showNavbar}/>
            </nav>
            <FaBars className='nav-btn' onClick={showNavbar}/>
        </header>
    )
}

export default Navbar