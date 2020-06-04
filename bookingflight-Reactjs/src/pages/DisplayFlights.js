import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Button } from "react-bootstrap";
import "../componentCss/DisplayFlights.css";
import * as ReactBootstrap from "react-bootstrap";
import temple from "../images/temple.jpg";
class DisplayFlights extends React.Component {
  state = {
    flightData: [],
  };

  componentWillMount() {
    axios
      .get(
        "http://localhost:8080/flightbooking/flights?from=" +
          this.props.match.params.from +
          "&to=" +
          this.props.match.params.to +
          "&operatingAirlines=" +
          this.props.match.params.operatingAirlines +
          "&departureDate=" +
          this.props.match.params.departureDate
      )
      .then((res) => {
        const flightData = res.data;
        this.setState({ flightData });
        console.log(flightData);
      });
  }
  render() {
    return (
      // <div className="display-pic">
      //   <img src={temple} alt="img" />

      <div className="FlightDetails">
        <h1 className="FlightDetails-h1">Flight Details</h1>
        <ReactBootstrap.Container>
          <table striped bordered hover>
            <thead>
              <tr>
                <th>Airlines</th>
                <th>Departure City</th>
                <th>Arrival City</th>
                <th>Departure Date and Time</th>
                <th>Price</th>
                <th>Select Below</th>
              </tr>
            </thead>
            <tbody>
              {this.state.flightData.map((flight) => (
                <RowCreater item={flight} />
              ))}
            </tbody>
          </table>
        </ReactBootstrap.Container>
      </div>
      // </div>
    );
  }
}
class RowCreater extends React.Component {
  render() {
    var flight = this.props.item;
    return (
      <tr>
        <td>{flight.operatingAirlines}</td>
        <td>{flight.departureCity}</td>
        <td>{flight.arrivalCity}</td>
        <td>{flight.estimatedDepartureTime}</td>
        <td>${flight.price}</td>
        <ReactBootstrap.Container>
          <button className="button-select">
            <Link to={"/passengerDetails/" + flight.id}>Select</Link>
          </button>
        </ReactBootstrap.Container>
      </tr>
    );
  }
}

export default DisplayFlights;
