import React from "react";
import { Navbar } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav'

const NavigationBar = (props) => {

  var navLinks = []

  if(props.instanceUri){
    var uri = "/policies?instanceUri=" + props.instanceUri;
    navLinks.push(
      <Nav.Link disabled={true} >&gt;</Nav.Link>      
    )
    navLinks.push(
      <Nav.Link href={uri} key="policies">{props.instanceUri}</Nav.Link>
    )
  }

  return (
    <Navbar className="navbar navbar-expand-lg light" bg="light" variant="light">
      <a href="/" className="navbar-brand" style={{ marginLeft: "1em" }}>
        {props.brandName}
      </a>
      <Nav>
        {navLinks}
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
