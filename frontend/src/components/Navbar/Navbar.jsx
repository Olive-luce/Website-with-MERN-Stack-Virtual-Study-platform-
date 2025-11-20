import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const menuRef = useRef(null);
  const helpRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (helpRef.current && !helpRef.current.contains(event.target)) {
        setHelpOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const refreshPage = () => {
    setTimeout(() => window.location.reload(), 50);
  };

  return (
    <div className="navbar">

      <img src={assets.logo} alt="logo" className="logo" />

      <ul className="navbar-menu">

        {/* HOME */}
        <li className={menu === "home" ? "active" : ""}>
          <Link to="/" onClick={() => setMenu("home")}>Home</Link>
        </li>

        {/* MENU DROPDOWN */}
        <li
          ref={menuRef}
          className={`dropdown ${menu === "menu" ? "active" : ""}`}
          onClick={() => {
            setMenu("menu");
            setMenuOpen(!menuOpen);
            setHelpOpen(false);
          }}
        >
          Menu ▾
          {menuOpen && (
            <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
              <li>
                <Link to="/signin">Dashboard</Link>
              </li>
            </ul>
          )}
        </li>
        {/* HELP DROPDOWN */}
        <li
          ref={helpRef}
          className={`dropdown ${menu === "help" ? "active" : ""}`}
          onClick={() => {
            setMenu("help");
            setHelpOpen(!helpOpen);
            setMenuOpen(false);
          }}
        >
          Help ▾
          {helpOpen && (
            <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>

              <li>
                <Link
                  to="/Help"
                  onClick={(e) => {
                    e.stopPropagation();
                    refreshPage();
                  }}
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  to="/Help"
                  onClick={(e) => {
                    e.stopPropagation();
                    refreshPage();
                  }}
                >
                  Contact Support
                </Link>
              </li>

              <li>
                <Link
                  to="/Help"
                  onClick={(e) => {
                    e.stopPropagation();
                    refreshPage();
                  }}
                >
                  About
                </Link>
              </li>

            </ul>
          )}
        </li>

      </ul>

      <div className="navbar-right">
        <img src={assets.login} alt="login" className="login-icon" />
        <Link to="/signin">
          <button className="navbar-button">Sign In</button>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
