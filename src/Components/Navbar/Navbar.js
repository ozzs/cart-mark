import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <header>
      <nav
        className={showNavbar ? "hidden-navbar" : ""}
        onClick={() => setShowNavbar(!showNavbar)}
      >
        <NavLink to="/" className="link" activeclassname="active">
          {" "}
          {/* <FaHome className="home-button" />{" "} */}
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
        <FaBars
          className="nav-btn"
          onClick={() => setShowNavbar(!showNavbar)}
        />
      </nav>
    </header>
  );
}

export default Navbar;
