import { useState } from "react";
import "./styles/nav.css";
import { useNavigate } from "react-router-dom";
import { useNav } from "../context/navContext"; // Import the custom hook

const Nav = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const navigate = useNavigate();
  const { user } = useNav(); // Access dataAction from the context

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  console.log("user in nav:", user);

  return (
    <nav className="navbar navbar-expand-lg">
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

          {/* Signup/Login or User Profile */}
          <div className="d-flex">
            {user? (
              // If dataAction exists, show the user profile with a circle image and logout button
              <>
                <img
                  src="/images/bonsa.jpg" // Replace with actual user image URL or avatar
                  alt="User"
                  className="user-profile-img"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                <button
                  className="btn logout"
                  type="button"
                  aria-label="LogOut"
                  onClick={() => {
                    console.log("Logging out...");
                    navigate("/LogIn"); // Redirect to LogIn page after logout
                  }}
                >
                  LogOut
                </button>
              </>
            ) : (
              // If no dataAction, show SignUp and LogIn buttons
              <>
                <button
                  className="btn signUp"
                  type="button"
                  aria-label="SignUp"
                  onClick={() => navigate("/SignUp")}
                >
                  SignUp
                </button>
                <button
                  className="btn signIn"
                  type="button"
                  aria-label="LogIn"
                  onClick={() => navigate("/LogIn")}
                >
                  LogIn
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
