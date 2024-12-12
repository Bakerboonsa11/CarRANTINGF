import React from "react";
import './styles/footer.css'; // Include the new styles here
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container d-flex justify-content-around align-items-start">
        {/* Company Info */}
        <div className="footer-item">
          <h4 className="footer-title">Carify</h4>
          <p className="footer-description">
            The ultimate platform for buying and renting cars. Drive your dream with us!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-item">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li className="footer-link"><a href="/about-us">About Us</a></li>
            <li className="footer-link"><a href="/inventory">Our Inventory</a></li>
            <li className="footer-link"><a href="/services">Services</a></li>
            <li className="footer-link"><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-item">
          <h4 className="footer-title">Contact Us</h4>
          <ul className="footer-contact">
            <li>Email: <a href="mailto:info@carify.com">info@carify.com</a></li>
            <li>Phone: <a href="tel:+1234567890">+1 234 567 890</a></li>
            <li>Address: 123 Carify Street, Auto City, USA</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="footer-item">
          <h4 className="footer-title">Follow Us</h4>
         <div className="footer-social">
          <a href="https://facebook.com" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" className="footer-social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; 2024 Carify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
