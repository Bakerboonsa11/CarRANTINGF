import Nav from './../components/navigation'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Form, redirect ,useActionData, useNavigate} from 'react-router-dom';
import { useNav } from "../context/navContext";
export const signUpAction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get('password');
    const name = formData.get('name');
    const confirmPassword = formData.get('confirmPassword');
    
    const response = await axios.post('http://127.0.0.1:8000/api/v1/user/signUp', {
      email,
      name,
      password,
      confirmPassword
    });

    // Extract token from the response
    const user= response.data.user;
    console.log("user received:", user); // Logs the token

    // Redirect and pass the token in the state
    return {user}
  } catch (err) {
    console.error("Error during sign up:", err.message);
  }
};

const SignUp = () => {
    const user =useActionData()
    const { setDataAction } = useNav(); 
    const navigate=useNavigate()
   console.log('action adata',user)
//  const [logedIn,setLoggedIn]=useState(null)
//  const [isLoding,setIsLoding]=useState(true)
//     useEffect(()=>{
//         const signUpUser=async ()=>{
//            try{

//            const user=await axios.post('http://127.0.0.1/api/v1/user/SignUp')
//             console.log(user)
//            }
//            catch(error){
//              console.log(error)
//            }
//         }
      
//     },[])
            useEffect(()=>{
                if(user){
                    setDataAction(user)
                      navigate('/')
                }
              
            },[user])
  return (
    <> 
  
      <Nav/>
     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "30rem", borderRadius: "15px" }}>
        <h2 className="text-center mb-4" style={{ color: "#172774" }}>
          Create an Account
        </h2>
        <Form method='post' action='/SignUp'>

          {/* Email Field */}
           <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold" style={{ color: "#172774" }}>
             Name
            </label>
            <input
              type="text"
              name='name'
              className="form-control"
              id="name"
              placeholder="Enter your Name"
              style={{ borderColor: "#172774" }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold" style={{ color: "#172774" }}>
              Email Address
            </label>
            <input
              type="email"
              name='email'
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
              name='password'
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
              name='confirmPassword'
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
        </Form>

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
