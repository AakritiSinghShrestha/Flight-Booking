import React from "react";
import "../componentCss/ConfirmCheckIn.css";
class ConfirmCheckIn extends React.Component {
  render() {
    return (
      <div className="Confirm-checkIn">
        <h1>Thank you for Flying with Us.</h1>
        <br />
        <h3>Your CheckIn has been successfully completed.</h3>
        <br />
        <h7>*Please reach to the airport 2 hours Early.</h7>
      </div>
    );
  }
}
export default ConfirmCheckIn;
