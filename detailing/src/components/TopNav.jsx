import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

function TopNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand  as={Link} to="/homepage">Läikiv ratsu Detailing</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/works" >Tehtud tööd</Nav.Link>
          <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
          <Nav.Link as={Link} to="/services">Teenused</Nav.Link>
    
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default TopNav