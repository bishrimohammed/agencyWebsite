import React from "react";
import logo from "../assets/logo-removebg-preview.png";
import "./nav.css";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark py-0 px-lg-5 px-md-3 px-sm-2 px-0">
      <div className="container-fluid px-lg-2 d-flex justify-content-between align-items-center">
        <button
          className="navbar-toggler d-lg-none d-block"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" className="logo img-fluid h-100 " />
        </a>

        <div className="d-lg-block d-none">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item me-3 ">
              <a className="nav-link active" href="#" aria-current="page">
                HOME <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#">
                ABOUT US
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#">
                TEAM
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#">
                PORTFOLIO
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#">
                SERVICES
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#">
                PROJECT BID
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BLOG
              </a>
            </li>
          </ul>
        </div>
        <div className="right d-sm-block d-none">
          <button type="button" className="btn btn-primary">
            Contact Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
