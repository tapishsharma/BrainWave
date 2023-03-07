import React from "react";
import pricingOnlyDiaryPNG from "../assets/images/pricingonlyDiary.png";
import pricingonlyConsultancyPNG from "../assets/images/pricingonlyConsultancy.png";
import { Link } from "react-router-dom";

export default function PricingCards() {
  return (
    <div className="pricing-cards-component-root">
      <div className="pricing-heading-container">
        <h1 className="pricing-heading">Pricing</h1>
      </div>
      <div className="pricing-cards-component-container">
        <div className="pricing-cards-component-card">
          <div className="pricing-cards-component-card-header">
            {/* plan name, image and price */}
            <div className="pricing-cards-component-card-header-plan-name">
              <h2 className="pricing-cards-component-card-header-plan-name-text price-plan-1">
                Only Diary
              </h2>
            </div>
            <div className="pricing-cards-component-card-header-plan-image">
              <img
                className="pricing-cards-component-card-header-plan-image-image"
                src={pricingOnlyDiaryPNG}
                alt="pricing-only-diary"
              />
            </div>
            <div className="pricing-cards-component-card-header-plan-price">
              <h2 className="pricing-cards-component-card-header-plan-price-text">
                Free
              </h2>
            </div>

            {/* services list */}
            <ul className="pricing-cards-component-card-services-list">
              <li>
                <i className="fas fa-check"></i>
                <span>
                  <Link to="/">Free unlimited Diary Writing</Link>
                </span>
              </li>
              <li>
                <i className="fas fa-check"></i>
                <span>
                  <Link to="/">Available on any device</Link>
                </span>
              </li>
              {/* services not  available on free plan */}
              <li>
                <i className="fas fa-times"></i>
                <span>
                  <Link to="/"> Free unlimited Consultancy</Link>
                </span>
              </li>
              <li>
                <i className="fas fa-times"></i>
                <span>
                  <Link to="/"> Counselling Sessions</Link>
                </span>
              </li>
              <li>
                <i className="fas fa-times"></i>
                <span>
                  <Link to="/"> AI Based Monitoring</Link>
                </span>
              </li>
            </ul>
            {/* end of services list */}
          </div>
          {/* pricing card button */}
          <Link to="/">
            <div className="pricing-cards-component-card-button-container">
              <span className="pricing-cards-component-card-button">
                Get Started
              </span>
            </div>
          </Link>
          {/* end of pricing card button */}
        </div>
        {/* end of pricing card */}
        <div className="pricing-cards-component-card">
          <div className="pricing-cards-component-card-header">
            {/* plan name, image and price */}
            <div className="pricing-cards-component-card-header-plan-name">
              <h2 className="pricing-cards-component-card-header-plan-name-text price-plan-2">
                Consultancy
              </h2>
            </div>
            <div className="pricing-cards-component-card-header-plan-image">
              <img
                className="pricing-cards-component-card-header-plan-image-image"
                src={pricingonlyConsultancyPNG}
                alt="pricing-only-diary"
              />
            </div>
            <div className="pricing-cards-component-card-header-plan-price">
              <h2 className="pricing-cards-component-card-header-plan-price-text">
                Rs 499
              </h2>
            </div>
            {/* services list */}
            <ul className="pricing-cards-component-card-services-list">
              <li>
                <i className="fas fa-check"></i>
                <span>
                  <Link to="/">Free unlimited Diary Writing</Link>
                </span>
              </li>
              <li>
                <i className="fas fa-check"></i>
                <span>
                  <Link to="/">Available on any device</Link>
                </span>
              </li>
              <li>
                <i className="fas fa-check"></i>
                <span>
                  <Link to="/">Free unlimited Consultancy</Link>
                </span>
              </li>
              <li>
                <i className="fas fa-check"></i>
                <span>
                  <Link to="/">Counselling Sessions</Link>
                </span>
              </li>
              <li>
                <i className="fas fa-check"></i>
                <span>
                  <Link to="/">AI Based Monitoring</Link>
                </span>
              </li>
            </ul>
            {/* end of services list */}
          </div>
          {/* pricing card button */}
          <Link to="/">
            <div className="pricing-cards-component-card-button-container">
              <span className="pricing-cards-component-card-button">
                Get Started
              </span>
            </div>
          </Link>
          {/* end of pricing card button */}
        </div>
        {/* end of pricing card */}
      </div>
    </div>
  );
}
