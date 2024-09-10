import React, { useState } from 'react'

function Seaded() { 
const[keel, muudaKeel] = useState ("EST");

  return (
    <div>
      <button className={keel === "est" ? "keel-aktiivne" : "keel" } onClick={() => muudaKeel("est")}>Eesti keelseks</button>
      <button className={keel === "eng" ? "keel-aktiivne" : "keel" } onClick={() => muudaKeel("eng")}>To English</button>
      <button className={keel === "rus" ? "keel-aktiivne" : "keel" } onClick={() => muudaKeel("rus")}>Ruski</button>
      <div>Hetkel aktiivne keel:{keel}</div>

      { keel === "est" && <div>Leht on eesti keelne</div>}
      { keel === "eng" && <div>Page is in english</div>}
     { keel === "rus" && <div>страница на русском языке</div>}


      {keel !== "est" && <div>Copyright</div>}
    </div>
  )
}

export default Seaded