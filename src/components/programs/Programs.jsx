import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program_1.jpg";
import program_2 from "../../assets/program_2.jpg";
import program_3 from "../../assets/program_3.jpg";
import program_icon1 from "../../assets/program_icon1.png";
import program_icon2 from "../../assets/program_icon2.png";
import program_icon3 from "../../assets/program_icon3.png";

const Programs = () => {
  return (
    <div className="programs grid gridThreeColumn">
      {/* card 1 */}
      <div className="programCard">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      {/* card 2*/}
      <div className="programCard">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      {/* card 3*/}
      <div className="programCard programCardThird">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon3} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
