import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import i18n from '../pages/i18n';

function NavigationBar() {

  const { t, i18n } = useTranslation();
  const changeLangEn = () => {
    i18n.changeLanguage("en")
    localStorage.setItem("language","en");
    // alati kui .setItem, peab kuskil olema ka .getItem
  }

  const changeLangEe = () => {
    i18n.changeLanguage("et");
    localStorage.setItem("keel","et");
  }


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">{t("Homepage")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to= "/shops">{t("Shops")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("Contact")}</Nav.Link>
            <Nav.Link as={Link} to="/cart" >{t("Cart")}</Nav.Link>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="admin/add-product">{t("Add product")}</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="admin/maintain-products">{t("Maintain products")}</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="admin/maintain-categories">{t("Maintain categories")}</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="admin/maintain-shops"> {t("Maintain shops")} </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="admin/supplier"> {t("Supplier")} </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="admin/electricity"> {t("Electricity")} </NavDropdown.Item>           

            </NavDropdown>
            <button onClick={changeLangEn}>English</button>
            <button onClick={changeLangEe}>Eesti</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    </div>
  )
}

export default NavigationBar