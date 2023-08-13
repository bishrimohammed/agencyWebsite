import React from "react";
import "./footer.css";
import logo from "../assets/logo-removebg-preview.png";
import { Button, InputGroup, Form } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/FacebookRounded";
import { Facebook } from "react-bootstrap-icons/";
import { ArrowRight } from "react-bootstrap-icons";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
//import InstagramIcon from "@mui/icons-material/Intagram";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container-lg container-fluid">
        <div className="footer_content">
          <div className="d-md-flex  py-5 align-items-center newsletter">
            <div className="me-lg-5">
              <h1 className="">Join our Newsletter</h1>
            </div>

            <div className="footer_input flex-md-grow-1">
              <div className="border-0 d-md-flex">
                <input
                  className="input p-2 d-md-inline d-block flex-grow-1"
                  placeholder="Your email"
                />
                <button
                  id="basic-addon2"
                  className="px-5 py-1 btn bg-primary border-0 text-center text-white"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <footer className="py-md-5">
            <div className="row py-5 mx-0">
              <div className="col-md-5 ms-0 me-md-5 offset-md-1 mb-3">
                <div className="me-2">
                  <div className="ms-2">
                    <img src={logo} alt="" />
                  </div>

                  <p className="py-3  mb-0">
                    Your trusted partner for innovative software solutions. We
                    combine expertise, vision, and passion to drive digital
                    transformation and deliver exceptional results.
                  </p>
                  <div className="social_icon_list py- d-flex">
                    <div className="footer_icon">
                      <FaFacebookF className="icon" />
                    </div>
                    <div className="footer_icon">
                      <FaInstagram className="icon" />
                    </div>
                    <div className="footer_icon">
                      <FaTwitter className="icon" />
                    </div>
                    <div className="footer_icon">
                      <FaYoutube className="icon" />
                    </div>
                    <div className="footer_icon">
                      <FaLinkedin className="icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 me-md-3 mb-3">
                <h3 className="mb-md-3 ">Services</h3>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a className="nav-link p-0 ">Web Design</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link p-0 "> mobile App</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link p-0 ">API Development </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link p-0 ">API Integration</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link p-0 ">Online Marketing</a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-md-2 me-md-3 mb-3">
                <h3 className="mb-md-3">Support</h3>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a className="nav-link p-0 ">Call Us</a>
                  </li>

                  <li className="nav-item mb-2">
                    <a className="nav-link p-0 ">FAQs</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link p-0 ">Contact Us</a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-md-2  mb-3">
                <h3 className="mb-md-3">Company</h3>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a className="nav-link p-0 ">Home</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link p-0 ">Features</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link p-0 ">Pricing</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link p-0 ">FAQs</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a className="nav-link p-0 ">About</a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
