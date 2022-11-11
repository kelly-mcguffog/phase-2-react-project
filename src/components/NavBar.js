import React from "react";
import { NavLink } from "react-router-dom";
import HboWhiteLogo from "../Assets/HBO_Max_White.png"
import HuluLogoWhite from "../Assets/Hulu_Logo_White.png"
import NetflixLogoWhite from "../Assets/Netflix_Logo_White.png"
import Search from "./Search";


function NavBar({search, setSearch}) {
  return(
    <div className="navbar">
        {/* <h4 className="home-button" ><NavLink id="home" exact to="/">Home</NavLink></h4> */}
        <div className="nav-left">
            <h4 className="home-button" ><NavLink id="home" exact to="/">Home</NavLink></h4>
            <NavLink to="/hbo"><img className="nav-logo" src={HboWhiteLogo}/></NavLink>
            <NavLink to="/hulu"><img className="nav-logo" src={HuluLogoWhite}/></NavLink>
            <NavLink to="/netflix"><img className="nav-logo" src={NetflixLogoWhite}/></NavLink>
        </div>
        <div className="nav-right">
        <Search  search={search} setSearch={setSearch}/>
            {/* <NavLink to="/hbo"><img className="nav-logo" src={HboWhiteLogo}/></NavLink>
            <NavLink to="/hulu"><img className="nav-logo" src={HuluLogoWhite}/></NavLink>
            <NavLink to="/netflix"><img className="nav-logo" src={NetflixLogoWhite}/></NavLink> */}
            <h4 className="add-button"><NavLink to="/new">Add New</NavLink></h4>
        </div>
    </div>
  )
}

export default NavBar;