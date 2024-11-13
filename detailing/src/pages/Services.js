import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


function Services() {
  return (
    <div>
      
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Detailing</Accordion.Header>
        <Accordion.Body>
        <div>•Sise- ja välispesu</div>
        <div>•Kere poleerimine</div>
        <div>•Vahatamine ja keraamiline kaitse</div>
        <div>•Klaaside vihmavastane töötlemine</div>
        <div>•Nahahooldus ja keemiline puhastus</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Taastamine</Accordion.Header>
        <Accordion.Body>
        <div>•Nahkistmete ja roolide taastamine</div>
        <div>•Rooli nahatamine </div>
        <div>•Tulede taastamine </div>
        <div>•Pidurisadulate värvimine</div>
        <div>•Kere- ja värvitööd</div> 
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Kiletamine</Accordion.Header>
        <Accordion.Body>
        <div> •PPF kaitsekiletamine </div>
        <div> •Vinüülkiletamine </div>
        <div>•Klaaside ja tulede toonimine </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header> Muud teenused</Accordion.Header>
        <Accordion.Body>
        <div>•Chip-tuning </div>
        <div>•Autode komisjonimüük </div>
        <div>•Autode müügifotod </div>
         
         
        
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>



    </div>
  )
}

export default Services