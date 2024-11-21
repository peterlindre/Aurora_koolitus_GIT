import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';
import i18n from '../components/i18n';
import { Image } from 'react-bootstrap';
import pricelist from '../CSS/prices.css'

function Pricelist() {
const {t} = useTranslation();

  return (
    <div>
       <div className="image-pricelist">
      
       <Image 
          src="https://zoomcarwash.com.au/wp-content/uploads/2022/03/clement-m-Ng3xrviPrhk-unsplash.jpg" 
          fluid 
        />
    <div className="text-overlay">
          <p>{t("Pesu ja teenuste hinnakiri")}</p>
</div>
</div>
     

        <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='accordion-header'>{t("Välispesu")} {t("al")} 54€</Accordion.Header>
        <Accordion.Body className='accordion-body'>
        <p>{t("Sisaldab 2x pigileotust koos pigi eemaldamisega auto kerelt ja uksevahedelt, survepesu, šhampoonipesu, velgede pesu happega (piduritolmu eemaldamine), uksevahede pesu ja kogu auto kuivatamist suruõhu ja kuivatuslapiga.")}</p>
       <p>{t("NB! Täpne hind sõltub auto suurusest ja mustuse tasemest!")}</p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='accordion-header'>{t("Salongi kuivpuhastus")} {t("al")} 39€</Accordion.Header>
        <Accordion.Body>
        <p>{t("Plastik ja vinüülpindade puhastamist aine ja suruõhuga, klaaside puhastust seest ja kogu autosalongi puhastamist tomuimejaga sh. pagasiruum")}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className='accordion-header'>{t("Salongi keemiline puhastus")} {t("al")} 179€</Accordion.Header>
        <Accordion.Body>
        <p>{t("Kogu auto salongi tekstiilpindade märgpesu, põrandate ja pagasiruumi märgpesu, laepolstri puhastust, kõikide plastik ja vinüülpindade põhjalikku puhastamist harja, aine ja suruõhuga, klaaside puhastamist seest.")}</p>
        <p>{t("Auto kuivatamine 12 h.")}</p> 
        <p>{t("NB! Täpne hind sõltub auto suurusest ja mustuse tasemest!")}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className='accordion-header'>{t("Poleerimine")} {t("al")} 369€</Accordion.Header>
        <Accordion.Body>
        <p>{t("Sisaldab pesu, pinna ettevalmistust, poleerimist erineva abrasiivsusega pastadega (ka. esi- ja tagatuled), värvile läike andmist, vahatamist kvaliteetse püsivahaga, kummi- ja plastikpindade töötlemist ja läigestamist.")}</p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header className='accordion-header'>{t("Keraamiline kaitse")} {t("al")} 499€</Accordion.Header>
        <Accordion.Body>
        <p>{t("Sisaldab pesu, pinna ettevalmistust, poleerimist erineva abrasiivsusega pastadega (ka. esi- ja tagatuled), värvile läike andmist, pinnatöötlemist keraamilise kaitsega, kummi- ja plastikpindade töötlemist ja läigestamist.")}</p>
        </Accordion.Body>
      </Accordion.Item>
    

      <Accordion.Item eventKey="5">
        <Accordion.Header className='accordion-header'>{t("Muud teenused")}</Accordion.Header>
        <Accordion.Body>
       {t(" Muude teenuste hinnapakkumise saamiseks palume saata hinnapäring info@orientdetailing.ee")}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  
    </div>
  )
}

export default Pricelist