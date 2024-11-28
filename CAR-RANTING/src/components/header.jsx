import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";

import './styles/header.css';

const Header = () => {
  return (
    <>
      <div className="container my-5">
        <div className="d-flex flex-column flex-lg-row align-items-center header_container">
          <div className="text-content me-lg-5 mb-4 mb-lg-0 text-center text-lg-start content-containr">
            <h1 className="display-4 head_of_content">
              Explore The Finest <span className="Global_text">Global</span> Offers
            </h1>
            <p className="lead head_p">
              Find your ideal ride for any adventure with our diverse
              <br />
              range of affordable and dependable car rentals.
            </p>

            <div className="button-group mt-3 d-flex justify-content-start">
              <button className="btn btn-primary me-2 download-btn">
                <div className="d-flex justify-content-start align-items-center">
                  <FontAwesomeIcon icon={faApple} size="2x"  className="me-2" />
                  <div>
                    <p className="button_p">Download on the</p>
                    <h2 className="button_head">App Store</h2>
                  </div>
                </div>
              </button>

              <button className="btn btn-primary me-2 download-btn">
                <div className="d-flex justify-content-start align-items-center">
                  <FontAwesomeIcon icon={faGooglePlay} size="2x" className="me-2" />
                  <div>
                    <p className="button_p">Get on the</p>
                    <h2 className="button_head">Play Store</h2>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="img-container head-img">
            <img
              src="images/indigo.png"
              alt="Placeholder Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* Updated Section with Relevant Icons */}
  <div className="button-group mt-3 container my-5">
  <div className="row justify-content-center gy-4 gx-3 text-center">
    {/* Select Location */}
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="d-flex flex-column align-items-center">
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          size="2x"
          style={{ color: '#172774' }}
          className="mb-2"
        />
        <h2 className="button_head">Select Location</h2>
        <p className="button_p">Select location</p>
      </div>
    </div>

    {/* Select Date */}
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="d-flex flex-column align-items-center">
        <FontAwesomeIcon
          icon={faCalendarAlt}
          size="2x"
          style={{ color: '#172774' }}
          className="mb-2"
        />
        <h2 className="button_head">Select Date</h2>
        <p className="button_p">Select date</p>
      </div>
    </div>

    {/* Select Hour */}
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="d-flex flex-column align-items-center">
        <FontAwesomeIcon
          icon={faClock}
          size="2x"
          style={{ color: '#172774' }}
          className="mb-2"
        />
        <h2 className="button_head">Select Hour</h2>
        <p className="button_p">Select hour</p>
      </div>
    </div>

    {/* Search Button */}
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="d-flex flex-column align-items-center">
        <button type="button" className="btn btn-primary px-4 py-2">
          Search
        </button>
      </div>
    </div>
  </div>
</div>


    </>
  );
};

export default Header;
