import React, { useState } from 'react'
//kodus

// 'lisamine mingi kindla tooaaja osas
// lisamine l2bi vormi
// 'kustutamine esimene, teine, kolmas, neljas
//kustutamine
//tyhjendamine 
// koguarvu v2lja n2itamine
// dynaamika -> n2ita nuppu voi teksti kui pikkus on sobiv (&& abil)


function HaldaTootajad() {
  const [keskused, muudaKeskused] = useState (["Ülemiste","Rocca al Mare","Magistrali","Vesse", "Kristiine", "Järveotsa"]);

  return (
    <div>
      {keskused.map(keskus => <div>{keskus}</div>)}
    </div>
  )
}

export default HaldaTootajad