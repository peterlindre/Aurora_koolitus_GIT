import {useRef, useState} from "react";
import andjateFail from "../nimed.json";



function TagasisideAndjad() {
const [andjad, uuendaAndjad] = useState(andjateFail);

const filtreeriM = () => {
  const vastus = andjad.filter(element => element.startsWith("M"));
  uuendaAndjad(vastus);
}
const filtreeriSixLetters = () => {
  const vastus = andjad.filter(element => element.length === 6 );
  uuendaAndjad(vastus);
}
const filtreeriY = () => {
  const vastus = andjad.filter(element => element.startsWith("y"));
  uuendaAndjad(vastus);
}
const sorteeriZA = () => {
  andjad.sort(); 
  andjad.reverse();
  uuendaAndjad(andjad.slice());
}
const insertEST = () => {
  const vastus = andjad.map(element => "EST-" + element);
  uuendaAndjad(vastus);
}
const kustuta = (index) => {
  andjad.splice(index,1) 
  uuendaAndjad(andjad.slice());
}
const andjaRef = useRef();

const lisa = () => {
  andjad.push(andjaRef.current.value);
  uuendaAndjad(andjad.slice());
}

  return ( <div>
    <div>Kuva palju nimesid on .lenght abil: {andjad.length} tk</div>
    <button onClick={filtreeriM}>Filtreeri ehk j2ta k6ik M tahega algavad nimed alles</button>
    <button onClick={filtreeriSixLetters}>Filtreeri ehk j2ta k6ik t2pselt 6 kohalised nimed alles</button>
    <button onClick={filtreeriY}>Filtreeri ehk j2ta k6ik Y tahega algavad nimed alles</button>
    <button onClick={sorteeriZA}>Sorteeri Z-A</button>
    <button onClick={insertEST}>Proovi .map funktsiooni - kirjuta iga nime ette "EST"</button>
    {andjad.map((element,index)=>
    <div key={element}>
      {element} <button onClick={() => kustuta(index)}>Võimalda kustutada igaÜht</button>
    </div>)}
    <label>Võimalda uut nime kõige lõppu lisada</label> <br />
    <input ref={andjaRef} type="text" /> <br />
    <button onClick={lisa}>Lisa</button>

  </div>);
}

export default TagasisideAndjad