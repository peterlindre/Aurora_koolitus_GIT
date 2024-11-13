import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { IconButton } from '@mui/material';

import Map from '../components/Maps';

function Contact() {
  const [coordinaates, setCoordinaates] = useState({lngLat: [59.3934, 24.7186], zoom: 15});
  return (

    <div>
     <div>Läikiv Ratsu Detailing</div>
       <Map mapCoordinaates={coordinaates}  />

      <Container>
        <Row>
           
           <div>Broneeri aeg või küsi teenuste kohta lisainformatsiooni! </div>
           <div>Küsimustega ja broneerimise jaoks võib ka helistada numbril 644 0013 </div>
        </Row>
        <Row>
        
          <Col>Avatud E-R 9:00-18:00</Col>
          <Col>Kaare 1, Tallinn  </Col>
          <Col>info@laikivratsu.ee</Col>
        </Row>
      </Container>

    </div>
  )
}

export default Contact