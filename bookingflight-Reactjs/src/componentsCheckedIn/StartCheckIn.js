import React from "react";
import Frontview from "../components/Frontview";
import Parents from "../components/Parents";
import "../componentCss/StartCheckIn.css";
import Jambotron from "../components/Jumbotron";
import { Container, Row, Button } from "react-bootstrap";

class StartCheckIn extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push("checkIn/" + this.bookingId);
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <Parents parents="daughterParents">
            <Frontview
              title="When you need to fly, you can rely on us"
              subtitle="Welcome to Our World"
            ></Frontview>
          </Parents>
          <Container>
            <div className="CheckIn-class">
              <h1>Do you want to checkIn?</h1>
              <h3>Thank You For Choosing Us!</h3>
              <p> * Please,CheckIn your flight 4 hours before your depature.</p>

              <b>Enter the Confirmation Id</b>
              <div className="CheckIn-class-EnterBooking">
                <div className="CheckIn-class-EnterBooking-Id">
                  <input
                    type="text"
                    name="bookingId"
                    placeholder="Enter the Booking Id"
                    onChange={(event) => {
                      this.bookingId = event.target.value;
                    }}
                  />
                </div>
                <div className="CheckIn-class-EnterBooking-Submit">
                  <Button
                    variant="danger"
                    onClick={this.handleSubmit.bind(this)}
                  >
                    CheckIn
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Jambotron />
      </React.Fragment>
    );
  }
}

export default StartCheckIn;
