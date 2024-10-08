import React, { useState} from 'react';
import hinnadJSON from "../../data/hinnad.json"
import { useRef } from 'react';
import { Link } from 'react-router-dom';


function Hinnad() {
  const [hinnad, muudaHinnad] = useState(hinnadJSON.slice()); 
  const otsingRef = useRef (); 

  const reset = () => {
    muudaHinnad(hinnadJSON.slice());
  }


const sorteeriKasvavalt = () => {

hinnad.sort((a, b) => a.number - b.number);
muudaHinnad(hinnad.slice());
}
const sorteeriKahanevalt = () => {
  hinnad.sort((a, b) => b.number - a.number);
  muudaHinnad(hinnad.slice());
}
const sorteeriAZ = () => {
  hinnad.sort((a,b) => String(a.number).localeCompare(String(b.number)));
  muudaHinnad(hinnad.slice());

}
const sorteeriZA = () => {
  hinnad.sort((a,b) => String(b.number).localeCompare(String(a.number)));
  
  muudaHinnad(hinnad.slice());
  
}
const filtreeriSuuremadKui20 = () => {
const vastus = hinnadJSON.filter(hind => hind.number > 20 );
muudaHinnad(vastus);
}
const filtreeriVaiksemadKui100 = () => {
  const vastus = hinnadJSON.filter(hind => hind.number  < 100 );
muudaHinnad(vastus);
}
// const [summa2, muudaSumma] = useState(0);
//const --> v6rdusm2rgiga ei saa uut v22rtust anda
// let --> luba anda uus v22rtus v6rdusm2rgiga
const liidaKokku = () => {
  let summa = 0;
  // summa = summa + 20;
  // summa = summa + 8;
  // summa = summa + 150;
hinnad.forEach(hind => summa = summa + hind.number);
  // muudaSumma(summa);
  return summa;
}
// onClick={lisa} --> muutujat ei saa funktsiooni lisada
// onClikc={() => kustuta(index)} --> muutuja saadan funktsiooni
// xx onClick={liidaKokku} ---> see on vale sest ei oota klikki ara, paneb kohe kaima
// <div>{liidaKokku()}</div> --> paneb funktsiooni koheselt käima
//xx <div>{liidaKokku}</div> --> keegi ei käivita
//xx <div>{() => liidaKokku()}</div> --> keegi ei käivita
const otsi = () => {
  const vastus = hinnadJSON.filter(hind => String(hind.number).includes(otsingRef.current.value) );
  muudaHinnad(vastus);
}

  return (
    <div>
      <input ref={otsingRef} onChange={otsi} type="text" />
      {/* <button onClick={otsi}>Otsi</button> */}
      <div>Minu hindade kogusumma: {liidaKokku()} €</div>
      {/* <button onClick={liidaKokku}>Uuenda hindade kogusumma</button> */}
      <br />
      <br />
      <button onClick={reset}>Reset</button>
      <br /><br />
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <br /><br />
      <button onClick={filtreeriSuuremadKui20}>Filtreeri suuremad kui 20</button>
      <button onClick={filtreeriVaiksemadKui100}>Filtreeri väiksemad kui 100</button>
      <br /><br />

      {hinnad.map((hind, index) => 
      <Link key={index} to={"/hind/" + index}>
        <button>{hind.number}</button>
      </Link>
      )}
    </div>
  )
}

export default Hinnad
