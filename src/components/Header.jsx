import React from "react";
import "./header.css";
import image from "../assets/Website.png";
import SvgComponent from "./svgComponent";
const Header = () => {
  return (
    <div className="header">
      <div className="content  container-lg container-fluid d-flex   align-items-md-center justify-content-md-center ">
        <div className="d-flex px-2  flex-lg-row flex-column ">
          <div className="left  d-md-flex flex-column  ">
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
          <div className="right  ">
            <img src={image} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
