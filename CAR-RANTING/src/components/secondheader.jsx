import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faCalendarAlt, faClock,faGear, faChair, faGasPump, faBolt, faCar } from "@fortawesome/free-solid-svg-icons";

import './styles/secondhead.css'

const Header = () => {
  return (
    <>
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-around header2_container">
  {/* Car Image Container */}
  <div className="img-container head-img head-img2">
    <img
      src="images/indigo.png"
      alt="Placeholder Image"
      className="img-fluid"
    />
  </div>

  {/* Text Content Container */}
  <div className="text-content me-lg-5 mb-4 mb-lg-0 text-center text-lg-start content-containr content-containr2">
    <h1 className="display-4 head_of_content content2-head">
      Car services simplified
    </h1>
    <p className="lead head_p head_p2">
      Find your ideal ride for any adventure with our diverse
      <br />
      range of affordable and dependable car rentals.
    </p>

    <div className="d-flex justify-content-start align-items-center gap-3">
      {/* Feature 1: Manual */}
      <div className="d-flex flex-column align-items-center mb-3">
        <span className="card-icon">
          <FontAwesomeIcon icon={faGear} className="my-icons" /> {/* Replace with your desired icon */}
        </span>
        <span className="card-text span-amount">48</span>
        <div className="d-flex flex-column align-items-center mb-3 block-span">
          <span className="card-text">Car</span>
          <span className="block-span">TYPES</span>
        </div>
      </div>

      {/* Feature 2: Seats */}
      <div className="d-flex flex-column align-items-center mb-3 icons-contaier">
        <span className="card-icon">
          <FontAwesomeIcon icon={faChair} className="my-icons" /> {/* Replace with your desired icon */}
        </span>
        <span className="card-text span-amount">123</span>
        <div className="d-flex flex-column align-items-center mb-3 block-span">
          <span className="card-text">RENTAL</span>
          <span className="block-span">OUTLETS</span>
        </div>
      </div>

      {/* Feature 3: Gas */}
      <div className="d-flex flex-column align-items-center mb-3 icons-contaier">
        <span className="card-icon">
          <FontAwesomeIcon icon={faGasPump} className="my-icons" /> {/* Replace with your desired icon */}
        </span>
        <span className="card-text span-amount">67</span>
        <div className="d-flex flex-column align-items-center mb-3 block-span">
          <span className="card-text">REPAIR</span>
          <span className="block-span">POINTS</span>
        </div>
      </div>
      
    </div>
    <a href="#" className="card-link btn content-2-btn ">See Detail</a>
  </div>
</div>


      {/* Updated Section with Relevant Icons */}
 


    </>
  );
};

export default Header;
