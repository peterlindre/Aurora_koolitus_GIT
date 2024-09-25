import {useState} from 'react';

function Tagasiside() {
  const [tagasisided, määraTagasiside] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"])


  return (
  <div>Tagasisided:
      {tagasisided.map(element => <div>{element}</div>)}

  </div>)



}

export default Tagasiside