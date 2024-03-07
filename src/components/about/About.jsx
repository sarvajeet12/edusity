import React, { useState } from "react";
import "./About.css";
import aboutImage from "../../assets/aboutImage.jpg";
import playIcon from "../../assets/playIcon.png";
import { FaArrowRight } from "react-icons/fa6";

const About = ({ setVideo }) => {
  const handleVideo = () => {
    setVideo(true);
  };

  return (
    <div className="aboutContainer grid gridTwoColumn">
      <div className="aboutLeft">
        <img src={aboutImage} alt="" />
        <img src={playIcon} alt="" onClick={handleVideo} />
      </div>
      <div className="aboutRight">
        <h3>about university</h3>
        <h2>nuturing tomorrow's leaders today</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam error
          ducimus doloremque voluptatem, dolorum aliquam minima voluptatibus
          adipisci placeat provident optio cumque ratione illum unde rem ab
          labore laudantium facere repudiandae. Eaque nesciunt, numquam, eum
          minima officiis animi quibusdam ullam totam quos repellat placeat?
          Quasi animi deserunt ab aliquam dicta quos? Mollitia animi dignissimos
          eaque id? Delectus ad et blanditiis porro aliquid odit distinctio,
          iste, necessitatibus ut similique minus deserunt!
        </p>
        <br />
        <button className="btn">
          Explore more <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default About;
