import { useState } from "react";

function Kontakt() {
const [n2itaTelKristiine, muudaN2itaTelKristiine] = useState(false);
const [n2itaTelYlemiste, muudaN2itaTelYleiste] = useState(false);
const [n2itaTelTasku, muudaN2itaTelTasku] = useState(false);


  return ( <div>
    
    <br />
    <br />


    <div className="kontakt">Võta meiega ühendust:</div>
    <br />
    
    
    
    <div className={n2itaTelKristiine === true ? "valitud" : undefined}onClick={() => muudaN2itaTelKristiine(!n2itaTelKristiine)}>Kristiine keskus</div>
    {n2itaTelKristiine && <div className="valitud">+372 56126376 </div>}
    <div className={n2itaTelKristiine === true ? "valitud" : undefined}>Endla 45</div>
    <br />

   
    <div className={n2itaTelYlemiste === true ? "valitud" : undefined} onClick={() => muudaN2itaTelYleiste(!n2itaTelYlemiste)}>Ülemiste keskus</div>
    {n2itaTelYlemiste && <div className="valitud">+372 5832232 </div>}
    <div className={n2itaTelYlemiste === true ? "valitud" : undefined}>Suur-Sõjamäe 4</div>

    <br />
    <div className={n2itaTelTasku === true ? "valitud" : undefined} onClick={() => muudaN2itaTelTasku(!n2itaTelTasku)}>Tasku keskus</div>
    {n2itaTelTasku && <div className="valitud">+372 56267813 </div>}
    <div className={n2itaTelTasku === true ? "valitud" : undefined}>Turu 2</div>
    <br />
    <br />
    <img className="pilt-postimees" src="https://f10.pmo.ee/G77WagGMA4X9pJ_k2h_utEeSWr8=/1200x630/https://f.pmo.ee/logos/81/8767aa8e833a43c5bf2dd1ece8548b52.png" alt="" />


    

  </div> );
}

export default Kontakt;
