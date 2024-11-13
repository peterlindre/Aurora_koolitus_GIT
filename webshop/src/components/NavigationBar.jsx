import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import i18n from '../pages/i18n';
import { CartSumContext } from '../store/CartSumContext';
import { AuthContext } from '../store/AuthContext';

function NavigationBar() {
  const {cartSum} = useContext(CartSumContext);
  const {loggedIn, setLoggedIn} = useContext(AuthContext);

  function logout() {
    setLoggedIn(false);
    sessionStorage.removeItem("token");
  }

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
          {loggedIn === true && 
          <NavDropdown title="Admin" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="admin/add-product">{t("Add product")}</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="admin/maintain-products">{t("Maintain products")}</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="admin/maintain-categories">{t("Maintain categories")}</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="admin/maintain-shops"> {t("Maintain shops")} </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="admin/supplier"> {t("Supplier")} </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="admin/electricity"> {t("Electricity")} </NavDropdown.Item>           

          </NavDropdown>}
            <button onClick={changeLangEn}>English</button>
            <button onClick={changeLangEe}>Eesti</button>
          </Nav>
          <Nav>
         {loggedIn === false && <Nav.Link as={Link} to="/login" >{t("Login")}</Nav.Link>}
         {loggedIn === true && <Nav.Link onClick={logout}> Log out</Nav.Link>}
            {cartSum}€
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    </div>
  )
}

export default NavigationBar