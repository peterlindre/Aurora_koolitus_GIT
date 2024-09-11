import React, {useState} from 'react'

function Kujundus() {
const [hind, uuendaValitud] = useState("family");

  return (
    <div>
      <span 
        className={hind === 39 ? "pakett-aktiivne" : "pakett"}
        onClick={() => uuendaValitud("family")} >
          Family
        </span>
        <span
         className= {hind === 17 ? "pakett-aktiivne" : "pakett"}
         onClick={() => uuendaValitud("standard")}> 
           Standard 
        </span>
        <span 
          className= {hind === 7 ? "pakett-aktiivne" : "pakett"}
          onClick={() => uuendaValitud("mini")}> 
             Mini
          </span>
    </div>
  )
}

export default Kujundus