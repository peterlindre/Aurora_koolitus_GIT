import { useState } from "react";


function Meist() {
  const [kontakt, n2itaKontakt] = useState("");
  const tootajad = [
    {nimi: "Andrus Kuiv", ala: "Peatoimetaja", telefon: "+37256318725"},
    {nimi: "Markus Maasikas", ala: "Regioonijuht", telefon: "+37258110387"},
    {nimi: "Margit Maius", ala: "Asjaajaja", telefon: "+37252167703"}
  ]
const [valitud, uuendavalitud] = useState(""); 

const v6tayendust = (tootaja) => {
  n2itaKontakt(tootaja.telefon);
  uuendavalitud(tootaja.nimi);
}


  return ( <div>
 
   
<br />

<br />
    <div className="tekst-meist">Meie töötajad:</div>
    Valitud töötaja: {valitud}
    <br /> 
    <div>{tootajad.map(tootaja =>
    <div className={tootaja.nimi === valitud ? "valitud" : undefined}>
      <div>{tootaja.nimi}</div>
      <div>{tootaja.ala}</div>
      <button onClick={() => v6tayendust(tootaja)}>Võta ühendust</button>
     <br /><br />
     </div>)}
    </div>
    {/* <div className="tekst-meist">Andrus Kuiv</div>
    <div className="tekst-meist">Peatoimetaja</div>
    <button onClick={()=> n2itaKontakt(+37256318725)}>Võta ühendust</button>
    <br />
    <div className="tekst-meist">Markus Maasikas</div>
    <div className="tekst-meist">Regioonijuht</div>
    <button onClick={()=> n2itaKontakt(+37258110387)}>Võta ühendust</button>
    <br /> 
    <div className="tekst-meist">Margit Maius</div>
    <div className="tekst-meist">Asjaajaja</div>
    <button onClick={()=> n2itaKontakt(+37252167703)}>Võta ühendust</button> */}
   
   { kontakt !== "" && <div>Tema kontakt: {kontakt}</div> }
    
    <img className="pilt-postimees" src="https://f10.pmo.ee/G77WagGMA4X9pJ_k2h_utEeSWr8=/1200x630/https://f.pmo.ee/logos/81/8767aa8e833a43c5bf2dd1ece8548b52.png" alt="" />
    
</div>)
  ;
}


export default Meist;
