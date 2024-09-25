/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import disImg2 from "../../Images/wbproduct2.png";
import emailImg from '../../../images/envelope-outline.svg'

const Footer = () => {
  return (
    <>
      {/* Start Footer Section */}
      <footer className="footer-section">
        <div className="container relative">
          <div className="sofa-img">
            <img src={disImg2} alt="Image" className="img-fluid" />
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="subscription-form">
                <h3 className="d-flex align-items-center">
                  <span className="me-1">
                    <img
                      src={emailImg}
                      alt="Image"
                      className="img-fluid"
                    />
                  </span>
                  <span>Subscribe to Newsletter</span>
                </h3>

                <form action="#" className="row g-3">
                  <div className="col-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary">
                      <span className="fa fa-paper-plane">submit</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div className="mb-4 footer-logo-wrap">
                <a href="#" className="footer-logo">
                  #Worldchef<span>.</span>
                </a>
              </div>
              <p className="mb-4">
                Experience the power of modern cooking with our advanced
                infrared cooktop. Designed for efficiency and speed, it delivers
                precise heat control for a seamless cooking experience, while
                ensuring energy savings. Enjoy faster cooking times and even
                heat distribution, perfect for preparing your favorite meals
                with ease.
              </p>

              <ul className="list-none flex space-x-4">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-pink-600 hover:text-pink-800">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-8">
              <div className="row links-wrap">
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Product</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top copyright">
            <div className="row pt-4">
              <div className="col-lg-6">
                <p className="mb-2 text-center text-lg-start">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>.
                  All Rights Reserved. &mdash;
                </p>
              </div>
              <div className="col-lg-6 text-center text-lg-end">
                <ul className="list-unstyled d-inline-flex ms-auto">
                  <li className="me-4">
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer Section */}
    </>
  );
};

export default Footer;
