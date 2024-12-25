import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from 'react';
import { faMapMarkerAlt, faCalendarAlt, faClock, faGear, faChair, faGasPump, faBolt, faCar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";

import './styles/card.css';

const Card = () => {
  const [cars, setCars] = useState([]);
  const [loader, setLoader] = useState(true);
  const RatingArray = [1, 2, 3, 4, 5];

  useEffect(() => {
    const fetchedCar = async () => {
      try {
        const response = await axios.get('https://carranting-qqgl.onrender.com/api/v1/car', {
          withCredentials: true,  // Add this to include credentials in the request
        });

        console.log('the cars are ',response.data)
        if (response.data && response.data.instanceFiltered) {
          setCars(response.data.instanceFiltered);
          console.log("ratingavr", response.data.instanceFiltered[0]);
          console.log(response.data);
        } else {
          console.log("No cars data found.");
        }
        setLoader(false);
      } catch (error) {
        console.log("cars error", error.message);
        setLoader(false);
      }
    }

    fetchedCar();

  }, []);

  if (loader) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(cars) || cars.length === 0) {
    return <div>No cars available</div>;
  }

  return (
    <div className="card-wrapper">
      <div className="container card_container">
        <div className="row justify-content-around">
          {cars.map((car) => (
            <div key={car._id} className="col-lg-4 col-md-6 mb-4 each-card">
              <div className="card card-custom" style={{ width: '100%' }}>
                <img
                  src={`https://carranting-qqgl.onrender.com/images/cars/${car.images[0]}`}
                  className="card-img-top card-img-custom"
                  alt="Car"
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">{car.name.toUpperCase()}</h5>
                    <div>
                      {RatingArray.map((rate, index) => (
                        <span key={index} className={rate <= car.RatingAvrg ? "blue_star" : "white_star"}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <h6 className="card-subtitle mb-2 text-body-secondary">{`${car.name} with ${car.color} Color`}</h6>
                  <p className="card-text price-text">{`$${car.pricePerDay}`}</p>

                  <div className="d-flex justify-content-between">
                    {/* Feature 1: Transmission */}
                    <div className="d-flex flex-column mb-3 card-icon-to-title">
                      <span className="card-icon why-icon">
                        <FontAwesomeIcon icon={faGear} className="my-icons" />
                      </span>
                      <span className="card-text">{car.transmission}</span>
                    </div>

                    {/* Feature 2: Seats */}
                    <div className="d-flex flex-column mb-3 card-icon-to-title">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faChair} className="my-icons" />
                      </span>
                      <span className="card-text">{`${car.numberOfSeat} Seat`}</span>
                    </div>

                    {/* Feature 3: Fuel Type */}
                    <div className="d-flex flex-column mb-3 card-icon-to-title">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faGasPump} className="my-icons" />
                      </span>
                      <span className="card-text">{car.fuelType}</span>
                    </div>

                    {/* Feature 4: Mileage */}
                    <div className="d-flex flex-column mb-3 card-icon-to-title">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faBolt} className="my-icons" />
                      </span>
                      <span className="card-text">{`${car.mileage} HP`}</span>
                    </div>

                    {/* Feature 5: Drive Type */}
                    <div className="d-flex flex-column mb-3 card-icon-to-title">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faCar} className="my-icons" />
                      </span>
                      <span className="card-text">Front-wheel Drive</span>
                    </div>
                  </div>

                  <Link to={`/detail/${car._id}`} className="card-link btn card-link se-detail-btn">See Detail</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
