import React from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "../componentCss/CheckIn.css";
import { Container, Button } from "react-bootstrap";
import mountain5 from "../images/mountain5.jpg";

class CheckIn extends React.Component {
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
      .put("http://localhost:8080/flightbooking/booking", {
        id: this.props.match.params.bookingId,
        checkedIn: true,
        numberOfBags: this.numberOfBags,
      })
      .then((res) => {
        this.props.history.push("/confirmCheckIn");
      });
  }

  render() {
    if (this.state.flight === undefined) {
      return null;
    }
    return (
      <div>
        <img src={mountain5} alt="img" />

        <div className="checkIn-Body">
          <Container>
            <div className="checkIn-Id">
              <h1>CheckIn Confirmation</h1>
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
            <div className="Confirmation-checkIn">
              <h4>Enter the number of Baggage to checkIn:</h4>
              <input
                type="text"
                onChange={(event) => {
                  this.numberOfBags = event.target.value;
                }}
              />
              <div className="Confirmation-checkIn-click">
                <Button variant="danger" onClick={this.handleSubmit.bind(this)}>
                  Confirm CheckIn
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default CheckIn;
