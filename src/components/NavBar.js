import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
    <div className="navbar">
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/hbo">HBO</NavLink></li>
        <li><NavLink to="/hulu">Hulu</NavLink></li>
        <li><NavLink to="/netflix">Netflix</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar;