import React from "react";
import "./HeroSection.css";
import { FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="heroSection container">
      <div className="heroText">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          doloribus! Facilis ipsum doloremque vero suscipit corporis.
          Perferendis nesciunt saepe ipsum?
        </p>
        <button className="btn">
          Explore more <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
