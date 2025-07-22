import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="site-header">
      <div className="site-identity">
        <h1>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </h1>
      </div>
      <nav className="site-navigation">
        <ul className="nav">
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="movie"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
