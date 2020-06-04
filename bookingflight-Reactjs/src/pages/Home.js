import React from "react";
import { Row, Button, Container } from "react-bootstrap";
import Parents from "../components/Parents";
import Frontview from "../components/Frontview";
import Jambotron from "../components/Jumbotron";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
      //I am using my parents components //I need to have class name here ,this
      // is what I am expecting in my parents class
      //I have the parents props

      //and we have the defaultPrents where I have assing
      // the properties
      //<h1 className="mainfocus">When you need to fly, you can rely on us</h1>
      // The React.Fragment component lets you return multiple elements in a render() method without creating an additional DOM element:
      <React.Fragment>
        <Parents parents="defaultParents">
          <Frontview
            title="When you need to fly, you can rely on us"
            subtitle="Welcome to Our World"
          >
            <h2>Find Flights</h2>
            <Container>
              <form className="Flight-input-from">
                <Row className="Flight-input-from-to">
                  <div className="col-md-6">
                    <div className="from">
                      <input
                        type="text"
                        required="required"
                        placeholder=" From:"
                        name="form"
                        onChange={(event) => {
                          this.from = event.target.value;
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    {" "}
                    <div className="to">
                      <input
                        type="text"
                        required="required"
                        placeholder=" To:"
                        name="to"
                        onChange={(event) => {
                          this.to = event.target.value;
                        }}
                      />
                    </div>
                  </div>
                </Row>

                <Row className="Flight-input-Air-Date">
                  <div className="col-md-6">
                    {" "}
                    <div className="operatingAirlines">
                      <input
                        type="text"
                        required="required"
                        placeholder=" Operating Airlines:"
                        name="operatingAirlines"
                        onChange={(event) => {
                          this.operatingAirlines = event.target.value;
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="departureDate">
                      <input
                        type="text"
                        required="required"
                        placeholder="MM-DD-YYYY"
                        name="departureDate"
                        onChange={(event) => {
                          this.departureDate = event.target.value;
                        }}
                      />
                    </div>
                  </div>
                </Row>
                <Button variant="danger" onClick={this.handleSubmit.bind(this)}>
                  Find Flights
                </Button>
              </form>
            </Container>
          </Frontview>
        </Parents>
        <div></div>
        <Jambotron />
      </React.Fragment>
    );
  }
}
export default Home;
