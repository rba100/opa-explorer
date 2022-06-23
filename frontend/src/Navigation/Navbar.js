import React from "react";

const Navbar = (props) => {

  var navLinks = []

  if(props.instanceUri){
    navLinks.push(
      <a href="#">Policies</a>
    )
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" style={{ marginLeft: "1em" }}>
        {props.brandName}
      </a>
      {navLinks}
    </nav>
  );
};
export default Navbar;
