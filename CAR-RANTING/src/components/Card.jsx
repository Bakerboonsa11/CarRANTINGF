import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import  { useState, useEffect } from 'react';
import { faMapMarkerAlt, faCalendarAlt, faClock,faGear, faChair, faGasPump, faBolt, faCar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";

import './styles/card.css';

const Card =() => {
  const [cars,setCars]=useState([]);
  const [loder,setLoder]=useState(true)
  useEffect(()=>{
   const  featchedCar=async ()=>{
      try{
        const response =await axios.get('http://127.0.0.1:8000/api/v1/car')
        setCars(response.data.instanceFiltered)
        console.log(response.data)
        setLoder(false)
      }
      catch(error){
        console.log(error)
        setLoder(false)
      }
   }

   featchedCar()
  

  },[])

  if(loder){
    return <div>Loder</div>
  }
  return (
    
    <div className="card-wrapper">
    
      <div className="container card_container">
        <div className="row justify-content-around">
            {
              cars.map((car)=>(
              <div key={car._id} className="col-lg-4 col-md-6 mb-4 each-card">
                  <div className="card card-custom" style={{ width: '100%' }}>
                          <img
                            src={`http://127.0.0.1:8000/images/cars/${car.images[0]}`}
                            className="card-img-top card-img-custom"
                            alt="Card image"
                          />
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <h5 className="card-title">{car.name.toUpperCase()}</h5>
                              <div>**********</div>
                            </div>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{`${car.name} with __${car.color} Color`}</h6>
                            <p className="card-text price-text">{`$${car.pricePerDay}`}</p>
                        <div className="d-flex justify-content-between">
                                {/* Feature 1: Manual */}
                                <div className="d-flex flex-column mb-3 card-icon-to-title">
                                  <span className="card-icon why-icon">
                                    <FontAwesomeIcon icon={faGear} className="my-icons" /> {/* Replace with your desired icon */}
                                  </span>
                                  <span className="card-text">{car.transmission}</span>
                                </div>

                                {/* Feature 2: Seats */}
                                <div className="d-flex flex-column mb-3 card-icon-to-title">
                                  <span className="card-icon">
                                    <FontAwesomeIcon icon={faChair} className="my-icons" /> {/* Replace with your desired icon */}
                                  </span>
                                  <span className="card-text">{`${car.numberOfSeat} Seat`}</span>
                                </div>

                                {/* Feature 3: Gas */}
                                <div className="d-flex flex-column mb-3 card-icon-to-title">
                                  <span className="card-icon">
                                    <FontAwesomeIcon icon={faGasPump} className="my-icons" /> {/* Replace with your desired icon */}
                                  </span>
                                  <span className="card-text">{car.fuelType}</span>
                                </div>

                                {/* Feature 4: Car HP */}
                                <div className="d-flex flex-column mb-3 card-icon-to-title">
                                  <span className="card-icon">
                                    <FontAwesomeIcon icon={faBolt} className="my-icons"/> {/* Replace with your desired icon */}
                                  </span>
                                  <span className="card-text">{`${car.mileage}HP`}</span>
                                </div>

                                {/* Feature 5: Front-wheel Drive */}
                                <div className="d-flex flex-column mb-3 card-icon-to-title">
                                  <span className="card-icon">
                                    <FontAwesomeIcon icon={faCar} className="my-icons"/> {/* Replace with your desired icon */}
                                  </span>
                                  <span className="card-text">Front</span>
                                </div>
                           </div>

                            <Link to={`/detail/${car._id}`} className="card-link btn card-link se-detail-btn">See Detail</Link>
                          </div>
                  </div>
          </div >
              )
                      
              )
            }
       
         
         
           
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Card;