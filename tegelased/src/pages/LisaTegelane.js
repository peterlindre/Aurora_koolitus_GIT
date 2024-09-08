import { useState } from "react";


function LisaTegelane() {
  const[sonum, uuendaSonum] = useState("");

  return (
    <div>
      <div>{sonum}</div>
      <label> Tegelase nimi</label> <br />
      <input type= "text" /> <br />
      <button onClick={ () => uuendaSonum("Tegelane lisatud")}>Lisa uus</button> <br />

    </div>);
}

export default LisaTegelane;