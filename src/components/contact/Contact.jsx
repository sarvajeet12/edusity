import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export const Contact = () => {
  return (
    <div className="contactContainer grid gridTwoColumn">
      <div className="leftContact">
        <h3>Send us a message</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto cum
          deserunt labore ratione exercitationem veniam temporibus corrupti
          molestias rerum odit veritatis officia ex totam, obcaecati minus iure
          vitae commodi sed quia tempore asperiores iste excepturi. A pariatur
          architecto esse, voluptates unde rem ullam quae vel quibusdam neque et
          deleniti repellat.
        </p>
        <ul>
          <li>
            <MdEmail className="contactIcon" /> Contact@GreateStact.com
          </li>
          <li>
            <FaPhoneAlt className="contactIcon" /> +1 123-456-7890
          </li>
          <li>
            <FaLocationDot className="contactIcon" />
            77 Massachusetts Ave, Cambridge <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="rightContact">
        <form action="">
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" />
          <label htmlFor="phone">Phone</label>
          <input type="number" id="phone" />
          <label htmlFor="msg">Write your message here</label>
          <textarea id="msg" cols="30" rows="10"></textarea>
          <button className="btn">
            Submit <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
};
