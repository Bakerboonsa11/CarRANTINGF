import Nav from './../components/navigation'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useNav } from "../context/navContext";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null); // For error display
  const navigate = useNavigate();
  const { setDataAction } = useNav();

  // Handle the login action when the button is clicked
  const handleLogin = async () => {
    try {
      console.log("Email:", email, "Password:", password);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/user/signIn",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      const user = response.data.user;

      // Save user to localStorage immediately
      localStorage.setItem("user", JSON.stringify(user));

      setDataAction(user); // Update context
      navigate("/"); // Redirect to home page

    } catch (error) {
      console.log("Error during login:", error);
      setErrorMessage("Login failed. Please try again.");
    }
  };

  return (
    <>
      <Nav />
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: "#f4f4f4" }}
      >
        <div
          className="card shadow p-4"
          style={{ width: "400px", borderRadius: "10px" }}
        >
          <h2
            className="text-center mb-4"
            style={{ color: "#172774", fontWeight: "bold" }}
          >
            Login
          </h2>

          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}

          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                border: `2px solid #172774`,
                borderRadius: "5px",
              }}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                border: `2px solid #172774`,
                borderRadius: "5px",
              }}
            />
          </div>

          <button
            type="button"
            className="btn btn-block w-100"
            onClick={handleLogin}
            style={{
              backgroundColor: "#172774",
              color: "#fff",
              fontWeight: "bold",
              border: "none",
              padding: "10px 0",
              borderRadius: "5px",
            }}
          >
            Login
          </button>

          <p className="text-center mt-4">
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#172774",
                fontWeight: "bold",
              }}
            >
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
