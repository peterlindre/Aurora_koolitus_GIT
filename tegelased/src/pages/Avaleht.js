import {useState} from "react"; 
function Avaleht() {

const tegelased = [
  {eesnimi: "Mickey", perenimi: "Mouse", elukoht:"Disneyland", vanus: 25},
  {eesnimi: "Minnie", perenimi: "Mouse", elukoht:"Disneyland", vanus: 25},
  {eesnimi: "Winnie", perenimi: "Pooh", elukoht:"Hundred Acre Wood", vanus: 20},
  {eesnimi: "Roo", perenimi: "Kangaroo", elukoht:"Hundred Acre Wood", vanus: 9},
  {eesnimi: "Scooby", perenimi: "Doo", elukoht:"Crystal Cove", vanus: 7}
  
] 
const [klikitudNimi, uuendaKlikitudNimi] = useState("");

const kuvaNimi = (tegelane) => {
  // console.log(tegelane.eesnimi);
  uuendaKlikitudNimi(tegelane.eesnimi); 
}

const valiTegelane = (klikitudTegelane) => {
  const valitud = JSON.parse(localStorage.getItem("valitudTegelased")) || [];
  valitud.push(klikitudTegelane);
  localStorage.setItem("valitudTegelased", JSON.stringify(valitud));
}



  return (
    <div>
      {}
      <div>
        <div>{tegelased.eesnimi}</div>
        <div>{tegelased.perenimi}</div>
        <div>{tegelased.elukoht}</div>
        <div>{tegelased.vanus}</div>
        <button onClick={() => valiTegelane(tegelased)} >Vali</button>
        <button onClick={() => kuvaNimi(tegelased)} >Kuva nimi</button>
      </div>
     

    </div> );


}

export default Avaleht;
