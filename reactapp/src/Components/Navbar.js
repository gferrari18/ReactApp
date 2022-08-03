import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from ".//Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleclick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo"></Link>
          <i class="fa-solid fa-dumbbell" />
          <div classNname="menu-icon" onClick={handleclick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About us
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">REGISTER</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
