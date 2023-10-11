import React from "react";
import "../Styles/FooterStyles.scss";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="company-container">
            <h3>Company</h3>
            <p>Home</p>
            <p>Menu</p>
            <p>About</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="middle">
          <div className="company-container">
            <h3>Support</h3>

            <p>Help Center</p>
            <p>Safety Center</p>
            <p>Community Guidelines</p>
          </div>
        </div>
        <div className="right">
          <div className="company-container">
            <h3>Legal</h3>
            <p>Cookies Policy</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Law Enforcement</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2023 | A to Z - Tech Solutions</p>
        <div className="socials">
          <a target="_blank" href="https://www.linkedin.com/in/atorrez007">
            <FaLinkedin
              size={25}
              style={{ color: "white", marginRight: ".3em" }}
            />
          </a>
        </div>
        <div className="socials">
          <a target="_blank" href="https://github.com/atorrez007">
            <FaGithub
              size={25}
              style={{ color: "white", marginRight: ".3em" }}
            />
          </a>
        </div>
        <div className="socials">
          <a target="_blank" href="https://twitter.com/atorrez_007">
            <FaTwitter
              size={25}
              style={{ color: "white", marginRight: ".3em" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
