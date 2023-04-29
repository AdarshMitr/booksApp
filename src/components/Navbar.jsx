import React from "react";
import '../App';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
      <div id="main-header">
       <Link to='/'><h1>BOOKS APP</h1></Link> 
      </div>
      <div id="favorites-header">
      <Link to="/favorites"><h3>⭐Your Favorites </h3></Link>
      </div>
    </div>
  );
};

export default Navbar;
