import React from "react";
import { Link } from "react-router-dom";
import homeScreenBannerPNG from "../assets/images/homeScreenBanner.png";
import Header from "../components/Header";
import ServicesCards from "../components/ServicesCards";
import PricingCards from "../components/PricingCards";
import Footer from "../components/Footer";
export default function HomeScreen() {
  return (
    <div className="home-screen-root">
      <Header />
      <div className="in-one-row">
        <div className="home-screen-banner">
          <img src={homeScreenBannerPNG} alt="homeScreenBanner" />
        </div>
        <div className="home-screen-content">
          <div className="home-screen-heading">
            <p>
              A modern diary writing app for a
              <span className="pink-highlight"> peaceful mind</span>
            </p>
          </div>
          <div className="home-screen-buttons">
            <Link to="/">
              <div className="consult-doctor-btn">Consult Doctor</div>
            </Link>
            <Link to="/">
              <div className="write-diary-btn">Write Diary</div>
            </Link>
          </div>
        </div>
      </div>
      <ServicesCards />
      <PricingCards />
      <Footer />
    </div>
  );
}
