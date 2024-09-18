import React, { useState } from 'react'

// 10x eesnime kuvada
// sama nagu esindused.js hinnad.js
// const [tootajad, muudaTootajad] = 

function Tootajad() {
  const [tootajad, muudaTootajad] = useState(["Margus","Tarmo","Jaanus","Mario","Kadri","Aare","Jaak","Rudolf","Silvia","Doris"])
  return (
    <div>
      <div>Töötajad</div>
      {tootajad.map(tootaja=> <button>{tootaja}</button>)}
    
    </div>
  )
}

export default Tootajad