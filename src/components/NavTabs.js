import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavTabs(props) {
  return (
  <Navbar bg="light" expand="lg">
<Container>
  <Navbar.Brand href="/">Moral Meshkot</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home" onClick={() => props.handlePageChange("Home")}>Home</Nav.Link>
      <Nav.Link href="#about" onClick={() => props.handlePageChange("About")}>About</Nav.Link>
     
      <Nav.Link href="#work" onClick={() => props.handlePageChange("Work")}>Work</Nav.Link>
      <Nav.Link href="#resume" onClick={() => props.handlePageChange("Resume")}>Resume</Nav.Link>
      <Nav.Link href="#contact" onClick={() => props.handlePageChange("Contact")}>Contact</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">github</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
         LinkedIn
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Stack overflow</NavDropdown.Item>
        <NavDropdown.Divider />
       
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  );
}

export default NavTabs;
