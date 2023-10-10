import React from "react";
import "../Styles/FooterStyles.scss";

const Footer = () => {
  return (
    <div className="footer-styles">
      <div className="contact-container">
        <div className="contact-styles">
          <h2>Contact Us</h2>
          <span>123-456-7890</span>
          <span>info@mysite.com</span>
        </div>
        <div className="contact-styles">
          <h2>Address</h2>
          <span>500 Terry Francine Street</span>
          <span>San Francisco, CA 94158</span>
        </div>{" "}
        <div className="contact-styles">
          <h2>Opening Hours</h2>
          <span>Mon - Fri: 8am - 8pm</span>
          {/* <span>​Saturday: 9am - 7pm</span>
          <span>​​Sunday: 9am - 8pm</span> */}
          <span>Saturday: 9am - 7pm </span>
          <span>Sunday: 9am - 8pm </span>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2023</p>
      </div>
    </div>
  );
};

export default Footer;
