import React, { useState } from 'react'

// Sorteeri
  // 1. A-Z -- 
  // 2. Z-A -- 
  // 3. Tähed kasvavalt 
  // 4. Tähed kahanevalt
  // 5. Teine täht A-Z

  // Filtreeri
  // 1. Täpselt 3 tähelised
  // 2. Rohkem kui 5 tähelised
  // 3. "ai" lühendit sisaldavad
  // 4. Kellel on neljas täht "i"
  // 5. 'M' tähega algavad
  // 6. Huvitav: Paarisarv tähti

  // Reset nupp
function Tootajad() {
  const [tootajad, muudaTootajad] = useState(["Margus","Tarmo","Jaanus","Mario","Kadri","Aare","Jaak","Rudolf","Silvia","Doris"])
  const reset = () => {
    muudaTootajad(["Margus","Tarmo","Jaanus","Mario","Kadri","Aare","Jaak","Rudolf","Silvia","Doris"])
  }
    const sorteeriKasvavalt = () => {
      tootajad.sort((a, b) => a.localeCompare(b));
      muudaTootajad(tootajad.slice());

      }
      const sorteeriKahanevalt = () => {
        tootajad.sort((a, b) => b.length - a.length);
        muudaTootajad(tootajad.slice());
      }
  
  const sorteeriAZ = () => {
    tootajad.sort();
    muudaTootajad(tootajad.slice());
  }
  const sorteeriZA = () => {
    tootajad.sort();
    tootajad.reverse();
    muudaTootajad(tootajad.slice());

  }
  const filtreeriRoh5Tahelised = () => {
    const vastus = tootajad.filter(tootaja => tootaja.length === 5 );
    muudaTootajad(vastus)
  }
  const filtreeriAlgavadM = () => {
    const vastus = tootajad.filter(tootaja => tootaja[0] === "M")
    muudaTootajad(vastus);
  }
  
  return (


    <div>
      <br />
      <button onClick={reset}>Reset</button>
      <br /><br />
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={filtreeriRoh5Tahelised}>Filtreeri 5 tähelised</button>
      <button onClick={filtreeriAlgavadM}>Filtreeri M tähega algavad</button>
      <br /><br />
      
      <br /><br />
      <div>Töötajad</div>
      {tootajad.map(tootaja=> <div>{tootaja}</div>)}
    
    </div>
  )
}

export default Tootajad