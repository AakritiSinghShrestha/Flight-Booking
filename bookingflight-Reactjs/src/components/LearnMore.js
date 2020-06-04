import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Button, Container } from "react-bootstrap";

import "../componentCss/AboutUs.css";

class LearnMore extends React.Component {
  render() {
    return (
      <div className="About-Us">
        <Container>
          <Row>
            <Col>
              <h1>About Us</h1>
              <h2>Our dedicated and diverse crew</h2>
              <h5>
                Mount Everest Airlines clients are served by professionals that
                are among the most exceptional in the aviation industry. Our
                Crew Members are friendly and we are in business for more than 9
                months.Our business is run by enterpreneur and professor{" "}
                <span> Kaleb M Burd </span> and <span> Brian Jorgage </span>
                .Even though we have a small family crew members we make sure
                our client gets a good experience.Within this short span of time
                we were able to launch our own airlines that travels across the
                globe. On Behalf of all the Crew Members we would like to thanks
                <span> Kaleb </span> and <span> Brian </span> for their tireless
                effort and dedication to make our airlines one of the best and
                leading airlines in the world.We also wish all the crew members
                and the airlines a successful journey.
              </h5>
              <br />
              <h2>Crew Members</h2>
              <ul>
                <li>Aakriti Singh Shrestha</li>
                <li>Dora He</li>
                <li>Kayan Reid</li>
                <li>Ritika Chhibba</li>
                <li>Ashwini Pradhan</li>
                <li>Tony</li>
                <li>Gelila</li>
                <li>Yvette</li>
                <li>Diamond Mickle</li>
                <li>Lan</li>
                <li>Glenn Tyson</li>
              </ul>
            </Col>
            <col></col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default LearnMore;
