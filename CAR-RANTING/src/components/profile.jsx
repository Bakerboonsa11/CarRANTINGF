import React, { useState } from "react";
import { useNav } from "../context/navContext";
import axios from "axios";
import { useNavigate ,useLoaderData} from "react-router-dom";
import './styles/profile.css';
export const myCarLoader=async()=>{
    console.log('entered the booking')
      const token = localStorage.getItem("jwt");
      try{
       const carsBooked = await axios.get(
      `http://127.0.0.1:8000/api/v1/car/getMyCars`,
      { withCredentials: true,
        headers:{
          Authorization:`Bearer ${token}`
        }
       }
    );
        console.log('bookings are ',carsBooked.data.bookings)
      const myCars=carsBooked.data.bookings
      return {myCars}
      
      }
      catch(error){
        console.log(error.message)
      }
}
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
  const {myCars}=useLoaderData()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  console.log('bookings from loader is ',myCars)
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
      navigate(0);
    } catch (error) {
      console.error(error);
    }
  };

  const cartItems = [
    { id: 1, name: "Product A", price: "$25", image: "default-product.jpg" },
    { id: 2, name: "Product B", price: "$50", image: "default-product.jpg" },
    { id: 3, name: "Product C", price: "$15", image: "default-product.jpg" },
  ];

 return (
  <div className="p2-profile-container">
    <div className="p2-profile-card">
      <div className="p2-profile-header">
        <img
          src={
            formData.photo && formData.photo !== "null"
              ? `http://127.0.0.1:8000/images/users/${formData.photo}`
              : "http://127.0.0.1:8000/images/default.jpg"
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

    {/* Cart Items Section */}
    <div className="p2-cart-container">
      <h2 className="p2-cart-title">My Cart</h2>
      <div className="p2-cart-items">
       {myCars.map((iteam) => (
  <div key={iteam.car._id} className="p2-cart-item">
    <img
      src={`http://127.0.0.1:8000/images/cars/${iteam.car.images[0]}`
          
      }
      alt={iteam.car.name}
      className="p2-cart-item-image"
    />
    <div className="p2-cart-item-details">
      <h4 className="p2-cart-item-name">{iteam.car.name}</h4>
      <p className="p2-cart-item-price">{`${iteam.paidPrice} $`|| "N/A"}</p>
    </div>
  </div>
))}

      </div>
    </div>
  </div>
);

};

export default MyProfile;
