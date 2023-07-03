import React from "react";
import "../css/Home.css";
import LOGO from "../ASSETS/IMG_235.jpeg";
import ME from "../ASSETS/IMG_235.jpeg";
function Home() {
  return (
    <div>
      <div className=" container" id="home">
        <div className="home">
          <div className="left">
            <div className="flx">
              <img className="logo2" src={LOGO} alt="logoo" />
              <p style={{ color: "#525FE1" }}>
                A glimpse into my world,via my personal website
              </p>
            </div>
            <div className="gettinglabel">
              <label className="label">
                Sharing my passions and interests through my website.
              </label>
            </div>
            <p className="lorem">
              My website, the perfect platform to showcase my skills and l know
              that together Discover my professional journey on my Website
            </p>
            <div className="join-container">
              <button className="join">
                <a href="#contact" style={{color: 'inherit', textDecoration: 'inherit'}}>let now talk</a></button>
            
             <button className="join">Download cv</button>
            </div>
           </div>
          <div className="right">
            <img src={ME} alt="homeside" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
