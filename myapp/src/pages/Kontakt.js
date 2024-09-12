import {useState} from 'react'

function Kontakt() {

const [aadress, määraAadress] = useState("Tallinn");
const [telefon, määraTelefon] = useState("5512345");
const [email, määraEmail] = useState("res@wrs.com");
const [ingliseKeelne, määraIngliseKeelne] = useState("ei");
  
const ingliseks = () => {
  määraAadress("London");
  määraTelefon("12323432");
  määraEmail("lasda@llss.com");
  määraIngliseKeelne("jah");
}

return (
    <div>
     <div>{ aadress }</div> 
      <div> { telefon } </div>
      <div> { email } </div>
      <button onClick={ingliseks}>Muuda inglise keelseks </button>
      { ingliseKeelne === "jah" && <div>Leht on inglise keeles</div>}
  </div>
  );
}

export default Kontakt