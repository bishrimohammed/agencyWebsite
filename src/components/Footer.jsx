import React from "react";
import "./footer.css";
import { Button, InputGroup, Form } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container-lg container-fluid">
        <div className="footer_content">
          <div className="d-flex  py-5 align-items-center newsletter">
            <div className="me-lg-5">
              <h1 className="">Join our Newsletter</h1>
            </div>

            <div className="footer_input flex-grow-1">
              <InputGroup className="border-0 d-flex">
                <input
                  className="input p-2 flex-grow-1"
                  placeholder="Your email"
                />
                <InputGroup.Text
                  id="basic-addon2"
                  className="px-5 py-1 bg-primary border-0 text-white"
                >
                  Subscribe
                </InputGroup.Text>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
