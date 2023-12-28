import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import HboWhiteLogo from "../Assets/HBO_Max_White.png";
import HuluLogoWhite from "../Assets/Hulu_Logo_White.png";
import NetflixLogoWhite from "../Assets/Netflix_Logo_White.png";
import HboColorLogo from "../Assets/HBO_Max_Logo.png";
import HuluColorLogo from "../Assets/Hulu_Logo.png";
import NetflixColorLogo from "../Assets/Netflix_Logo.png";
import Search from "./Search";

function NavBar({ search, setSearch, handleFilter }) {
  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  function mobileNavBar() {
    setClicked((clicked) => !clicked);
  }

  const isActive = (path) => location.pathname === path;

  const getLogo = (inactiveLogo, activeLogo, path) =>
    isActive(path) ? activeLogo : inactiveLogo;

  return (
    <div className="navbar">
      <h4>
        <NavLink id="home" exact to="/">
          MediaFinder
        </NavLink>
      </h4>

      <div id="nav-right" className={clicked ? "active" : "inactive"}>
        <NavLink className="navLink" to="/hbo">
          <img
            alt="hbo"
            className="nav-logo"
            src={getLogo(HboWhiteLogo, HboColorLogo, "/hbo")}
          />
        </NavLink>
        <NavLink className="navLink" to="/hulu">
          <img
            alt="hulu"
            className="nav-logo"
            src={getLogo(HuluLogoWhite, HuluColorLogo, "/hulu")}
          />
        </NavLink>
        <NavLink className="navLink" to="/netflix">
          <img
            alt="netflix"
            className="nav-logo"
            src={getLogo(NetflixLogoWhite, NetflixColorLogo, "/netflix")}
          />
        </NavLink>
        <Search handleFilter={handleFilter} search={search} setSearch={setSearch} />
        <h4 className="add-button">
          <NavLink className="fa-solid fa-circle-plus" to="/new"></NavLink>
        </h4>
      </div>

      <div id="mobile" onClick={mobileNavBar}>
        <i id="bar" className={clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
      </div>
    </div>
  );
}

export default NavBar;
