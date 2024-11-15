import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';


function TopNav() {

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
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container className='navbar'>
      <Navbar.Brand  as={Link} to="/homepage"><HomeIcon></HomeIcon></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className='headers' as={Link} to="/services">{t("Teenused")}</Nav.Link>
          <Nav.Link className='headers' as={Link} to="/prices" >{t("Hinnakiri")}</Nav.Link>
          <Nav.Link className='headers' as={Link} to="/contact">{t("Kontakt")}</Nav.Link>
          <Nav.Link className='headers' as={Link} to="https://www.instagram.com/raythdetailing/"><InstagramIcon className='instagram'></InstagramIcon></Nav.Link>
        </Nav>

        <Nav className="ms-auto">
          <Nav.Link className='languagebtn' > <Button onClick={changeLangEn}>English</Button></Nav.Link>
          <Nav.Link className='languagebtn' > <Button onClick={changeLangEe}>Eesti</Button></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default TopNav