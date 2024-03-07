import React, { useRef } from "react";
import "./Testimonials.css";
import user_1 from "../../assets/user_1.jpg";
import user_2 from "../../assets/user_2.jpg";
import user_3 from "../../assets/user_3.jpg";
import user_4 from "../../assets/user_4.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Testimonials = () => {
  const move = useRef();
  let tx = 0;

  console.log("present");
  const handleNextBtn = () => {
    console.log("next");

    if (tx > -50) {
      tx = tx - 25;
    }

    move.current.style.transform = `translateX(${tx}%)`;
  };

  const handleBackBtn = () => {
    console.log("back");
    if (tx < 0) {
      tx = tx + 25;
    }

    move.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonialsContainer">
      <MdKeyboardArrowRight onClick={handleNextBtn} className="nextArrow" />
      <MdKeyboardArrowLeft onClick={handleBackBtn} className="backArrow" />
      <div className="slider">
        <ul ref={move}>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson 1</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores voluptatibus illo exercitationem saepe alias. Delectus
                molestias distinctio totam optio repellendus quae, ratione qui
                natus consequuntur error architecto corrupti soluta asperiores
                nam ipsa quisquam cumque porro, corporis laudantium numquam
                dolorum debitis iusto blanditiis. Ea, eveniet vitae dolorem et
                quasi sapiente recusandae!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson 2</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores voluptatibus illo exercitationem saepe alias. Delectus
                molestias distinctio totam optio repellendus quae, ratione qui
                natus consequuntur error architecto corrupti soluta asperiores
                nam ipsa quisquam cumque porro, corporis laudantium numquam
                dolorum debitis iusto blanditiis. Ea, eveniet vitae dolorem et
                quasi sapiente recusandae!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_3} alt="" />
                <div>
                  <h3>William Jackson 3</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores voluptatibus illo exercitationem saepe alias. Delectus
                molestias distinctio totam optio repellendus quae, ratione qui
                natus consequuntur error architecto corrupti soluta asperiores
                nam ipsa quisquam cumque porro, corporis laudantium numquam
                dolorum debitis iusto blanditiis. Ea, eveniet vitae dolorem et
                quasi sapiente recusandae!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_4} alt="" />
                <div>
                  <h3>William Jackson 4</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores voluptatibus illo exercitationem saepe alias. Delectus
                molestias distinctio totam optio repellendus quae, ratione qui
                natus consequuntur error architecto corrupti soluta asperiores
                nam ipsa quisquam cumque porro, corporis laudantium numquam
                dolorum debitis iusto blanditiis. Ea, eveniet vitae dolorem et
                quasi sapiente recusandae!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
