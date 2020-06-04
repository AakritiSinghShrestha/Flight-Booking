import React from "react";
import axios from "axios";
import "../componentCss/PassengerDetails.css";
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

class PassengerDetails extends React.Component {
  state = {};
  componentWillMount() {
    axios
      .get(
        "http://localhost:8080/flightbooking/flights/" +
          this.props.match.params.flightId
      )
      .then((res) => {
        this.setState(res.data);

        // console.log(res.data);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      flightId: this.props.match.params.flightId,
      passengerFirstName: this.passengerFirstName,
      passengerLastName: this.passengerLastName,
      passengerMiddleName: this.passengerMiddleName,
      passengerEmail: this.passengerEmail,
      passengerPhone: this.passengerPhone,
      cardNumber: this.cardNumber,
      expirationDate: this.expirationDate,
      securityCode: this.securityCode,
    };
    axios
      .post("http://localhost:8080/flightbooking/booking", data)
      .then((res) => {
        this.props.history.push("/confirmBooking/" + res.data.id);
      });
  }
  render() {
    return (
      <div className="passenger-details">
        <Container>
          <div className="passenger-details-container">
            <h2>Confirm Booking</h2>
            <h2>Flight Details</h2>
            <Container>
              <table>
                <thead>
                  <th>Airlines</th>
                  <th>Departure City</th>
                  <th>Arrival City</th>
                  <th>Departure Date & Time</th>
                  <th>Price</th>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.operatingAirlines}</td>
                    <td>{this.state.departureCity}</td>
                    <td>{this.state.arrivalCity}</td>
                    <td>{this.state.estimatedDepartureTime}</td>
                    <td>${this.state.price}</td>
                  </tr>
                </tbody>
              </table>
              <h2>Passenger Details</h2>

              <form>
                <table>
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th> Last Name</th>
                      <th>Middle Name</th>
                      {/*} <th> Email</th>
    <th>Phone Number</th>*/}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          name="passengerFirstName"
                          onChange={(event) => {
                            this.passengerFirstName = event.target.value;
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="passengerLastName"
                          onChange={(event) => {
                            this.passengerLastName = event.target.value;
                          }}
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="passengerMiddleName"
                          onChange={(event) => {
                            this.passengerMiddleName = event.target.value;
                          }}
                        />
                      </td>{" "}
                      {/*<td>
                      <input
                        type="text"
                        name="passengerEmail"
                        onChange={(event) => {
                          this.passengerEmail = event.target.value;
                        }}
                      />
                    </td>
                   </tr>   // <td>
                    //   {" "}
                    //   <input
                    //     type="text"
                    //     name="passengerPhone"
                    //     onChange={(event) => {
                    //       this.passengerPhone = event.target.value;
                    //     }}
                    //   />
                 // </td>*/}
                    </tr>
                  </tbody>
                </table>
                <table>
                  <thead>
                    <tr>
                      <th> Email</th>
                      <th>Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="email"
                          name="passengerEmail"
                          onChange={(event) => {
                            this.passengerEmail = event.target.value;
                          }}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          name="passengerPhone"
                          onChange={(event) => {
                            this.passengerPhone = event.target.value;
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h2>Card Details</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Card Number</th>
                      <th> Expiration Date</th> <th>Security Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          name="cardNumber"
                          onChange={(event) => {
                            this.cardNumber = event.target.value;
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="date"
                          name="expirationDate"
                          onChange={(event) => {
                            this.expirationDate = event.target.value;
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="securityCode"
                          onChange={(event) => {
                            this.securityCode = event.target.value;
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>

                <button
                  className="button-click"
                  onClick={this.handleSubmit.bind(this)}
                >
                  Confirm Booking
                </button>
              </form>
            </Container>
          </div>
        </Container>
      </div>
    );
  }
}
export default PassengerDetails;
