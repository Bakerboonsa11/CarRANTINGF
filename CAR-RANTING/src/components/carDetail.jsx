import Nav from "./navigation";
import Footer from "./Footer";
import { redirect, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

export const CarLoader = async ({ params }) => {
  const token=localStorage.getItem("jwt")
  try {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/v1/car/${params.id}`,
      { withCredentials: true,
        headers:{
          Authorization:`Bearer ${token}`
        }
       }
    );
    const car = res.data.data;
    return { car };
  } catch (error) {
    console.error("Error fetching car data:", error.response || error.message);
    throw redirect('LognIn')
  }
};

const CarDetail = () => {
    const [reviews, setReviews] = useState([
    { id: 1, name: "John Doe", rating: 5, comment: "Amazing car! Great experience.", timestamp: "2024-12-05T12:34:00" },
    { id: 2, name: "Jane Smith", rating: 4, comment: "Good service overall.", timestamp: "2024-12-04T15:22:00" },
    { id: 3, name: "Alex Johnson", rating: 3, comment: "Decent, but could be better.", timestamp: "2024-12-03T10:15:00" },
  ]);
  const [currentRating, setCurrentRating] = useState(0);
  const [currentReviews, setCurrentReviews] = useState(0);
  const [reviewText, setReviewText] = useState(""); // For the review textarea
  const [rating, setRating] = useState(0); // For the star rating input
  const { car } = useLoaderData();

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

  const handleSubmitReview = (e) => {
    e.preventDefault();
    console.log("Review submitted:", { rating, reviewText });
    alert("Thank you for your review!");
    setReviewText(""); // Reset review text
    setRating(0); // Reset rating
  };

  return (
    <>
      <Nav />
      <div className="car-detail-container container my-5">
        <div className="row">
          {/* Car Images */}
          <div className="col-lg-6 mb-4">
            <img
              src="/images/beuty.png"
              alt={car.name}
              className="w-100 rounded shadow"
              style={{ height: "auto" }}
            />
            <div className="row mt-3">
              {car.images.slice(1).map((img, index) => (
                <div className="col-6 mb-3" key={index}>
                  <img
                    src="/images/beuty.png"
                    alt={`Car thumbnail ${index}`}
                    className="w-100 rounded"
                  />
                </div>
              ))}
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
                <button className="btn btn-primary btn-lg">Book Now</button>
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
      <h3 className="text-primary mb-4">Customer Reviews</h3>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div className="review-card mb-4 p-4 shadow-sm rounded" key={review.id}>
            <div className="d-flex align-items-center mb-3">
              <div
                className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
                style={{
                  width: "40px",
                  height: "40px",
                  fontSize: "1.5rem",
                }}
              >
                {review.name[0]}
              </div>
              <div className="ms-3">
                <h5 className="mb-1">{review.name}</h5>
                <div className="d-flex">
                  <div className="text-warning">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </div>
                <small className="text-muted">{new Date(review.timestamp).toLocaleString()}</small>
              </div>
            </div>
            <p>{review.comment}</p>
            <div className="reply-section mt-3">
              <button className="btn btn-outline-primary btn-sm">Reply</button>
              {/* Add nested replies here if needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
      <Footer />
    </>
  );
};

export default CarDetail;


{{{{{{