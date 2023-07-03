import React from "react";
import "../css/Project.css";
import FF from "../ASSETS/projects1.jpg";
function Project() {
  return (
    <div className="Project_container" id="project">
      <div className="headers_project">
        <h2>Latest Done Projects</h2>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <div className="project_cards">
        <div className="cards">
          <div className="image">
            <img src={FF} alt="connection failed"/>
          </div>
          <h3>Panda Illustration</h3>
          <p>
            It won’t be a bigger problem to find one video game lover in your
            neighbor. Since the introduction of Virtual Game, it has been
            achieving great heights so far as its popularity and technological.
          </p>
        </div>
        <div className="cards">
          <h3>Panda Illustration</h3>
          <p>
            It won’t be a bigger problem to find one video game lover in your
            neighbor. Since the introduction of Virtual Game, it has been
            achieving great heights so far as its popularity and technological.
          </p>
          <div className="image">
            <img src={FF} alt="connection failed" />
          </div>
        </div>
      </div>
      <div className="project_cards">
        <div className="cards">
          <div className="image">
            <img src={FF} alt="connection failed" />
          </div>
          <h3>Panda Illustration</h3>
          <p>
            It won’t be a bigger problem to find one video game lover in your
            neighbor. Since the introduction of Virtual Game, it has been
            achieving great heights so far as its popularity and technological.
          </p>
        </div>
        <div className="cards">
          <h3>Panda Illustration</h3>
          <p>
            It won’t be a bigger problem to find one video game lover in your
            neighbor. Since the introduction of Virtual Game, it has been
            achieving great heights so far as its popularity and technological.
          </p>
          <div className="image">
            <img src={FF} alt="connection failed" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
