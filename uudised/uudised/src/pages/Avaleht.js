import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Avaleht() {

const [postitused, uuendaPostitused] = useState([]);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => uuendaPostitused(data))
}, []);

  return ( <div>
   <br />
<br />

<div className="tekst-avaleht">Uued ja kõige värskemad uudised iga päev otse sinuni!</div>

<img className="pilt-postimees" src="https://f10.pmo.ee/G77WagGMA4X9pJ_k2h_utEeSWr8=/1200x630/https://f.pmo.ee/logos/81/8767aa8e833a43c5bf2dd1ece8548b52.png" alt="" />
{ postitused.map(element => 
  <div>
<div><i>{element.userId}</i></div>
<div><u>{element.id}</u></div>
<div><b>{element.title}</b></div>
<div>{element.body}</div>
<Link to={"kasutaja-postitus/" + element.userId}>
<button>Kõik kasutaja postitused</button>
</Link>
<Link to={"vaata-postitus/" + element.Id}>
<button>Kõik kasutaja postitused</button>
</Link>
</div>
)}
</div> );
}

export default Avaleht;
