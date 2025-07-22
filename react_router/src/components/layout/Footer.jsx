import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <small>
          &copy;2017 <strong>Awesome Company</strong>, All Rights Reserved
        </small>

        <nav className="footer-nav">
          <NavLink to="/top">Back to Top</NavLink>
          <NavLink to="/tos">Terms of Use</NavLink>
          <NavLink to="/privacy">Privacy</NavLink>
        </nav>
      </div>
    </footer>
  );
};
