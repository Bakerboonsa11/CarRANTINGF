import Nav from './../components/navigation'

const SignUp = () => {
  return (
    <> 
    <Nav/>
     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "30rem", borderRadius: "15px" }}>
        <h2 className="text-center mb-4" style={{ color: "#172774" }}>
          Create an Account
        </h2>
        <form>
          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold" style={{ color: "#172774" }}>
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              style={{ borderColor: "#172774" }}
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold" style={{ color: "#172774" }}>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              style={{ borderColor: "#172774" }}
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label fw-bold" style={{ color: "#172774" }}>
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm your password"
              style={{ borderColor: "#172774" }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-100 text-white"
            style={{
              backgroundColor: "#172774",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
            }}
          >
            Sign Up
          </button>
        </form>

        {/* Log In Link */}
        <p className="text-center mt-3" style={{ color: "#172774" }}>
          Already have an account? <a href="/LogIn" className="text-decoration-none" style={{ color: "#172774" }}>Log In</a>
        </p>
      </div>
    </div>
    </>
   
  );
};

export default SignUp;
