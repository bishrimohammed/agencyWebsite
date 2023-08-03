import React from "react";
import "./header.css";
import image from "../assets/Voice-Of-Customer.webp";
const Header = () => {
  return (
    <div className="header">
      <div className="content  container-lg container-fluid d-flex  align-items-center justify-content-center ">
        <div className="d-flex px-2  flex-lg-row flex-column align-items-center ">
          <div className="left  d-flex flex-column justify-content-between ">
            <h2 className="mb-lg-3 mb-3">Empowering the Digital</h2>
            <h1 className="mb-lg-4 mb-3">
              Empowering Your Digital Dreams: Unleashing Websites & Apps to
              Life!
            </h1>
            <p className="mb-4 lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur, delectus magnam temporibus voluptate dolorem dolorum
            </p>
          </div>
          <div className="right ml-lg-2 mt-lg-5 mt-md-4">
            <img src={image} alt="" className="header-img img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
