import React from "react";
import "../css/Blog.css";
import VV from "../ASSETS/blog1.jpg";
import BC from '../ASSETS/blog2.jpg';
import BT from '../ASSETS/blog3.jpg';
import MN from "../ASSETS/IMG_0158.jpeg";
import CD from "../ASSETS/IMG_0160.jpeg";
import VF from "../ASSETS/IMG_235.jpeg";
import { GiFastForwardButton } from "react-icons/gi";
import { FcLike } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
function Blog() {
  return (
    <div className="blog">
      <h2>Blog Posts</h2>
      <h4>The technology for the future generation</h4>
      <div className="blog_container">
        <div className="one_cards">
          <div className="cards_blog">
            <img src={VV} alt="connection failed" />
          </div>
          <div className="world">
            <div className="title">
              <h6>ADMIN</h6>
              <h6> JAN. 07, 2021</h6>
              <h6>3 COMMENTS</h6>
            </div>
            <h4>The Newest and Updated Bootstrap 5 is Here</h4>
            <p>
              A h6 river named Duden flows by their place and supplies it with
              the necessary regelialia.
            </p>
            <div className="icon">
              <GiFastForwardButton />
              <div className="sub_icon">
                <FcLike />
                <FcViewDetails />
              </div>
            </div>
          </div>
        </div>
        <div className="one_cards">
          <div className="cards_blog">
            <img src={BT} alt="connection failed" />
          </div>
          <div className="world">
            <div className="title">
              <h6>ADMIN</h6>
              <h6> JAN. 07, 2021</h6>
              <h6>3 COMMENTS</h6>
            </div>
            <h4>The Newest and Updated Bootstrap 5 is Here</h4>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div className="icon">
              <GiFastForwardButton />
              <div className="sub_icon">
                <FcLike />
                <FcViewDetails />
              </div>
            </div>
          </div>
        </div>
        <div className="one_cards">
          <div className="cards_blog">
            <img src={BC} alt="connection failed  pleased " />
          </div>
          <div className="world">
            <div className="title">
              <small>ADMIN</small>
              <h6> JAN. 07, 2021</h6>
              <h6>3 COMMENTS</h6>
            </div>

            <h4>The Newest and Updated Bootstrap 5 is Here</h4>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div className="icon">
              <GiFastForwardButton />
              <div className="sub_icon">
                <FcLike />
                <FcViewDetails />
              </div>
            </div>
          </div>
        </div>
        <div className="one_cards">
          <div className="cards_blog">
            <img src={MN} alt="connection failed" />
          </div>
          <div className="world">
            <div className="title">
              <small>ADMIN</small>
              <h6> JAN. 07, 2021</h6>
              <h6>3 COMMENTS</h6>
            </div>

            <h4>The Newest and Updated Bootstrap 5 is Here</h4>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div className="icon">
              <GiFastForwardButton />
              <div className="sub_icon">
                <FcLike />
                <FcViewDetails />
              </div>
            </div>
          </div>
        </div>
        <div className="one_cards">
          <div className="cards_blog">
            <img src={CD} alt="connection failed" />
          </div>
          <div className="world">
            <div className="title">
              <small>ADMIN</small>
              <h6> JAN. 07, 2021</h6>
              <h6>3 COMMENTS</h6>
            </div>

            <h4>The Newest and Updated Bootstrap 5 is Here</h4>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div className="icon">
              <GiFastForwardButton />
              <div className="sub_icon">
                <FcLike />
                <FcViewDetails />
              </div>
            </div>
          </div>
        </div>
        <div className="one_cards">
          <div className="cards_blog">
            <img src={VF} alt="connection failed" />
          </div>
          <div className="world">
            <div className="title">
              <h6>ADMIN</h6>
              <h6> JAN. 07, 2021</h6>
              <h6>3 COMMENTS</h6>
            </div>

            <h4>The Newest and Updated Bootstrap 5 is Here</h4>
            <p>
              A h6 river named Duden flows by their place and supplies it with
              the necessary regelialia.
            </p>
            <div className="icon">
              <GiFastForwardButton className="sub_icon" />
              <div className="sub_icon">
                <FcLike />
                <FcViewDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
