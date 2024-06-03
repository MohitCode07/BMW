import React from 'react';
import bmwLogo from '../assets/bmw_logo.png'; // Import the BMW logo image
import { IoLocationOutline } from "react-icons/io5"; // Import the necessary icons from react-icons
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci"

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <img src={bmwLogo} alt="BMW Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#models">Models</a></li>
            <li><a href="#electric">Electric</a></li>
            <li><a href="#configure">Configure</a></li>
            <li><a href="#shop">Visit Online Shop</a></li>
            <li><a href="#more">More BMW</a></li>
          </ul>
        </nav>
        <div className="icons">
          <IoCartOutline />
         <IoLocationOutline />
          <CiSearch />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
