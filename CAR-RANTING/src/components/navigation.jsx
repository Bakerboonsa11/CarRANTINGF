import { useState } from "react";
import "./styles/nav.css";

const Nav = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container nav-container">
        {/* Brand Logo */}
        <img className="navbar-brand logo" src="/images/brand1.png" alt="brand" />

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarTogglerDemo02"
          aria-expanded={!isNavbarCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${
            isNavbarCollapsed ? "" : "show"
          }`}
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item list-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item list-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item list-item">
              <a className="nav-link" href="#">
                Testimonials
              </a>
            </li>
            <li className="nav-item list-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>

          {/* Signup/Login Buttons */}
          <div className="d-flex">
            <button
              className="btn signUp"
              type="button"
              aria-label="SignUp"
            >
              SignUp
            </button>
            <button
              className="btn signIn"
              type="button"
              aria-label="LogIn"
            >
              LogIn
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
