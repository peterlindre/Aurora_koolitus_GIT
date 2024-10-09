import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


function Menu() {
  const { t, i18n } = useTranslation();
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/tooted"><img className="pilt" src="https://digi.geenius.ee/app/uploads/sites/7/2020/05/4e8cd4ef7f6f6a06695160e1b2d37c23-1920x1280.jpg" alt="pilt" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/kontakteeru">{t("contact")}</Nav.Link>
            <Nav.Link as={Link} to="/osta-kinkekaart">{t("kinkekaart")}</Nav.Link>
            <NavDropdown title="Kasutaja" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/seaded">Seaded</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/profiil"> Profiil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/admin">Admin</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/ostukorv">Ostukorv</Nav.Link>
            <Nav.Link as={Link} to="/logi-sisse"> Logi sisse </Nav.Link>
            <Nav.Link as={Link} to="/registreeru"> Registreeru </Nav.Link>
            <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            <button onClick={() => i18n.changeLanguage("et")}>EE</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;