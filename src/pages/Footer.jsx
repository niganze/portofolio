import React from 'react';
import '../css/Footer.css';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaWhatsappSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3 className="footer-title">About Us</h3>
            <p> I am a web developer with experience in ReactJS, Node.js, and
              MongoDB. Check out my portfolio to learn more about my skills and
              projects.</p>
          </div>
          <div className="col-md-3">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact">
              <li><i className="fa fa-map-marker"></i>123 Main kigali, Rwanda, NY 10001</li>
              <li><i className="fa fa-phone"></i>(123) 782500771</li>
              <li><i className="fa fa-envelope"></i>niganzealain@gmail.com</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="footer-title">Follow Us</h3>
            <ul className="footer-social">
              <li><a href="#"><AiFillFacebook/></a></li>
              <li><a href="#"><AiFillTwitterCircle/></a></li>
              <li><a href="#"><FaWhatsappSquare/></a></li>
              <li><a href="#"><AiFillInstagram/></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2023 My Website. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <ul className="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
