import React, {useRef} from 'react'

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();


  return (
    <div>
      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label>Password</label>
      <input ref={passwordRef} type="text" /> <br />
      <button>Login</button>

    </div>
  )
}

export default Login