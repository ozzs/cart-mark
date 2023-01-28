import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <nav
      className={showNavbar ? "hidden-navbar" : ""}
      onClick={() => setShowNavbar(!showNavbar)}
    >
      <NavLink to="/" className="link" activeclassname="active">
        {" "}
        Home
      </NavLink>
      <NavLink to="/additem" className="link" activeclassname="active">
        {" "}
        Add Item{" "}
      </NavLink>
      <NavLink to="/createlist" className="link" activeclassname="active">
        {" "}
        Create List{" "}
      </NavLink>
      <NavLink to="/shoppinglist" className="link" activeclassname="active">
        {" "}
        Go Shopping!{" "}
      </NavLink>
      <NavLink to="/showlists" className="link" activeclassname="active">
        {" "}
        Show Lists{" "}
      </NavLink>
      <FaBars className="nav-btn" onClick={() => setShowNavbar(!showNavbar)} />
    </nav>
  );
}

export default Navbar;
