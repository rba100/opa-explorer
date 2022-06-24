import React from "react";

const Navbar = (props) => {

  var navLinks = []

  if(props.instanceUri){
    var uri = "/policies?instanceUri=" + props.instanceUri;
    navLinks.push(
      <a href={uri} key="policies">Policies</a>
    )
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a href="/" className="navbar-brand" style={{ marginLeft: "1em" }}>
        {props.brandName}
      </a>
      {navLinks}
    </nav>
  );
};
export default Navbar;
