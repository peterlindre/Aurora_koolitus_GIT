import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import i18n from '../components/i18n';
import { Link } from 'react-router-dom';
import services from '../CSS/services.css'

function Services() {

  const { t } = useTranslation();

  return (

    <Container>
      <Row>
      <Col className='col1'>
      <Link to="/prices" style={{ textDecoration: 'none' }}>
      <div className="card" >
        <img
          className="card-img-top"
          src="https://www.autofinesse.com/cdn/shop/articles/a5.jpg?v=1716459223&width=1620" 
          alt="Detailing Service" 
        />
        <div className="card-body">
          <h5 className="card-title">Detailing</h5>
          <p className="card-text">
            <div>• {t("Sise- ja välispesu")}</div>
            <div>• {t("Kere poleerimine")}</div>
            <div>• {t("Vahatamine ja keraamiline kaitse")}</div>
            <div>• {t("Klaaside vihmavastane töötlemine")}</div>
            <div>• {t("Nahahooldus ja keemiline puhastus")}</div>
          </p>  
        </div>
      </div>
        </Link>
      </Col>
      <Col className='col1'>
      <Link to="/prices" style={{ textDecoration: 'none' }}>
      <div className="card">
      <img
          className="card-img-top"
          src="https://cougarchemical.com/cdn/shop/articles/28CIpT0ykEyXf3qSoKQzVfTrMBZXym4F1660838411_1024x1024.jpg?v=1660919971" 
          alt="Detailing Service" 
        />
        <div className="card-body">
          <h5 className="card-title">{t("Taastamine")}</h5>
          <p className="card-text">
          <div>•{t("Nahkistmete ja roolide taastamine")}</div>
        <div>•{t("Rooli nahatamine")} </div>
        <div>•{t("Tulede taastamine")} </div>
        <div>•{t("Pidurisadulate värvimine")}</div>
        <div>•{t("Kere- ja värvitööd")}</div> 
          </p>
          
        </div>
      </div>
      </Link>
      </Col>
      <Col className='col1'>
      <Link to="/prices" style={{ textDecoration: 'none' }}>
      <div className="card">
      <img
          className="card-img-top"
          src="https://foilsta.de/wp-content/uploads/2024/08/PPF-VW-scaled.jpeg" 
          alt="Detailing Service" 
        />
        <div className="card-body">
          <h5 className="card-title">{t("Kiletamine")}</h5>
          <p className="card-text">
          <div> •{t("PPF kaitsekiletamine")} </div>
        <div> •{t("Vinüülkiletamine")} </div>
        <div> •{t("Salongi detailide kiletamine")} </div>
        <div> •{t("Iluliistude kiletamine")} </div>
        <div>•{t("Klaaside ja tulede toonimine")} </div>
          </p>
       
        </div>
      </div>
      </Link>
      </Col>
      <Col className='col1' >
      <Link to="/prices" style={{ textDecoration: 'none' }}>
      <div className="card">
      <img
          className="card-img-top"
          src="https://adaptive-automotive.com/img/services/4/chiptuning-header.jpg" 
          alt="Detailing Service" 
        />
        <div className="card-body">
          <h5 className="card-title">{t("Muud teenused")}</h5>
          <p className="card-text">
          <div>•Chip-tuning </div>
        <div>•{t("Autode komisjonimüük")} </div>
        <div>•{t("Autode müügifotod")} </div>
          </p>
        </div>
      </div>
      </Link>
      </Col >
     

    
    </Row>
    </Container>
  )
}

export default Services