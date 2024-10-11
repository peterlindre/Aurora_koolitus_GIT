import React, {useRef} from 'react'


function Signup() {
const emailRef = useRef();
const passwordRef = useRef();


  return (
    <div>
      <label> Email</label>
      <input ref={emailRef} type="text" name=""/>
      <label ref={passwordRef} >Password</label>
      <input type="text"/>

    </div>
  )
}

export default Signup