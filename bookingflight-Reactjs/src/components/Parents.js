import React from "react";
//to render something above parents I use the props children
//so every time I am redering the parents components I wiil have the differnt className
//so the class name will be equal to my props Parents
//aND we also need to render the children
export default function Parents({ children, parents }) {
  return <header className={parents}>{children}</header>;
}
