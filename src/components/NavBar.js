import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
    <div className="navbar">
        <h4><NavLink exact to="/">Home</NavLink></h4>
        <h4><NavLink to="/hbo">HBO</NavLink></h4>
        <h4><NavLink to="/hulu">Hulu</NavLink></h4>
        <h4><NavLink to="/netflix">Netflix</NavLink></h4>
        <h4><NavLink to="/new">Add New</NavLink></h4>
    </div>
  )
}

export default NavBar;