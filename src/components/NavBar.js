import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import HboWhiteLogo from "../Assets/HBO_Max_White.png"
import HuluLogoWhite from "../Assets/Hulu_Logo_White.png"
import NetflixLogoWhite from "../Assets/Netflix_Logo_White.png"
import Search from "./Search";


function NavBar({search, setSearch, handleFilter}) {

const [clicked, setClicked] = useState(false)

function mobileNavBar(){
    setClicked(clicked => !clicked)
}
  return(
    <div className="navbar">
       <h4><NavLink id="home" exact to="/">MediaFinder</NavLink></h4>

        <div id="nav-right" className={clicked ? "active" : "inactive"}>
            <NavLink id="hbo-link" className="navLink" to="/hbo"><img className="nav-logo" src={HboWhiteLogo}/></NavLink>
            <NavLink id="hulu-link" className="navLink" to="/hulu"><img className="nav-logo" src={HuluLogoWhite}/></NavLink>
            <NavLink id="netflix-link" className="navLink" to="/netflix"><img className="nav-logo" src={NetflixLogoWhite}/></NavLink>
            <Search  handleFilter={handleFilter} search={search} setSearch={setSearch} />
            <h4 className="add-button">
                <NavLink className="fa-solid fa-circle-plus" to="/new"></NavLink>
            </h4>
        </div>

        <div id="mobile" onClick={mobileNavBar}>
            <i id="bar" className={clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
        </div>
    </div>
  )
}

export default NavBar;