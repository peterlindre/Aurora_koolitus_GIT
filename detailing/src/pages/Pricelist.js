import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';
import i18n from '../components/i18n';

function Pricelist() {
const {t} = useTranslation();

  return (
    <div>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='accordion-header'>{t("Välispesu")} al 54€</Accordion.Header>
        <Accordion.Body className='accordion-body'>
        Sisaldab 2x pigileotust koos pigi eemaldamisega auto
        kerelt ja uksevahedelt, survepesu, šhampoonipesu,
        velgede pesu happega (piduritolmu eemaldamine),
        uksevahede pesu ja kogu auto kuivatamist suruõhu
        ja kuivatuslapiga. 
        <p>NB! Täpne hind sõltub auto suurusest ja mustuse tasemest!</p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='accordion-header'>Salongi kuivpuhastus al 39€</Accordion.Header>
        <Accordion.Body>
        Plastik ja vinüülpindade puhastamist aine ja suruõhuga,
        klaaside puhastust seest ja kogu autosalongi
        puhastamist tomuimejaga sh. pagasiruum  
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className='accordion-header'>{t("Salongi keemiline puhastus")} al 179€</Accordion.Header>
        <Accordion.Body>
        Kogu auto salongi tekstiilpindade märgpesu, põrandate
        ja pagasiruumi märgpesu, laepolstri puhastust, kõikide
        plastik ja vinüülpindade põhjalikku puhastamist harja,
        aine ja suruõhuga, klaaside puhastamist seest.
        Auto kuivatamine 12 h.
        <p>NB! Täpne hind sõltub auto suurusest ja mustuse tasemest!</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className='accordion-header'>{t("Poleerimine")} al 369€</Accordion.Header>
        <Accordion.Body>
        Sisaldab pesu, pinna ettevalmistust, poleerimist erineva abrasiivsusega pastadega 
        (ka. esi- ja tagatuled), värvile läike andmist, vahatamist kvaliteetse püsivahaga, kummi- ja plastikpindade 
        töötlemist ja läigestamist.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header className='accordion-header'>Keraamiline kaitse al 499€</Accordion.Header>
        <Accordion.Body>
        Sisaldab pesu, pinna ettevalmistust, poleerimist erineva abrasiivsusega pastadega
         (ka. esi- ja tagatuled), värvile läike andmist, 
         vahatamist kvaliteetse püsivahaga, kummi- ja plastikpindade töötlemist
        ja läigestamist.
        </Accordion.Body>
      </Accordion.Item>
    

      <Accordion.Item eventKey="5">
        <Accordion.Header className='accordion-header'>Muud teenused</Accordion.Header>
        <Accordion.Body>
        Muude teenuste hinnapakkumise saamiseks palume saata hinnapäring info@orientdetailing.ee
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default Pricelist