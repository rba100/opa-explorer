import React from "react";

const Navbar = (props) => {

  var navLinks = []

  if(props.instanceUri){
    navLinks.push(
      <a href="#" key="policies">Policies</a>
    )
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#" style={{ marginLeft: "1em" }}>
        {props.brandName}
      </a>
      {navLinks}
    </nav>
  );
};
export default Navbar;
