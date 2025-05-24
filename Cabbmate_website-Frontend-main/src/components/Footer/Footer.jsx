import React from "react";
import "./Footer.css";
import Logo from "../../Assets/Logo.jpg";
import { Link } from "react-router-dom";
import {
  FaEnvelopeOpenText,
  FaFacebookF,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";

const Footer = ({ onAboutClick, onHomeClick }) => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <div className="logo-container">
          <div className="logo-background">
            <img src={Logo} alt="Cabbmate Logo" className="footer_logo" />
          </div>
          <h2 className="">
            ca<span className="company-name">bb</span>mate
          </h2>
        </div>
        <p className="description">
          We are many variations of passeges available but the majority have
          suffered alternation in some form by injected humour words believable.
        </p>
        <div className="consultation">
          <h4 className="message">
            <FaMessage />
          </h4>
          <div>
            <p className="consultaion_para">Free Consultation?</p>
            <Link to="#" className="consultation-link">
              Book Schedule
            </Link>
          </div>
        </div>
        <div className="social-icons">
          <Link
            to="https://www.facebook.com/profile.php?id=61564911998225"
            className="icon"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="https://x.com/cabbmate_india?t=bvya8AgdSdSJ1asH98wShA&s=08"
            className="icon"
          >
            <FaTwitter />
          </Link>
          <Link
            to="https://www.linkedin.com/company/cabbmate/"
            className="icon"
          >
            <FaLinkedin />
          </Link>
          <Link
            to="https://www.youtube.com/@Cabbmate_india?app=desktop"
            className="icon"
          >
            <FaYoutube />
          </Link>
          <Link to="https://www.instagram.com/cabbmate/" className="icon">
            <FaInstagram />
          </Link>
        </div>
      </div>

      <div className="footer-column">
        <h3 className="important">Important Links</h3>
        <ul className="links-list">
          <li className="navbar_link" onClick={onHomeClick}>
            <Link to="">Home</Link>
          </li>
          <li className="navbar_link" onClick={onAboutClick}>
            <Link to="" onClick={onAboutClick}>
              About Us
            </Link>
          </li>

          <li className="navbar_link">
            <Link to="#">Services</Link>
          </li>
          <li className="navbar_link">
            <Link to="#">Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h3 className="important">Important Links</h3>
        <ul className="links-list">
          <li className="navbar_link">
            <Link to="#">Customer Support</Link>
          </li>
          <li className="navbar_link">
            <Link to="#">Terms & Services</Link>
          </li>
          <li className="navbar_link">
            <Link to="#">Privacy Policy</Link>
          </li>
          <li className="navbar_link">
            <Link to="#">Refund & Cancellation</Link>
          </li>
          <li className="navbar_link">
            <Link to="#">Blogs</Link>
          </li>
        </ul>
      </div>

      <div className="footer-column contact-column">
        <h3 className="contact_title">Contact Us</h3>
        <p className="contact_links">
          <span>
            <FaPhoneAlt />
          </span>{" "}
          +919359378865
        </p>
        <p className="contact_links">
          <span>
            <FaEnvelopeOpenText />
          </span>{" "}
          connect@cabbmate
        </p>
        <p className="contact_links">
          <span>
            <CiClock2 />
          </span>{" "}
          Mon - Fri: 10:00 AM - 7:00 PM
        </p>
      </div>
    </footer>
  );
};

export default Footer;
