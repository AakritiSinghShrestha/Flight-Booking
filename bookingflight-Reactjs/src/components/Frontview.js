import React from "react";

///we are making seperate components because we ca use who ever we like
export default function Frontview({ children, title, subtitle }) {
  return (
    <div className="Frontview">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
// export default Frontview;
