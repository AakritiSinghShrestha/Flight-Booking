import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import Frontview from "../components/Frontview";
import Parents from "../components/Parents";

class MyAccount extends React.Component {
  render() {
    return (
      <Parents parents="daughterParents">
        <Frontview
          title="When you need to fly, you can rely on us"
          subtitle="Welcome to Our World"
        ></Frontview>
      </Parents>
    );
  }
}
export default MyAccount;
