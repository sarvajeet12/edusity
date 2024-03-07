import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaGraduationCap } from "react-icons/fa6";
import { Link } from "react-scroll";
import hamburgerMenu from "../../assets/menu.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 600 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`container ${sticky ? "stickyNavColor" : ""}
      `}
    >
      <div>
        <FaGraduationCap /> Edusity
      </div>
      <ul className={toggle ? "showMenu" : ""}>
        <li>
          <Link to="heroSection" smooth={true} offset={-230} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-230} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="aboutContainer" smooth={true} offset={-230} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campusContainer" smooth={true} offset={-230} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link
            to="testimonialsContainer"
            smooth={true}
            offset={-230}
            duration={500}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contactContainer"
            smooth={true}
            offset={-230}
            duration={500}
          >
            <button className="btn">Contact us </button>
          </Link>
        </li>
      </ul>
      <img src={hamburgerMenu} alt="" className="menu" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;

// duration= {500} in ms
