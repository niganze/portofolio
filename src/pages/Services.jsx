import React from "react";
import BB from "../ASSETS/mobile_design.jpg";
import BBB from "../ASSETS/interactive_design.jpg";
import BBBB from "../ASSETS/print_design.jpg";
import BBV from "../ASSETS/web_design.jpg";
import "../css/Services.css";
function Services() {
  return (
    <div>
      <div className="container_serivice" id="service">
        <div className="services">
          <h2>Have a Look at my Services</h2>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="upper">
        <div className="services_details">
          <img src={BB} alt="connection failed" />
          <h4>Web Design</h4>
          <p>
          I am a web designer who creates visually stunning and user-friendly websites by 
          incorporating design principles, typography, color theory, and layout. With proficiency in 
          software tools such as Adobe Creative Suite and coding languages 
          such as HTML, CSS, and JavaScript, I can bring a website to life and enhance the user experience..
          </p>
        </div>
        <div className="services_details">
          <img src={BBB} alt="connection failed" />
          <h4>Mobile Design</h4>
          <p>
          As a mobile designer, I create visually appealing and user-friendly experiences 
          for smartphones and tablets. I adapt designs to fit smaller screens and emerging 
          trends, optimizing 
          experiences for mobile devices using design principles, typography, and layout.
          </p>
        </div>
        </div>
        <div className="lower">
        <div className="services_details">
          <img src={BBBB} alt="connection failed" />
          <h4>Print Design</h4>
          <p>
          I am a print designer who specializes in creating visually appealing and effective designs
           for printed materials such as brochures, flyers, and packaging. With proficiency in design 
           principles, typography, and 
          printing techniques, I can bring a brand to life and create impactful printed materials.
          </p>
        </div>
        <div className="services_details">
          <img src={BBV} alt="connection failed" />
          <h4>Interaction Design</h4>
          <p>
          I am an interaction designer who specializes in creating engaging and intuitive 
          experiences for digital products such as websites, apps, and software. With knowledge 
          of user-centered design principles, usability testing, and prototyping tools, I can 
          design user interfaces that are both visually appealing and easy to use. By focusing on 
          the user's needs and goals, 
          I can create digital experiences that are both functional and enjoyable to use
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
