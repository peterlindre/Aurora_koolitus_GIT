import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../../data/tooted.json";



function YksToode() {
  // useparams --> tema loogeliste sulgude sees olev nimi 
  //               peab olema sama, mis app.js sees ":" jargi kirjutatu
  // KUI: path='toode/:tere'
  // SIIS: const(tere) = userparams();
  const {tooteNimi} = useParams();
  const leitud = tootedFailist.find(toode => toode.nimi.replaceAll("/", "").replaceAll(" ", "-").toLowerCase() === tooteNimi);

// index (jarjekorranumbri) jargi leidmiseks:
// const leitud = toodeFailist[index];

// kui tahan omaduse kaudu leida
// kellel on nimi selline. Kellel on hind selline.
// .find();

  if (leitud === undefined) {
    return <div>Toodet ei leitud!</div>
  }
 
  

  return (

    

    <div>
      {/* <div>Järjekorranumber:{index}</div> */}
      <div>Toote nimi: {leitud.nimi}</div>
      <div>Toote hind:{leitud.hind}</div>
      <div>Toote asukoht:{leitud.keskus}</div>
      <div>Toote pilt:{leitud.pilt}</div>
      {leitud.aktiivne === false && <i>Toode on mitteaktiivne</i>}
    </div>
  )
}

export default YksToode
