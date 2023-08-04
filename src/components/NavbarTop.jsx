import React from "react";
import logo from "../assets/logo-removebg-preview.png";
import "./nav.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarTop = () => {
  return (
    <>
      <Navbar
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "black" }}
        fixed="top"
        className=" navbartop "
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="container-fluid "
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="logo img-fluid h-100 " />
          </Navbar.Brand>

          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ flexBasis: 0, flexGrow: "initial" }}
          >
            <Nav className="">
              <Nav.Link className="me-3 text-nowrap" href="#home">
                HOME
              </Nav.Link>
              <Nav.Link className="me-3 text-nowrap" href="#about">
                ABOUT US
              </Nav.Link>
              <Nav.Link className="me-3 text-nowrap" href="#team">
                TEAM
              </Nav.Link>
              <Nav.Link className="me-3 text-nowrap" href="#portfolio">
                PORTFOLIO
              </Nav.Link>
              <Nav.Link className="me-3 text-nowrap" href="#service">
                SERVICES
              </Nav.Link>
              <Nav.Link className="me-3 text-nowrap" href="#project">
                PROJECT BID
              </Nav.Link>
              <Nav.Link className="me-3 text-nowrap" href="#blog">
                BLOG
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="right d-sm-block d-none">
            <button type="button" className="btn btn-primary">
              Contact Now
            </button>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default NavbarTop;
