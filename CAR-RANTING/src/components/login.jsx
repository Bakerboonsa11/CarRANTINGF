import Nav from './../components/navigation'

const Login = () => {
  return (
    <>
    <Nav/>
     <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#f4f4f4" }}
    >
      <div className="card shadow p-4" style={{ width: "400px", borderRadius: "10px" }}>
        <h2
          className="text-center mb-4"
          style={{ color: "#172774", fontWeight: "bold" }}
        >
          Login
        </h2>
        <form>
          {/* Email Input */}
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
              style={{
                border: `2px solid #172774`,
                borderRadius: "5px",
              }}
            />
          </div>

          {/* Password Input */}
          <div className="form-group mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
              style={{
                border: `2px solid #172774`,
                borderRadius: "5px",
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-block w-100"
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
        </form>

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
