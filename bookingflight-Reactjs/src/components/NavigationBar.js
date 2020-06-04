import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
// import { FaAlignRight } from "react-icons/fa";
// import NPLogo from "../images/NPLogo.jpg";

const Styles = styled.div`
  .navbar {
    background-color: #222;
    position: fixed;
    margin-bottom: 0px;
    background-color: #2140ae;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #ffffff;
    text-decoration: none;
    margin-left: 25px;
    text-align: center;
    padding: 10px;
    text-shadow: 2px 2px 5px red;
    font-weight: bold;
    font-size: lighter;
    &:hover {
      color: #342f23;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Mount Everest Airlines</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/startDeleteBooking">Cancel Booking</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/startCheckIn">CheckIn</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
export default NavigationBar;
