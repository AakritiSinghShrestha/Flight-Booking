import React from "react";
import "../componentCss/ConfirmDelete.css";
class ConfirmDelete extends React.Component {
  render() {
    return (
      <div className="Confirm-delete">
        <h3>Your booking has been Successfully cancelled.</h3>
        <br />
        <h4>Please, Remember us whenever you need to fly.</h4>
      </div>
    );
  }
}
export default ConfirmDelete;
