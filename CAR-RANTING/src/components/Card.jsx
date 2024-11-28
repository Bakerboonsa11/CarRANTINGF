import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faCalendarAlt, faClock,faGear, faChair, faGasPump, faBolt, faCar } from "@fortawesome/free-solid-svg-icons";



import './styles/card.css';

const Card = () => {
  return (
    <div className="card-wrapper">
      <div className="container card_container">
        <div className="row justify-content-around">
          <div className="col-lg-4 col-md-6 mb-4 each-card">
            <div className="card card-custom" style={{ width: '100%' }}>
              <img
                src="/images/indigo.png" 
                className="card-img-top card-img-custom"
                alt="Card image"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">Card title</h5>
                  <div>**********</div>
                </div>
                <h6 className="card-subtitle mb-2 text-body-secondary">FORD FOCUS</h6>
                <p className="card-text price-text">$29/DAY</p>
            <div className="d-flex justify-content-between">
                    {/* Feature 1: Manual */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faGear} className="my-icons" /> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">Manual</span>
                    </div>

                    {/* Feature 2: Seats */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faChair} className="my-icons" /> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">5 Seats</span>
                    </div>

                    {/* Feature 3: Gas */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faGasPump} className="my-icons" /> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">Gas</span>
                    </div>

                    {/* Feature 4: Car HP */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faBolt} className="my-icons"/> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">1600 HP</span>
                    </div>

                    {/* Feature 5: Front-wheel Drive */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faCar} className="my-icons"/> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">Front</span>
                    </div>
            </div>

                <a href="#" className="card-link btn card-link">See Detail</a>
              </div>
            </div>
          </div>
           <div className="col-lg-4 col-md-6 mb-4 each-card">
            <div className="card card-custom" style={{ width: '100%' }}>
              <img
                src="/images/indigo.png" 
                className="card-img-top card-img-custom"
                alt="Card image"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">Card title</h5>
                  <div>**********</div>
                </div>
                <h6 className="card-subtitle mb-2 text-body-secondary">FORD FOCUS</h6>
                <p className="card-text price-text">$29/DAY</p>
            <div className="d-flex justify-content-between">
                    {/* Feature 1: Manual */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faGear} className="my-icons" /> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">Manual</span>
                    </div>

                    {/* Feature 2: Seats */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faChair} className="my-icons" /> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">5 Seats</span>
                    </div>

                    {/* Feature 3: Gas */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faGasPump} className="my-icons" /> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">Gas</span>
                    </div>

                    {/* Feature 4: Car HP */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faBolt} className="my-icons"/> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">1600 HP</span>
                    </div>

                    {/* Feature 5: Front-wheel Drive */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faCar} className="my-icons"/> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">Front</span>
                    </div>
            </div>

                <a href="#" className="card-link btn card-link">See Detail</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 each-card">
            <div className="card card-custom" style={{ width: '100%' }}>
              <img
                src="/images/indigo.png" 
                className="card-img-top card-img-custom"
                alt="Card image"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">Card title</h5>
                  <div>**********</div>
                </div>
                <h6 className="card-subtitle mb-2 text-body-secondary">FORD FOCUS</h6>
                <p className="card-text price-text">$29/DAY</p>
            <div className="d-flex justify-content-between">
                    {/* Feature 1: Manual */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faGear} className="my-icons" /> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">Manual</span>
                    </div>

                    {/* Feature 2: Seats */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faChair} className="my-icons" /> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">5 Seats</span>
                    </div>

                    {/* Feature 3: Gas */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faGasPump} className="my-icons" /> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">Gas</span>
                    </div>

                    {/* Feature 4: Car HP */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faBolt} className="my-icons"/> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">1600 HP</span>
                    </div>

                    {/* Feature 5: Front-wheel Drive */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faCar} className="my-icons"/> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">Front</span>
                    </div>
            </div>

                <a href="#" className="card-link btn card-link">See Detail</a>
              </div>
            </div>
          </div>
           <div className="col-lg-4 col-md-6 mb-4 each-card">
            <div className="card card-custom" style={{ width: '100%' }}>
              <img
                src="/images/indigo.png" 
                className="card-img-top card-img-custom"
                alt="Card image"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">Card title</h5>
                  <div>**********</div>
                </div>
                <h6 className="card-subtitle mb-2 text-body-secondary">FORD FOCUS</h6>
                <p className="card-text price-text">$29/DAY</p>
            <div className="d-flex justify-content-between">
                    {/* Feature 1: Manual */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faGear} className="my-icons" /> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">Manual</span>
                    </div>

                    {/* Feature 2: Seats */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faChair} className="my-icons" /> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">5 Seats</span>
                    </div>

                    {/* Feature 3: Gas */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faGasPump} className="my-icons" /> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">Gas</span>
                    </div>

                    {/* Feature 4: Car HP */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faBolt} className="my-icons"/> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">1600 HP</span>
                    </div>

                    {/* Feature 5: Front-wheel Drive */}
                    <div className="d-flex flex-column mb-3">
                      <span className="card-icon">
                        <FontAwesomeIcon icon={faCar} className="my-icons"/> {/* Replace with your desired icon */}
                      </span>
                      <span className="card-text">Front</span>
                    </div>
            </div>

                <a href="#" className="card-link btn card-link">See Detail</a>
              </div>
            </div>
          </div>
           
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Card;
