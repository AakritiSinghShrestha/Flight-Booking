import React from "react";
import { Link } from "react-router-dom";
import {
  Jumbotron as Jumbo,
  Row,
  Col,
  Image,
  Button,
  Container,
} from "react-bootstrap";
// import bhaudha from "../images/bhaudha.jpg";
import "../componentCss/Jumbotron.css";
// import { LoremIpsum } from "react-lorem-ipsum";

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="Jumbotron">
        <Container>
          <Row>
            <div className="col-sm-6-holder"></div>
            <div className="col-sm-6">
              <h1>Welcome To Mount Everest Airlines</h1>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
                massa egestas mollis varius; dignissim elementum. Mollis
                tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                Hendrerit parturient habitant pharetra rutrum gravida
              </p>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
                massa egestas mollis varius; dignissim elementum. Mollis
                tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                Hendrerit parturient habitant pharetra rutrum gravida
              </p>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
                massa egestas mollis varius; dignissim elementum. Mollis
                tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                Hendrerit parturient habitant pharetra rutrum gravida
              </p>

              <Link to="/learnMore">
                <Button variant="primary">About Us</Button>
              </Link>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Jumbotron;

// <img src={bhaudha} className="img-responsive" />

// <div class="desccription-of-jumbotron-picture">
// {" "}
// <img src={bhaudha} />
// </div>

// <Row>
//             <div className="col-lg-6"></div>

//             </div>
//  // <div className="col-lg-6">
// <div class="desccription-of-jumbotron-picture">
//   {" "}
//   <img src={bhaudha} />
// </div>
//             // </div>
//             // </Row>

// <div className="row">
//             <div className="col-lg-6">
//               <img src={bhaudha} />
//             </div>
//             <div className="col-lg-6">
//               <div className="lists">
//                 <h1>Welcome To MountEverest Airlines</h1>
//                 <p>
//                   Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
//                   in massa egestas mollis varius; dignissim elementum. Mollis
//                   Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
//                   in massa egestas mollis varius; dignissim elementum. Mollis
//                   <br />
//                   Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
//                   in massa egestas mollis varius; dignissim elementum. Mollis
//                   Lorem
//                 </p>
//                 <ul class="a">
//                   <li>Lorem</li>
//                   <li>Lorem</li>
//                   <li>Lorem</li>
//                   <li>Lorem</li>
//                 </ul>
//                 <Link to="/learnMore">
//                   <Button variant="primary">Learn More</Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
