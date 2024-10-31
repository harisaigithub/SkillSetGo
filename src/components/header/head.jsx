import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./head.css";

const Layout = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  const handleLogoHover = () => {
    setLogoHovered(true);
  };

  const handleLogoMouseOut = () => {
    setLogoHovered(false);
  };

  return (
    <div>
      <div className="q1 armata">
        <nav className={`navbar ${hovered || logoHovered ? "no-border" : ""}`}>
          <div
            className="logo"
            onMouseEnter={handleLogoHover}
            onMouseLeave={handleLogoMouseOut}
          >
            <Link to="/">Skill Set Go</Link>
          </div>

          {/* Menu bar icon to toggle menu visibility */}
          <i className="fa-solid fa-bars iconic" onClick={toggleMenu}></i>

          {/* Navigation Links */}
          <div
            className={`nav-links ${menuVisible ? "" : "hidden"}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseOut}
          >
            <div className="nav-item">
              <li>
                <Link to="/LinkedIn" onClick={closeMenu}>LinkedIn</Link>
              </li>
            </div>
            <div className="nav-item">
              <li>
                <Link to="/GitHub" onClick={closeMenu}>GitHub</Link>
              </li>
            </div>
            <div className="nav-item">
              <li>
                <Link to="/Portfolio" onClick={closeMenu}>Portfolio</Link>
              </li>
            </div>
            <div className="nav-item">
              <li>
                <Link to="/Links" onClick={closeMenu}>Useful Links</Link>
              </li>
            </div>
            <div className="nav-item">
              <li>
                <Link to="/About" onClick={closeMenu}>About</Link>
              </li>
            </div>
          </div>
        </nav>

        <div
          className={`nline ${logoHovered ? "green" : hovered ? "red" : ""}`}
          style={{ display: logoHovered || hovered ? "flex" : "none" }}
        ></div>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Layout;
