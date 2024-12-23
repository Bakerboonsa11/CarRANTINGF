import React, { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import axios from "axios";
import { useNav } from "../context/navContext";
import "./styles/profile.css";

// Loader Function for fetching cars
export const myCarLoader = async () => {
  console.log("Entered the booking loader...");
  const token = localStorage.getItem("jwt");

  try {
    const carsBooked = await axios.get(
      `https://carranting-qqgl.onrender.com/api/v1/car/getMyCars`,
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Bookings are:", carsBooked.data.bookings);

    // Returning the bookings
    return { myCars: carsBooked.data.bookings || [] }; // Ensure it's always an array
  } catch (error) {
    console.error("Error fetching bookings:", error.message);
    return { myCars: [] }; // Return empty array in case of error
  }
};

const MyProfile = () => {
  const navigate = useNavigate();
  const { user, setDataAction } = useNav();
  let storedUser = JSON.parse(localStorage.getItem("user")) || user;

  // Graceful fallback when user is not loaded
  if (!storedUser) {
    return <div>Loading...</div>;
  }

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(storedUser);
  const [file, setFile] = useState(null);

  // Use loader data for myCars
  const { myCars } = useLoaderData(); // myCars will always be defined

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
        `https://carranting-qqgl.onrender.com/api/v1/user/updateMe`,
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
      navigate(0);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="p2-profile-container">
      {/* Profile Section */}
      <div className="p2-profile-card">
        <div className="p2-profile-header">
          <img
            src={
              formData.photo && formData.photo !== "null"
                ? `https://carranting-qqgl.onrender.com/images/users/${formData.photo}`
                : "https://carranting-qqgl.onrender.com/images/default.jpg"
            }
            alt="Profile"
            className="p2-profile-avatar"
          />
          <h2 className="p2-profile-name">{formData.name}</h2>
        </div>
        <hr className="p2-profile-divider" />
        {!isEditing ? (
          <div className="p2-profile-details">
            <p className="p2-profile-about">{formData.about}</p>
            <h4 className="p2-profile-section-title">Contact</h4>
            <p className="p2-profile-info">Email: {formData.email}</p>
            <p className="p2-profile-info">Phone: {formData.phone}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="p2-btn p2-profile-btn"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <div className="p2-profile-edit-form">
            <h4 className="p2-profile-section-title">Edit Profile</h4>
            <form>
              <div className="p2-form-group">
                <label className="p2-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p2-form-input"
                />
              </div>
              <div className="p2-form-group">
                <label className="p2-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p2-form-input"
                />
              </div>
              <div className="p2-form-group">
                <label className="p2-label">Upload Avatar</label>
                <input
                  type="file"
                  name="photo"
                  onChange={handleFileChange}
                  className="p2-form-input"
                />
              </div>
            </form>
            <div className="p2-profile-actions">
              <button onClick={handleSave} className="p2-btn p2-save-btn">
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="p2-btn p2-cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* My Cars Section */}
      <div className="p2-cart-container">
        <h2 className="p2-cart-title">My Cart</h2>
        {myCars && myCars.length > 0 ? (
          <div className="p2-cart-items">
            {myCars.map((item) => (
              <div key={item.car._id} className="p2-cart-item">
                <img
                  src={`https://carranting-qqgl.onrender.com/images/cars/${item.car.images[0]}`}
                  alt={item.car.name}
                  className="p2-cart-item-image"
                />
                <div className="p2-cart-item-details">
                  <h4 className="p2-cart-item-name">{item.car.name}</h4>
                  <p className="p2-cart-item-price">
                    {`${item.paidPrice} $` || "N/A"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="p2-cart-empty">No cars booked yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
