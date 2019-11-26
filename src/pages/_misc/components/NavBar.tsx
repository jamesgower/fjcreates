import React from "react";
import { NavLink } from "react-router-dom";
import { useScreenWidth } from "../../../hooks/useScreenWidth";

const NavBar = () => {
  const desktop = useScreenWidth(640);

  return (
    <div className="nav__bar" style={{ background: "white" }}>
      <div className="nav__left">
        <NavLink to="/" exact activeClassName="nav__link--active" className="nav__link">
          Home
        </NavLink>
        <NavLink to="/creates" activeClassName="nav__link--active" className="nav__link">
          Creations
        </NavLink>
        <NavLink to="/cakes" activeClassName="nav__link--active" className="nav__link">
          Cakes
        </NavLink>
      </div>
      <div className="nav__right">
        <p className="nav__link">Prices</p>
        <p className="nav__link">Contact Me</p>
      </div>
    </div>
  );
};

export default NavBar;
