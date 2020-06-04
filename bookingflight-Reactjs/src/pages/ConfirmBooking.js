import React from "react";
import "../componentCss/ConfirmBooking.css";

class ConfirmBooking extends React.Component {
  render() {
    return (
      <div className="Confirm-booking">
        <h2>Thank you for being a part of Mount Everest Airlines</h2>
        <h6>
          You Have Successfully completed the booking
          <br />
          <h5>Your confirmation id : {this.props.match.params.bookingId}</h5>
        </h6>
      </div>
    );
  }
}
export default ConfirmBooking;
