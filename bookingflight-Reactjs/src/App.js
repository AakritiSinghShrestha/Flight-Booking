import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import FindFlights from "./pages/FindFlights";
import DisplayFlights from "./pages/DisplayFlights";
import PassengerDetails from "./pages/PassengerDetails";
import ConfirmBooking from "./pages/ConfirmBooking";
import StartCheckIn from "./componentsCheckedIn/StartCheckIn";
import CheckIn from "./componentsCheckedIn/CheckIn";
import ConfirmCheckIn from "./componentsCheckedIn/ConfirmCheckIn";

import MyAccount from "./pages/MyAccount";
import Home from "./pages/Home";
import LearnMore from "./components/LearnMore";
import NavigationBar from "./components/NavigationBar";
import Layout from "./componentLayout/Layout";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
// import Jumbotron from "./components/Jumbotron";
import StartDeleteBooking from "./pages/StartDeleteBooking";
import DeleteBooking from "./pages/DeleteBooking";
import ConfirmDelete from "./pages/ConfirmDelete";
// import StartDeleteBooking from "./componentDelete/StartDeleteBooking";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />

        <Switch>
          <Route exact path="/findFlights" component={FindFlights} />
          <Route
            exact
            path="/displayFlights/:from/:to/:operatingAirlines/:departureDate"
            component={DisplayFlights}
          />
          <Route
            exact
            path="/passengerDetails/:flightId"
            component={PassengerDetails}
          />
          <Route
            exact
            path="/confirmBooking/:bookingId"
            component={ConfirmBooking}
          />
          <Route exact path="/startCheckIn" component={StartCheckIn} />
          <Route exact path="/checkIn/:bookingId" component={CheckIn} />
          <Route exact path="/confirmCheckIn" component={ConfirmCheckIn} />
          <Route exact path="/learnMore" component={LearnMore} />
          <Route exact path="/" component={Home} />
          <Route exact path="/myAccount" component={MyAccount} />
          <Route exact path="/checkIn/:bookingId" component={CheckIn} />
          <Route exact path="/confirmCheckIn" component={ConfirmCheckIn} />
          <Route
            exact
            path="/startDeleteBooking"
            component={StartDeleteBooking}
          />
          <Route
            exact
            path="/deleteBooking/:bookingId"
            component={DeleteBooking}
          />
          <Route exact path="/confirmDelete" component={ConfirmDelete} />
          <Layout></Layout>
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
//
// <Route exact path="/book" component={Book} />
