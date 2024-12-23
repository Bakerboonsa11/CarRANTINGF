import Nav from "./navigation";
import Footer from "./Footer";
import { Navigate, redirect, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { FaStar } from 'react-icons/fa';  // Import the star icon from React Icons

import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import '/home/bonsa/BIGPROJECT/FRONT-CARRAN/CAR-RANTING/src/components/styles/carDetail.css'
export const CarLoader = async ({ params }) => {
  const token=localStorage.getItem("jwt")
  const id =params.id
  try {
    const carRes = await axios.get(
      `https://carranting-qqgl.onrender.com/api/v1/car/${id}`,
      { withCredentials: true,
        headers:{
          Authorization:`Bearer ${token}`
        }
       }
    );
    const car = carRes.data.data;
 
    return { car,id };
  } catch (error) {
    console.error("Error fetching car data:", error.response || error.message);
    throw redirect('LognIn')
  }
};
 const stripePromise=loadStripe('pk_test_51QWC7ZF3rcoABgjIQqQx3eY9Ad5YJyB3SwxsaoohzOfehLXplcCzlo4O4Shck8dUhMjfaplbpik41jkCotVpakne00BNt2vvzF')
const CarDetail = () => {
  const [reviews, setReviews] = useState([]);
  const [currentRating, setCurrentRating] = useState(0);
  const [currentReviews, setCurrentReviews] = useState(0);
  const [reviewText, setReviewText] = useState(""); // For the review textarea
  const [rating, setRating] = useState(0); // For the star rating input
  const { car, id } = useLoaderData();
  const [stripeLoader,setStripeLoader]=useState(false);
  const [stripeError,setStripeError]=useState(false)
  console.log("Car is:", car);
  console.log("ID is:", id);

  // UseEffect that runs only once


  // UseEffect for reviews fetching
  useEffect(() => {
    const fetchReviews = async () => {
      console.log("Fetching reviews...");
      try {
        const token = localStorage.getItem("jwt"); // Retrieve token
        console.log("id,token is ",id,token)
        const reviewsRes = await axios.get(
          `https://carranting-qqgl.onrender.com/api/v1/car/${id}/Review`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
               cache: 'no-store' 
             
            },
          }
        );
        const reviewsData = reviewsRes.data.reviews; // Assuming the reviews are in the `data` property
        console.log("Reviews fetched:", reviewsData);

        // Update state with fetched reviews
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews:", error.message);
      }
    };

    fetchReviews();
  }, [car]); // Ensure this runs only once, not dependent on `id`

  // Rating and review count animations
  useEffect(() => {
    let ratingInterval;
    let reviewInterval;

    if (currentRating < car.RatingAvrg) {
      ratingInterval = setInterval(() => {
        setCurrentRating((prev) =>
          prev < car.RatingAvrg ? prev + 0.1 : car.RatingAvrg
        );
      }, 50);
    }

    if (currentReviews < car.RatingQuantity) {
      reviewInterval = setInterval(() => {
        setCurrentReviews((prev) =>
          prev < car.RatingQuantity ? prev + 1 : car.RatingQuantity
        );
      }, 100);
    }

    return () => {
      clearInterval(ratingInterval);
      clearInterval(reviewInterval);
    };
  }, [car.RatingAvrg, car.RatingQuantity, currentRating, currentReviews]);

  const handleSubmitReview = async(e) => {
   try{
     e.preventDefault();
     const token = localStorage.getItem("jwt"); // Retrieve token
    console.log("Review submitted:", { rating, reviewText });
    console.log(token,id)
    alert("Thank you for your review!");
    const newReview=await axios.post(`https://carranting-qqgl.onrender.com/api/v1/car/${id}/Review/`,{rating,review:reviewText},{
      withCredentials:true,
      headers:{Authorization:`Bearer ${token}`}
     })
    setReviewText(""); // Reset review text
    setRating(0); // Reset rating
   }
   catch(error){
    console.log(error.message)
   }
  };

  const handleBooking=async()=>{
    try{
     setStripeLoader(true)
      const token = localStorage.getItem("jwt");
      const response= await axios.get(`https://carranting-qqgl.onrender.com/api/v1/bookings/cheach-session/${id}`,
       { withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
               cache: 'no-store' 
             
            }, })
     const sessionId = await response.data.session.id
     console.log("id in stripe is ",sessionId)

     const stripe=await stripePromise
     const result = await stripe.redirectToCheckout({ sessionId });
    
      if (result.error) {
        setStripeError(result.error.message);
      }
   
    }
    catch(error){
        setStripeError('Failed to create checkout session. Please try again.');
      console.error(error);
    }
     setStripeLoader(false)

  
  }

  return (
    <>
      <Nav />
      <div className="car-detail-container container my-5">
        <div className="row">
          {/* Car Images */}
          <div className="col-lg-6 mb-4">
            <img
              src={`https://carranting-qqgl.onrender.com/images/cars/${car.images[0]}`}
              alt={car.name}
              className="w-100 rounded shadow"
              style={{ height: "auto" }}
            />
          <div className="row mt-3">
            {car.images && car.images.length > 1 ? (
              car.images.slice(1).map((img, index) => (
                <div className="col-6 mb-3" key={index}>
                  <img
                    src={`https://carranting-qqgl.onrender.com/images/cars/${img}`}
                    alt={`Car thumbnail ${index}`}
                    className="w-100 rounded"
                  />
                </div>
              ))
            ) : (
              <p>No additional images available.</p>
            )}
         </div>

          </div>

          {/* Car Details & Reviews */}
          <div className="col-lg-6">
            <div className="card p-4 shadow">
              {/* Car Details */}
              <h2 className="mb-3 text-primary">{car.name}</h2>
              <p>
                <span className="badge bg-info me-2">{car.make}</span>
                <span className="badge bg-secondary">{car.year}</span>
              </p>
              <h4 className="text-success mb-3">${car.pricePerDay} / day</h4>
              <p>{car.description}</p>

              <ul className="list-group mb-4">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Mileage:</span>
                  <strong>{car.mileage.toLocaleString()} km</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Fuel Type:</span>
                  <strong>{car.fuelType}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Transmission:</span>
                  <strong>{car.transmission}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Color:</span>
                  <strong>{car.color}</strong>
                </li>
              </ul>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h5>
                    Rating:{" "}
                    <span className="badge bg-warning text-dark">
                      {currentRating.toFixed(1)} ★
                    </span>{" "}
                    ({currentReviews} Reviews)
                  </h5>
                </div>
                <button className="btn btn-primary btn-lg" onClick={handleBooking}>Book Now</button>
              </div>

              {/* Review Section */}
              <div className="review-section mt-4">
                <h3 className="text-primary mb-3">Leave a Review</h3>
                <form onSubmit={handleSubmitReview}>
                  {/* Star Rating */}
                  <div className="d-flex justify-content-center mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        onClick={() => setRating(star)}
                        style={{
                          fontSize: "1.5rem",
                          cursor: "pointer",
                          color: star <= rating ? "#ffc107" : "#e4e5e9",
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  {/* Review Text */}
                  <textarea
                    className="form-control shadow-sm mb-3"
                    rows="3"
                    placeholder="Write your review here..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    required
                  ></textarea>
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-success btn-lg shadow w-100"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5" style={{width:"50%",overflowX:"hidden"}}>
      
 <div className="reviews-container mt-4">
  <h2 className="text-center mb-4">Customer Reviews</h2>
  <div className="row">
    {reviews.length > 0 ? (
      reviews.map((review, index) => {
        const roundedRating = Math.round(review.rating); // Round the rating
        return (
          <div
            className="col-md-12 d-flex align-items-center mb-4 review-item"
            key={index}
          >
            {/* Profile Image */}
            <img
              src="/images/bonsa.jpg"
              alt={review.name}
              className="rounded-circle me-3 profile-image"
            />
            {/* Review Content */}
            <div className="flex-grow-1 d-flex justify-content-between align-items-center review-content">
              {/* Review */}
              <h5 className="mb-0">{review.review}</h5>

              {/* Rating */}
              <div className="text-warning d-flex rating-stars">
                {Array.from({ length: roundedRating }).map((_, starIndex) => (
                  <span key={starIndex} className="star">
                    <FaStar />
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <p className="text-center text-muted">No reviews available yet.</p>
    )}
  </div>
</div>


    </div>
      <Footer />
    </>
  );
};

export default CarDetail;




{{{{{{{}}}}}}}