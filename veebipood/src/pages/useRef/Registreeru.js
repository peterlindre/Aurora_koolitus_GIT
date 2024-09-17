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

      // 4 eri lahendust, voib koike kasutada
       //lahendus nr 1:                      5s t2ht "n"
       if (emailRef.current.value.startsWith ("n", 4) === false ) {
         toast.error('Viies täht peab olema "n"!');
         return; 
       }
     //lahendus nr 2:                 5s t2ht "n"
      if (emailRef.current.value.charAt(4) !== "n" ) {
       toast.error('Viies täht peab olema "n"!');
      return; 
       }
       //lahendus nr 3:            5s t2ht "n"
      if (emailRef.current.value.at(4) !== "n" ) {
       toast.error('3. Viies täht peab olema "n"!');
      return; 
      }
       //lahendus nr 4:        5s t2ht "n"
     if (emailRef.current.value[4] !== "n" ) {
      toast.error('4. Viies täht peab olema "n"!');
     return; 
      }

      if (emailRef.current.value.includes ("@") === false ) {
        toast.error("E-mail on vigane!");
        return; 
      }
      if (emailRef.current.value.startsWith ("a") === false ) {
        toast.error('E-mail peab algama "a" tähega!');
        return; 
      }
      if (passwordRef.current.value.length !== 6 ) {
        toast.error("parool pole 6 märki!");
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

      <ToastContainer 
      position="top-right"
      autoClose={2000}
      theme="dark" />
    </div>
  )
}

export default Registreeru