import {useState} from 'react'
import tegevusedFailist from "../tegevused.json"

function Tegevused() {
const [tegevused, uuendaTegevused] = useState(tegevusedFailist);

const n2itakasutajaYks = () => {
  const vastus = tegevused.filter(element => element.userId === 1);
  uuendaTegevused(vastus);
}
const n2itaK6iki = () => {
  uuendaTegevused(tegevusedFailist);
}
  return (<div>
      <div>Näita kogu tegevuse arvu .lengt abil</div>
      <button onClick={() => n2itakasutajaYks()}>Kuva kõik kasutaja ID 1 tegevused</button>
      <button>Kuva kõik kasutaja ID 2 tegevused</button>
      <button>Kuva kõik kasutaja ID 3 tegevused</button>
      <button>Kuva kõik valmis tegevused</button>
      <button>Kuva kõik mittevalmis tegevused</button>
      <button>Kuva kõik t tähega algavad tegevused</button>
      <button>Kuva tegevused, millel on tähemärke rohkem kui 20</button>
      <button onClick={() => n2itaK6iki()}>Kuva kõik tegevused tagasi</button>
      {tegevused.map(element =>
         <div>
          <div>{element.userId}</div>
          <div>{element.id}</div>
          <div>{element.title}</div>
          <div>{element.completed}</div>
        
        
          
          </div>)}
    </div> );
}

export default Tegevused