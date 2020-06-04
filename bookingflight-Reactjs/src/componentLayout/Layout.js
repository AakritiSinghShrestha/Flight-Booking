import React from "react";

import { Container } from "react-bootstrap";

// class LearnMore extends React.Component {
//   render(props) {
//     return (
//       <div>
//         <Container>{this.props.children}</Container>
//       </div>
//     );
//   }
// }
// export default LearnMore;

const Layout = (props) => <Container>{props.children}</Container>;
export default Layout;
