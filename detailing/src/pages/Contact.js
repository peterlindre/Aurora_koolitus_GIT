import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import i18n from "../components/i18n";
import Map from "../components/Maps";
import { useTranslation } from "react-i18next";
import contact from "../CSS/contact.css";
import Card from "react-bootstrap/Card";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationCityIcon from "@mui/icons-material/LocationCity";

function Contact() {
  const { t } = useTranslation();
  const [coordinaates, setCoordinaates] = useState({
    lngLat: [59.3934, 24.7186],
    zoom: 15,
  });
  return (
    <div>
      <Row>
        <Col className="contact-card">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="text-icon">
              <LocationCityIcon className="location"></LocationCityIcon>
            </Card.Title>
            <Card.Subtitle className="text1">Orient detailing OÜ</Card.Subtitle>
            <Card.Text className="text2">
              Pärnu mnt. 238, Tallinn 10112, ({t("maa-alune parkla 0. korrus")})
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col className="contact-card">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="text-icon">
              <PhoneIcon className="phone"></PhoneIcon>
            </Card.Title>
            <Card.Subtitle className="text1">Info / {t("Broneerimine")}</Card.Subtitle>
            <Card.Text className="text2">
              +372 644 0013 Online {t("broneerimine")}
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col className="contact-card">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="text-icon">
              <MailOutlineIcon className="email"></MailOutlineIcon>
            </Card.Title>
            <Card.Subtitle className="text1">E-mail</Card.Subtitle>
            <Card.Text className="text2">Info@orientdetailing.ee</Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col className="contact-card">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="text-icon">
              <AccessTimeIcon className="time"></AccessTimeIcon>
            </Card.Title>

            <Card.Subtitle className="text1">{t("Oleme avatud")}</Card.Subtitle>

            <Card.Text className="text2">E- P (09:00-20:00)</Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      <br />
      <div className="contact1">
        {t("Broneeri aeg või küsi teenuste kohta lisainformatsiooni")}!{" "}
      </div>
     
      <Map mapCoordinaates={coordinaates} />

      <Container>
        <Row>
          <Col className="contact2">| Orient Detailing OÜ|</Col>
        </Row>
      </Container>
      <br />
    </div>
  );
}

export default Contact;
