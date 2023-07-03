import React from "react";
import "../css/Qualification.css";
function Qualification() {
  return (
    <div className="qualification">
      <div className="qualification_header">
        <h2>My Qualifications</h2>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <div className="qualification_container">
        <div className="alain">
          <div className="amazingly_left">
            <h4>UNIVERSITY OF RWANDA</h4>
            <p>July 2020 to Present</p>
            <h3>Computer and software engineering</h3>
            <p>
              Where am closely related fields that deal with the design, 
            development, testing, and maintenance of computer hardware, 
            software, and systems
            </p>
          </div>
          <hr style={{ borderColor: 'blue' }} />
          <div className="amazingly_left">
            <h4>ALX intarnet sessions</h4>
            <p>July 2022 to Present</p>
            <h3>Creative  software Developer</h3>
            <p>
              Where am developing and connecting a new generation 
              of ethical, entrepreneurial leaders  for more connection.
            </p>
          </div>
          <hr style={{ borderColor: 'blue' }} />
        </div>
        <div className="alaing">
          <div className="amazingly_right">
            <h4>A2 In advanced level </h4>
            <p>
              <h5>Session</h5>:2017- 2019
            </p>
            <p>
            Result: 3.78 (In the Scale 50%-80%)
            </p>
          </div>
          <div className="amazingly_right">
            <h4>General certificate in KLAB</h4>
            <p>
              Session:2023-Present
            </p>
            <p>
              Result: 3.78 (In the Scale of 80%)
            </p>
          </div>
          <div className="amazingly_right">
            <h4>freecodecamp & Fine Arts</h4>
            <p>
              Session:2019-2020
            </p>
            <p>
              Result: 3.78 (In the Scale of 4.00)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Qualification;
