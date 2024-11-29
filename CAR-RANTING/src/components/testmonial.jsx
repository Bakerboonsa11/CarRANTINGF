import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faCalendarAlt, faClock,faGear, faChair, faGasPump, faBolt, faCar } from "@fortawesome/free-solid-svg-icons";
import './styles/test.css'



const Testimonials = () => {
  return (
    <div className="container py-5">
      {/* Section Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold section-title">What Our Clients Say</h2>
        <p className="text-muted">Hear directly from our satisfied customers.</p>
      </div>

      {/* Testimonial Grid */}
      <div className="row">
        {/* Testimonial 1 */}
        <div
          className="col-md-4 mb-4 d-flex justify-content-center animate-fade-in"
        >
          <div className="card shadow-lg p-4 testimonial-card">
            <div className="card-body text-center">
              <img
                src="/images/bonsa.jpg"
                alt="John Doe"
                className="rounded-circle mb-3 testimonial-img"
              />
              <h5 className="card-title fw-bold">John Doe</h5>
              <p className="text-muted">CEO, Example Corp</p>
              <p className="card-text fst-italic">
                "This product has revolutionized the way we work. I can't
                recommend it enough!"
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div
          className="col-md-4 mb-4 d-flex justify-content-center animate-fade-in delay-1s"
        >
          <div className="card shadow-lg p-4 testimonial-card">
            <div className="card-body text-center">
              <img
               src="/images/bonsa.jpg"
                alt="Jane Smith"
                className="rounded-circle mb-3 testimonial-img"
              />
              <h5 className="card-title fw-bold">Jane Smith</h5>
              <p className="text-muted">Marketing Head, ABC Ltd</p>
              <p className="card-text fst-italic">
                "The team behind this service is simply outstanding. The
                quality speaks for itself."
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div
          className="col-md-4 mb-4 d-flex justify-content-center animate-fade-in delay-2s"
        >
          <div className="card shadow-lg p-4 testimonial-card">
            <div className="card-body text-center">
              <img
                src="/images/bonsa.jpg"
                alt="Robert Brown"
                className="rounded-circle mb-3 testimonial-img"
              />
              <h5 className="card-title fw-bold">Robert Brown</h5>
              <p className="text-muted">Entrepreneur</p>
              <p className="card-text fst-italic">
                "A fantastic experience from start to finish. Highly
                professional and innovative."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;





{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}