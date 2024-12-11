import React, { useState } from "react";
import { useNav } from "../context/navContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "./MyProfile.css"; // Import the new CSS file
import './styles/profile.css'

const MyProfile = () => {
  const navigate = useNavigate();
  const { user, setDataAction } = useNav();
  let storedUser = JSON.parse(localStorage.getItem("user")) || user;

  if (!storedUser) {
    return <div>Loading...</div>;
  }

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(storedUser);
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("jwt");
      const formDataToSend = new FormData();

      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);

      if (file) {
        formDataToSend.append("photo", file);
      }

      const response = await axios.patch(
        `http://127.0.0.1:8000/api/v1/user/updateMe`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      const updatedUser = response.data.updateeduser;
      setFormData(updatedUser);
      setDataAction(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setIsEditing(false);
      navigate("/");
      navigate(0)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={
              formData.photo && formData.photo !== "null"
                ? `http://127.0.0.1:8000/images/users/${formData.photo}`
                : "http://127.0.0.1:8000/images/default.jpg"
            }
            alt="Profile"
            className="profile-avatar"
          />
          <h2 className="profile-name">{formData.name}</h2>
        </div>
        <hr className="profile-divider" />
        {!isEditing ? (
          <div className="profile-details">
            <p className="profile-about">{formData.about}</p>
            <h4 className="profile-section-title">Contact</h4>
            <p className="profile-info">Email: {formData.email}</p>
            <p className="profile-info">Phone: {formData.phone}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="btn profile-btn"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <div className="profile-edit-form">
            <h4 className="profile-section-title">Edit Profile</h4>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Upload Avatar</label>
                <input
                  type="file"
                  name="photo"
                  onChange={handleFileChange}
                  className="form-input"
                />
              </div>
            </form>
            <div className="profile-actions">
              <button onClick={handleSave} className="btn save-btn">
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="btn cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
