import React from "react";
import { Link } from "react-router-dom";
import visaPNG from "../assets/images/visa.png";
import creditcardPNG from "../assets/images/creditcard.png";
import mastercardPNG from "../assets/images/mastercard.png";
export default function Footer() {
  return (
    <div className="footer-root-component">
      <div className="footer-container">
        {/* create footer in two section and align them in flex row */}
        <div className="footer-section">
          <p className="about-us-text">
            We are modern solution for early discovery and curing of mental
            health problems like depression and anger issues.
          </p>
        </div>
        <div className="footer-section">
          {/* contact us button */}
          <Link to="/contact">
            <button className="contact-footer-button">Contact Us</button>
          </Link>
        </div>
        <div className="footer-section payment-methods-images-inline">
          <p className="footer-payment-methods-text"> Payment Methods</p>
          <img
            className="footer-payment-images"
            src={creditcardPNG}
            alt="visa"
          />
          <img
            className="footer-payment-images"
            src={mastercardPNG}
            alt="visa"
          />
          <img className="footer-payment-images" src={visaPNG} alt="visa" />
        </div>
      </div>
    </div>
  );
}
