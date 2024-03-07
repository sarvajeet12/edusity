import React from "react";
import "./Campus.css";
import gallery_1 from "../../assets/campus1.jpg";
import gallery_2 from "../../assets/campus2.jpg";
import gallery_3 from "../../assets/campus3.jpg";
import gallery_4 from "../../assets/campus4.jpg";
import { FaArrowRight } from "react-icons/fa6";

const Campus = () => {
  return (
    <div className="campusContainer">
      <div className="gallery grid gridFourColumn">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className="btn">
        See more <FaArrowRight />
      </button>
    </div>
  );
};

export default Campus;
