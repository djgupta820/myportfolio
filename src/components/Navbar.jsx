import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
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
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
          <NavLink activeClassName="active" to="/resume">
            Resume
          </NavLink>
          <NavLink activeClassName="active" to="/skills">
            Skills
          </NavLink>
          <NavLink activeClassName="active" to="/projects">
            Projects
          </NavLink>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
          <div className="nav-social">
            <a href="https://github.com/djgupta820" title="Github">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="https://www.linkedin.com/in/dheeraj-gupta-40b846196/"
              title="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href="https://leetcode.com/djgupta2000" title="Leetcode">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"
                />
              </svg>
            </a>
          </div>
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
