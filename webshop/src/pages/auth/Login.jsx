import React, {useContext, useRef} from 'react'
import { AuthContext } from '../../store/AuthContext';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {setLoggedIn} = useContext(AuthContext)

  function logIn() {
    setLoggedIn(true);
    sessionStorage.setItem("token", "token123");
  }

  return (
    <div>
      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label>Password</label> <br />
      <input ref={passwordRef} type="text" /> <br />
      <button onClick={logIn}>Login</button>

    </div>
  )
}

export default Login