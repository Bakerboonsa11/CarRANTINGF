import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import './styles/contact.css';

const Contact = () => {
  return (
    <>
      <div className="contact-container my-5" id="contact">
        <div className="contact-header d-flex flex-column flex-lg-row align-items-center">
          <div className="contact-text-section me-lg-5 mb-4 mb-lg-0 text-center text-lg-start">
            <h1 className="contact-title">
              Get in <span className="highlight">Touch</span> with Us
            </h1>
            <p className="contact-description">
              We’d love to hear from you! Whether you have a question about our services, pricing, or anything else, feel free to reach out.
            </p>

            <div className="contact-info">
              <div className="contact-item d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faPhoneAlt} size="2x" className="contact-icon me-3" />
                <p className="contact-text">+1 (234) 567-890</p>
              </div>
              <div className="contact-item d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faEnvelope} size="2x" className="contact-icon me-3" />
                <p className="contact-text">info@carrental.com</p>
                {/* <a href="bakerboonsa@gmail.com">bakerboonsa@gmail.com</a> */}
              </div>
              <div className="contact-item d-flex align-items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="contact-icon me-3" />
                <p className="contact-text">123 Main Street, City, Country</p>
              </div>
            </div>
          </div>

          <div className="contact-image-section">
            <img
              src="images/bonsa.jpg"
              alt="Contact Us"
              className="contact-image img-fluid"
            />
            <p style={{fontFamily:"cursive",fontSize:"30px",color:'orrange'}}>Manager</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
