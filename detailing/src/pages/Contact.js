import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import i18n from '../components/i18n';
import Map from '../components/Maps';
import { useTranslation } from 'react-i18next';


function Contact() {
  const { t } = useTranslation();
  const [coordinaates, setCoordinaates] = useState({lngLat: [59.3934, 24.7186], zoom: 15});
  return (

    <div>
      <br /> <br />
     <div className='contact'>| Orient Detailing |</div>

     <br />
     <div className='contact1'>{t("Broneeri aeg või küsi teenuste kohta lisainformatsiooni")}! </div>
     <div className='contact1'>{t("Küsimuste korral võib ka helistada numbril")} +372 644 0013 </div>
       <Map mapCoordinaates={coordinaates}  />

      <Container>
       <br />
        <Row>
        
          <Col className='contact2'>Avatud E-R 9:00-18:00</Col>
          <Col className='contact2'>Pärnu mnt. 238, Tallinn  </Col>
          <Col className='contact2'><PhoneIcon className='phone'></PhoneIcon> +372 644 0013 </Col>
          <Col className='contact2'><MailOutlineIcon className='email'></MailOutlineIcon> Info@orientdetailing.ee</Col>
        </Row>
      </Container>

    </div>
  )
}

export default Contact