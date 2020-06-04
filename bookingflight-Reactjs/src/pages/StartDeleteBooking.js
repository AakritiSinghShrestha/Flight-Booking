import React from "react";
import { Link } from "react-router-dom";
import {
  Jumbotron,
  Grid,
  Row,
  Col,
  Image,
  Button,
  Container,
} from "react-bootstrap";
import Parents from "../components/Parents";
import Frontview from "../components/Frontview";
import Jambotron from "../components/Jumbotron";
import StartDelete from "../componentCss/StartDelete.css";
// import FindFlights from "./FindFlights";

class StartDeleteBooking extends React.Component {
  handleSubmit(event) {
    this.props.history.push("deleteBooking/" + this.bookingId);
  }
  render() {
    return (
      <React.Fragment>
        <Parents parents="sonParents"></Parents>
        <Container>
          <div className="Delete-class">
            <h2>Cancel Your Booking?</h2>
            <p> *Free Cancellation within 24 hours of booking!</p>

            <b>Enter the Confirmation Id</b>
            <div className="Delete-class-DeleteBooking">
              <div className="Delete-class-DeleteBooking-Id">
                <input
                  type="text"
                  name="bookingId"
                  placeholder="Enter the Confirmation Id"
                  onChange={(event) => {
                    this.bookingId = event.target.value;
                  }}
                />
              </div>

              <Button variant="danger" onClick={this.handleSubmit.bind(this)}>
                Cancel Booking
              </Button>
            </div>
          </div>
        </Container>
        <Jambotron />
      </React.Fragment>
    );
  }
}
export default StartDeleteBooking;

// <Frontview
//             title="Everything you need to know before you embark on your next adventure with Mount Everest Airlines"
//             subtitle="Welcome to Our World"
//           ></Frontview>
