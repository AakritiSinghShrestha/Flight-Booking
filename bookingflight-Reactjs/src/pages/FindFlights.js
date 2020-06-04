import React from "react";
class FindFlights extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(
      "displayFlights" +
        "/" +
        this.from +
        "/" +
        this.to +
        "/" +
        this.operatingAirlines +
        "/" +
        this.departureDate
    );
  }

  render() {
    return (
      <div>
        <h2>FindFlights</h2>

        <form>
          <div className="from">
            From:
            <input
              type="text"
              placeholder=" From:"
              name="form"
              onChange={(event) => {
                this.from = event.target.value;
              }}
            />
          </div>
          <div className="to">
            To:{" "}
            <input
              type="text"
              placeholder=" To:"
              name="to"
              onChange={(event) => {
                this.to = event.target.value;
              }}
            />
          </div>
          <div className="operatingAirlines">
            Operating Airlines:
            <input
              type="text"
              placeholder=" Operating Airlines:"
              name="operatingAirlines"
              onChange={(event) => {
                this.operatingAirlines = event.target.value;
              }}
            />
          </div>
          <div className="departureDate">
            Departure Date:
            <input
              type="text"
              placeholder="  Departure Date:"
              name="departureDate"
              onChange={(event) => {
                this.departureDate = event.target.value;
              }}
            />
          </div>
          <button onClick={this.handleSubmit.bind(this)}>Search</button>
        </form>
      </div>
    );
  }
}
export default FindFlights;
