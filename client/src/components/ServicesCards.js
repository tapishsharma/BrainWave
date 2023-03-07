import React from "react";
import servicePsychiatristPNG from "../assets/images/servicePsychiatrist.png";
import Service24by7PNG from "../assets/images/service24by7.png";
import serviceAIBasedMonitioringPNG from "../assets/images/serviceAIBasedMonitioring.png";
import { Link } from "react-router-dom";
export default function ServicesCards() {
  return (
    <div className="services-cards-component-root" id="services-provided">
      <div className="services-heading-box">
        <h1 className="services-heading">Services</h1>
      </div>
      <div className="services-cards-box">
        <div className="services-card">
          <div className="services-card-image-box">
            <img
              className="services-card-image"
              src={servicePsychiatristPNG}
              alt="servicePsychiatristPNG"
            />
          </div>
          <div className="services-card-text-box">
            <h1 className="services-card-heading">Psychiatrist</h1>
            <p className="services-card-text">
              Psychiatrist with over 10 years of experience and expertise in
              their respective fields.
            </p>
          </div>
          <div className="services-card-button-box">
            <Link to="/">
              <div className="services-card-button">Read More</div>
            </Link>
          </div>
        </div>
        <div className="services-card">
          <div className="services-card-image-box">
            <img
              className="services-card-image"
              src={Service24by7PNG}
              alt="servicePsychiatristPNG"
            />
          </div>
          <div className="services-card-text-box">
            <h1 className="services-card-heading">Available 24x7</h1>
            <p className="services-card-text">
              Flexible Counselling services are available 24/7 for our customers
              for their mental wellbeing.
            </p>
          </div>
          <div className="services-card-button-box">
            <Link to="/">
              <div className="services-card-button">Read More</div>
            </Link>
          </div>
        </div>
        <div className="services-card">
          <div className="services-card-image-box">
            <img
              className="services-card-image"
              src={serviceAIBasedMonitioringPNG}
              alt="servicePsychiatristPNG"
            />
          </div>
          <div className="services-card-text-box">
            <h1 className="services-card-heading">AI based Monitoring</h1>
            <p className="services-card-text">
              AI based monitoring is used in diary for the better assessment of
              the Mental state of our customers.
            </p>
          </div>
          <div className="services-card-button-box">
            <Link to="/">
              <div className="services-card-button">Read More</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
