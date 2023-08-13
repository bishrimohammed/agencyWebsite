import React from "react";
import "./header.css";
import image from "../assets/Website.png";
import { Animation } from "react-animate-style";
const Header = () => {
  return (
    <div className="header">
      <div className="content  container-lg container-fluid d-flex   align-items-md-center justify-content-md-center ">
        <div className="d-flex px-2  flex-lg-row flex-column ">
          <div className="left  d-md-flex flex-column  ">
            <Animation
              animationIn="fadeInUp"
              animationInDelay={50}
              isVisible={true}
            >
              <h2 className="mb-lg-3 mb-3">Empowering the Digital</h2>
            </Animation>
            <Animation
              animationIn="fadeInUp"
              animationInDelay={100}
              isVisible={true}
            >
              <h1 className="mb-lg-4 mb-3">
                Empowering Your Digital Dreams: Unleashing Websites & Apps to
                Life!
              </h1>
            </Animation>
            <Animation
              animationIn="fadeInUp"
              animationInDelay={1000}
              isVisible={true}
            >
              <p className="mb-4 lead">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur, delectus magnam temporibus voluptate dolorem
                dolorum
              </p>
            </Animation>
          </div>

          <div className="right w-100 ">
            <Animation animationIn="zoomIn" className="w-100" isVisible={true}>
              <img src={image} alt="" className="img-fluid " />
            </Animation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
