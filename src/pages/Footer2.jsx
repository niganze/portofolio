import React from "react";
import "../css/Footer2.css";
import { AiFillFacebook } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { FcServiceMark } from "react-icons/fc";
import { MdSchool } from "react-icons/md";
import { FcHome } from "react-icons/fc";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
function Footer() {
  return (
    <div className="footer">
      <div className="About">
        <h5 className="logo">
          <FcHome />
          <i>ALAIN GN</i>
        </h5>
        <ul>
          <li>
            <a href="#">
              <MdEmail />
              niganzealain@gmail.com
            </a>
          </li>
          <li>
            <a href="#">
              <BsFillTelephoneInboundFill />
              +250 782500772
            </a>
          </li>
          <li>
            <a href="#">
              <GiTeacher />
              Become  clients
            </a>
          </li>
          <li>
            <a href="#">
              <IoSchoolSharp />
              Become an innovator
            </a>
          </li>
          <li>
            <small>&copy; 2023 My Website. All rights reserved.</small>
          </li>
        </ul>
      </div>
      <div className="Courses">
        <h5>
          <FcAbout />
          About ME{" "}
        </h5>
        <h6>
          I am a web developer with experience in ReactJS, Node.js, and MongoDB.
          Check out my portfolio to learn more about my skills and projects.
        </h6>
      </div>
      <div className="Services ">
        <h5>
          {" "}
          <FcServiceMark />
          Quick Links{" "}
        </h5>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="Services ">
        <h5>
          <MdSchool />
          footer-links
        </h5>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </div>
      <div className="subscribe">
        <h5>SUBSCRIBE MY NEWS LETTER</h5>
        <input type="email" placeholder="niganzealain@gmail.com" />
        <button>SUBCRIBE</button>
        <div class="social-networks">
          <AiFillFacebook />
          <BsWhatsapp />
          <AiFillLinkedin />
          <AiFillTwitterCircle />
        </div>
      </div>
    </div>
  );
}
export default Footer;
