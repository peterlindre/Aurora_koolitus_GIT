import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function YksPostitus() {
  const {postitusedId} = useParams();
  const [postitus, uuendaPostitus] = useState({});

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts" + postitusedId)
  .then(res => res.json())
  .then(data => uuendaPostitus(data))
}, [postitusedId]);

  return (
    <div>
      <div><i>{postitus.userId}</i></div>
      <div><u>{postitus.id}</u></div>
      <div><b>{postitus.title}</b></div>
      <div>{postitus.body}</div>

    </div>
  )
}

export default YksPostitus