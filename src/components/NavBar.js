import React from "react";
import { NavLink } from "react-router-dom";
import HboWhiteLogo from "../Assets/HBO_Max_White.png"
import HuluLogoWhite from "../Assets/Hulu_Logo_White.png"
import NetflixLogoWhite from "../Assets/Netflix_Logo_White.png"
import Search from "./Search";
// import FilterButton from "./FilterButton";


function NavBar({search, setSearch, handleFilter}) {
    
  return(
    <div className="navbar">
       
        <div className="nav-left">
            <h4 className="home-button" ><NavLink id="home" exact to="/">MediaFinder</NavLink></h4>
            <NavLink className="navLink hbo-link" to="/hbo"><img className="nav-logo" src={HboWhiteLogo}/></NavLink>
            <NavLink className="navLink hulu-link" to="/hulu"><img className="nav-logo" src={HuluLogoWhite}/></NavLink>
            <NavLink className="navLink netflix-link" to="/netflix"><img className="nav-logo" src={NetflixLogoWhite}/></NavLink>
        </div>
        <div className="nav-right">
            <Search  handleFilter={handleFilter} search={search} setSearch={setSearch} />
            <h4 className="add-button"><NavLink className="fa-solid fa-circle-plus" to="/new"></NavLink></h4>
        </div>
    </div>
  )
}

export default NavBar;