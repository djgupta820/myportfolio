import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Outlet, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">DJ</div>
        <label className="openMenu" htmlFor="menu">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <input type="checkbox" name="menu" id="menu" />
        <div className="mainMenu">
          <NavLink activeClassName="active" to="/">Home</NavLink>
          <NavLink activeClassName="active" to="/about">About</NavLink>
          <NavLink activeClassName="active" to="/resume">Resume</NavLink>
          <NavLink activeClassName="active" to="/skills">Skills</NavLink>
          <NavLink activeClassName="active" to="/projects">Projects</NavLink>
          <NavLink activeClassName="active" to="/contact">Contact</NavLink>
          <label className="closeMenu" htmlFor="menu">
            <FontAwesomeIcon icon={faTimes} />
          </label>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
