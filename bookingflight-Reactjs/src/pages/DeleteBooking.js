import React from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "../componentCss/DeleteBooking.css";
import { Container, Button } from "react-bootstrap";
import mountain4 from "../images/mountain5.jpg";

class DeleteBooking extends React.Component {
  state = {};

  componentWillMount() {
    axios
      .get(
        "http://localhost:8080/flightbooking/booking/" +
          this.props.match.params.bookingId
      )
      .then((res) => {
        console.log(res.data);
        this.setState(res.data);
      });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .delete(
        "http://localhost:8080/flightbooking/booking/" +
          this.props.match.params.bookingId
      )
      .then((res) => {
        this.props.history.push("/confirmDelete");
      });
  }

  render() {
    if (this.state.flight === undefined) {
      return null;
    }
    return (
      <div>
        <img src={mountain4} alt="img" />

        <div className="delete-Body">
          <Container>
            <div className="delete-Id">
              <h1> Do you really want to cancel your booking?</h1>
            </div>
            <h2>Flight Details</h2>
            <div>
              Airlines:{this.state.flight.operatingAirlines}
              <br />
              Flight No.:{this.state.flight.flightNumber}
              <br />
              Departure City:{this.state.flight.departureCity}
              <br />
              Date Of Departure:{this.state.flight.dateOfDeparture}
              <br />
              Estimated Departure Time:
              {this.state.flight.estimatedDepartureTime}
              <br />
            </div>
            <h2>Passenger Details</h2>
            First Name:
            {this.state.passenger.firstName}
            <br />
            Last Name:{this.state.passenger.lastName}
            <br />
            Middle Name:{this.state.passenger.middleName}
            <br />
            Email:{this.state.passenger.email}
            <br />
            Phone Number:{this.state.passenger.phone}
            <br />
            <div className="Confirmation-delete-click">
              <Button variant="danger" onClick={this.handleSubmit.bind(this)}>
                Delete Booking
              </Button>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default DeleteBooking;
