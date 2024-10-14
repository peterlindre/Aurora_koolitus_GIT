import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Homepage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/shops">Shops</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/cart" >Cart</Nav.Link>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="admin/add-product">Add product</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="admin/edit-product">Edit product</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="admin/maintain-products">Maintain products</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="admin/maintain-categories">Maintain categories</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="admin/maintain-shops"> Maintain shops </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="admin/supplier"> Supplier </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="admin/electricity"> Electricity </NavDropdown.Item>           

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    </div>
  )
}

export default NavigationBar