import React from "react";

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../componentCss/Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h6 className="head-footer">Lorem ipsum dolor </h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">Lorem ipsum dolor sit</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit</a>
              </li>{" "}
            </ul>
          </div>
          <div className="col">
            <h6 className="head-footer">Lorem ipsum dolor </h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">Lorem ipsum dolor sit</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit</a>
              </li>{" "}
            </ul>
          </div>
          <div className="col">
            <h6 className="head-footer">Lorem ipsum dolor </h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">Lorem ipsum dolor sit</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit</a>
              </li>
              <li>
                <a href="#">Lorem ipsum dolor sit</a>
              </li>{" "}
            </ul>
          </div>
        </div>
        <div className="row">
          <p className="col-sm">
            <FaFacebook className="iconi">
              <a href="https://www.facebook.com" />
            </FaFacebook>
            <FaTwitter className="iconic">
              <a href="https://www.twittter.com" />
            </FaTwitter>
            <FaLinkedin className="iconics">
              <a href="https://www.Linkedin.com" />
            </FaLinkedin>
            <FaInstagram className="iconee">
              <a href="https://www.Instagram.com" />
            </FaInstagram>
          </p>
        </div>
        <div className="row">
          <p className="col-sm">
            copyright &copy; tech store {new Date().getFullYear()} | all rights
            reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

// state = {
//   socialIcons: socialMedia,
// };
//   render() {
//     return (
//       <FooterWrapper>
//         <div className="container py-3">
//           <div className="row">
//             <div className="col-md-6">
//               <p className="text-capitalize">
//                 copyright &copy; tech store {new Date().getFullYear()}. all
//                 rights reserved{" "}
//               </p>
//             </div>
// <div className="col-md-6 d-flex justify-content-around">
// {
//   this.state.socialIcons.map((item) => (
//     <a href={item.url} key={item.id}>
//       {item.icon}
//     </a>
//   ));
// }
// </div>
//           </div>
//         </div>
//       </FooterWrapper>

//   <div className="footer">
//     <Container>
//       <div className="media">
//         {this.state.socialIcons.map((item) => (
//           <a href={item.path} key={item.id}>
//             {item.icon}
//           </a>
//         ))}
//       </div>

//       <p className="text-capitalize">
//         copyright &copy; tech store {new Date().getFullYear()}all rights
//         reserved {""}
//       </p>
//     </Container>
//   </div>
//     );
//   }
// }
// const FooterWrapper = styled.footer`
//   background: var(--darkGrey);
//   color: var(--mainWhite);
//   .icon {
//     font-size: 1.5rem;
//     color: var(--mainWhite);
//     transition: var(--mainTranstion);
//   }
//   .icon:hover {
//     color: var(--primaryColor);
//     cursor: pointer;
//   }
// `;
export default Footer;

// <div className="row">
//             <div className="col-md-6"></div>
// </div>
// </div>
