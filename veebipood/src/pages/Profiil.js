import React, {useRef, useState} from 'react'

function Profiil() {
const aadressRef = useRef();
const emailRef= useRef();
const telefonRef = useRef();
const[aadressState,setAadress] = useState("sisestamata");
const[emailState,setEmail] = useState("sisestamata");
const[telefonState,setTelefon] = useState("sisestamata");



const sisestaAadress = () => {
setAadress(aadressRef.current.value);
}
const sisestaEmail = () => {
  setEmail(emailRef.current.value);
}
const sisestaTelefon = () => {
  setTelefon(telefonRef.current.value);
}

  return (
    <div>
      <label>Aadress</label>
      <input ref={aadressRef} type="text" />
      <button onClick={sisestaAadress}>Sisesta</button>
      <div>Aadress on:{aadressState}</div>
      <br /><br />

      <label>Email</label>
      <input ref={emailRef} type="text" />
      <button onClick={sisestaEmail}>Sisesta</button>
      <div>Email on:{emailState}</div>
      <br /><br />

      <label>Telefon</label>
      <input ref={telefonRef} type="text" />
      <button onClick={sisestaTelefon}>Sisesta</button>
      <div>Telefon on:{telefonState}</div>
      <br /><br />
    </div>
  )
}

export default Profiil