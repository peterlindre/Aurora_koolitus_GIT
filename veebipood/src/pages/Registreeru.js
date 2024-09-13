import React, {useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Registreeru() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const registreeri = () => {
      if (emailRef.current.value === "") {
        toast.error("E-mail on tühjaks jäänud!");
        return; 
      }
      if (emailRef.current.value.includes ("@") === false ) {
        toast.error("E-mail on vigane!");
        return; 
      }
      if (passwordRef.current.value.length !== 8 ) {
        toast.error("parool pole 8 märki!");
        return; 
      }
      if (passwordRef.current.value.toLowerCase() === passwordRef.current.value ) {
        toast.error("Parool ei sisalda suurt tähte!");
        return; 
      }

      toast.success("Edukalt registreeritud!")
  }
  return (
    <div>
      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label>Password</label> <br />
      <input ref={passwordRef} type="password" /> <br />
      <button onClick={registreeri}>Registreeri</button> <br />

      <ToastContainer />
    </div>
  )
}

export default Registreeru