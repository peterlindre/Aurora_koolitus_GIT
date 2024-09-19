import React, { useState } from 'react'

// Sorteeri
  // 1. A-Z
  // 2. Z-A
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
  return (
    <div>
      <div>Töötajad</div>
      {tootajad.map(tootaja=> <div>{tootaja}</div>)}
    
    </div>
  )
}

export default Tootajad