import React from "react";
import { PcDisplayHorizontal, VolumeUp } from "react-bootstrap-icons";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import "./services.css";
import image from "../assets/1349.000-ETB (1).jpg";
import image1 from "../assets/1349.000-ETB.png";
const Services = () => {
  return (
    <div className="service ">
      <div className="container-lg  container-fluid">
        <h4 className="ourservice mb-3">OUR SERVICES</h4>
        <div className="content mb-5 w-100 d-flex flex-lg-row flex-column justify-content-between align-items-start">
          <div className="service-left w-100 pe-lg-5 ">
            <div className="service-head">
              <h2>Let us do the work, so you can focus on what matters.</h2>
            </div>
            <div className="service-p py-2">
              <p>
                Transformative IT Solutions, Dynamic Digital Marketing, and
                Inspiring Creative Solutions – Unleashing Limitless Potential.
              </p>
            </div>
            <div className="d-flex flex-column">
              <div className="icon py-1 d-flex align-items-center">
                <div className="icon-content me-sm-3 me-4">
                  <ContentCopyOutlinedIcon fontSize="large" />
                </div>
                <div className="cretive ">
                  <div className="cretive-h">
                    <h4>Creative Solutions</h4>
                  </div>
                  <div className="cretive-p">
                    <p className="mb-0">
                      Creative Solutions - Unleashing Possibilities for Your
                      Vision.
                    </p>
                  </div>
                </div>
              </div>
              <div className="icon py-1 d-flex align-items-center ">
                <div className="icon-content me-sm-3 me-4">
                  <VolumeUp size={40} />
                </div>
                <div className="cretive pt-3">
                  <div className="cretive-h">
                    <h4>Digital Marketing</h4>
                  </div>
                  <div className="cretive-p">
                    <p className="mb-0">
                      Dynamic Digital Marketing Solutions - Fueling Growth &
                      Engagement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="icon py-1 d-flex align-items-center ">
                <div className="icon-content me-sm-3 me-4">
                  <PcDisplayHorizontal size={35} />
                </div>
                <div className="cretive pt-3">
                  <div className="cretive-h">
                    <h4>IOT & Programing</h4>
                  </div>
                  <div className="cretive-p">
                    <p className="mb-0">
                      Seamless IoT & Programming Solutions - Empowering
                      Connectivity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service-right w-100 mx-auto px-lg-5">
            <img src={image} alt="" className="img-fluid w-lg-100" />
          </div>
        </div>
        <div className="d-flex flex-lg-row flex-column  w-100">
          <div className="service-left2 pe-3 w-md-50">
            <div className="content  px-4 pt-4 ">
              <div className="cretive-h">
                <h4>Mobile App Developments</h4>
              </div>
              <div className="cretive-p">
                <p className="mb-0">
                  Innovative Mobile App Solutions - Powering Seamless
                  Experiences.
                </p>
              </div>
              <div className="service2-left-img px-4 pt-5">
                <img src={image1} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="service-right2 mt-lg-0 mt-4">
            <div className="content ps-4">
              <div className="d-flex justify-content-between ">
                <div className="flex-grow-1 align-self-end pb-3">
                  <div className="cretive-h">
                    <h4>Website Development</h4>
                  </div>
                  <div className="cretive-p">
                    <p className="">
                      Creating stunning websites for online success.
                    </p>
                  </div>
                </div>
                <div className="h-100 ">
                  <img src={image} className="img-fluid " alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
