import React, { Component } from "react";
import { Image, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./CustomNavbar.css";
import img_Home from "../localAssets/nc.jpg";

export default class CustomNavbar extends Component {
  render() {
    return (
      <div>
        <a href="/">
          <Image src={img_Home} className="brand-logo" />
        </a>
        <Navbar className="navBar fixed-top" expand="lg">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="ml-auto justify-content-end"
          />
          <Navbar.Collapse fluid className="centered-flex centered-text">
            <Nav fluid className="centered-flex centered-text">
              {/*
              <NavDropdown
                className="text-color"
                title="Dropdown"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/news">News DD</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                 

                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
               */}

              <Nav.Link className="text-style " href="/about">
                <h4>About Us</h4>
              </Nav.Link>

              <Nav.Link className="text-style" href="/samples">
                <h4>Samples</h4>
              </Nav.Link>
              <Nav.Link className="text-style" href="/offers">
                <h4>Offers</h4>
              </Nav.Link>
              <Nav.Link className="text-style" href="/contact">
                <h4>Contact</h4>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
