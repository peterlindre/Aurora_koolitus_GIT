import React from 'react'
import {Link} from 'react-router-dom'


function NotFound() {
  return (
    <div>
       <h2>Oh no!</h2>
     <h4> We looked everywhere but this page is nowhere to be found! </h4>
    <p>
    You can go back to our 
    <Link to="/"> homepage </Link>  
    right here!

    </p>

    </div>
  )
}

export default NotFound

