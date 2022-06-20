import React from "react";

const Navbar = (props) => {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/" style={{marginLeft:'1em'}}>
        {props.brandName}
      </a>
      {
        props.instanceUri != undefined ? <a href={'policies?instanceUri=' + props.instanceUri}>Policies</a> : null
      }
    </nav>
  );
};
export default Navbar;
