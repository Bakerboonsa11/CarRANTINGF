import { useState, useEffect } from "react";
import "./styles/nav.css";
import { useNavigate } from "react-router-dom";
import { useNav } from "../context/navContext"; // Import the custom hook
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const [user, setUser] = useState(() => {
    // Initialize user state from localStorage
    const userData = localStorage.getItem("user");
    return userData && userData !== "undefined" ? JSON.parse(userData) : null;
  });
  const [jwt, setjwt] = useState(() => {
    // Initialize user state from localStorage
    const jwt= localStorage.getItem("jwt");
    return jwt
  });

  const navigate = useNavigate();
  const { setDataAction } = useNav(); // Access dataAction from the context

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  const navigateToMyPro = () => {
    navigate("/myProfile");
  };

  const LogOut = async () => {
    // Simulate a logout request or clear user data
    localStorage.setItem("user", "undefined");
    localStorage.setItem("jwt","undefined")
    setDataAction(undefined);
    setUser(null); // Clear the user state
    setjwt(null)
    navigate("/");
  };

  useEffect(() => {
    // Sync user state with localStorage when it changes
    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem("user");
      setUser(updatedUser && updatedUser !== "undefined" ? JSON.parse(updatedUser) : null);
    };

    // Listen for storage changes
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  console.log("user in nav:", user);

  return (
    <nav className="navbar navbar-expand-lg" id="home">
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
             <HashLink className="nav-link" smooth to="#home">
               Home
             </HashLink>
            </li>
            <li className="nav-item list-item">
             
          
             <HashLink className="nav-link" smooth to="#testmonial">
               Testimonials
             </HashLink>
            </li>
            <li className="nav-item list-item">
              <HashLink className="nav-link" smooth to="#contact">
               contact
             </HashLink>
            </li>
            <li className="nav-item list-item">
             <HashLink className="nav-link" smooth to="#about">
               About
             </HashLink>
            </li>
          </ul>

          {/* Signup/Login or User Profile */}
          <div className="d-flex">
            {user ? (
              // If user exists, show the user profile with a circle image and logout button
              <>
                <img
                  onClick={navigateToMyPro}
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
                  onClick={LogOut}
                >
                  LogOut
                </button>
              </>
            ) : (
              // If no user, show SignUp and LogIn buttons
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

{{{{{{{{{}}}}}