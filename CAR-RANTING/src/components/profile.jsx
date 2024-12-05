import React, { useEffect, useState } from "react";
import { useNav } from "../context/navContext";
import axios from "axios";
const MyProfile = () => {
  const { user, setDataAction } = useNav();
   console.log("original user from database",user)
  const storedUser = JSON.parse(localStorage.getItem("user")) || user;
  console.log('original user fromlocal',storedUser)
  // Fallback for loading state
  if (!storedUser) {
    return <div>Loading...</div>;
  }

  

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(storedUser);
  console.log("formdata at firs must be original user",formData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("every time u change value",formData)
  };


  const handleSave = async() => { 
    try{
    const response=await axios.patch(`http://127.0.0.1:8000/api/v1/user/${storedUser._id}`,formData,{
      withCredentials:true
    })
    console.log("user after update",response.data.updatedTo)
    setDataAction(response.data.updatedTo);
    const user="colcollee"
    console.log(user)
    console.log(storedUser)
    localStorage.setItem("user", JSON.stringify(response.data.updatedTo));
    setIsEditing(false);
    }
    catch(error){
      console.log(error)
    }
  
  };



  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <div className="text-center">
            <img
              src="/images/bonsa.jpg"
              alt="Profile"
              className="rounded-circle mb-3"
              style={{ width: "120px", height: "120px" }}
            />
            <h2 className="card-title">{storedUser.name}</h2>
          </div>
          <hr />
          {!isEditing ? (
            <div>
              <p>{storedUser.about}</p>
              <h4>Contact</h4>
              <p>Email: {storedUser.email}</p>
              <p>Phone: {storedUser.phone}</p>
              <div className="text-center mt-4">
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn btn-primary"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h4>Edit Profile</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </form>
              <div className="text-center mt-4">
                <button onClick={handleSave} className="btn btn-success me-2">
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="btn btn-danger"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
