import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import './styles/test.css'; // New CSS file specific to Testimonials

const Testimonials = () => {
  return (
    <div className="testimonials-container py-5" id="testimonials">
      {/* Section Header */}
      <div className="testimonials-header text-center mb-5">
        <h2 className="testimonials-title">Our Clients Love Us</h2>
        <p className="testimonials-subtitle">What they have to say about us</p>
      </div>

      {/* Testimonial Grid */}
      <div className="testimonials-grid">
        {/* Testimonial 1 */}
        <div className="testimonial-card">
          <FontAwesomeIcon icon={faQuoteLeft} className="testimonial-quote-icon" />
          <div className="testimonial-content">
            <img
              src="/images/bonsa.jpg"
              alt="John Doe"
              className="testimonial-image"
            />
            <h5 className="testimonial-name">John Doe</h5>
            <p className="testimonial-role">CEO, Example Corp</p>
            <p className="testimonial-text">
              "This product has completely changed the way we work. It's truly
              a game-changer!"
            </p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card">
          <FontAwesomeIcon icon={faQuoteLeft} className="testimonial-quote-icon" />
          <div className="testimonial-content">
            <img
              src="/images/bonsa.jpg"
              alt="Jane Smith"
              className="testimonial-image"
            />
            <h5 className="testimonial-name">Jane Smith</h5>
            <p className="testimonial-role">Marketing Head, ABC Ltd</p>
            <p className="testimonial-text">
              "The quality and professionalism of the team blew us away.
              Highly recommended!"
            </p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial-card">
          <FontAwesomeIcon icon={faQuoteLeft} className="testimonial-quote-icon" />
          <div className="testimonial-content">
            <img
              src="/images/bonsa.jpg"
              alt="Robert Brown"
              className="testimonial-image"
            />
            <h5 className="testimonial-name">Robert Brown</h5>
            <p className="testimonial-role">Entrepreneur</p>
            <p className="testimonial-text">
              "I can't recommend this service enough. It's been an incredible
              experience from start to finish!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
