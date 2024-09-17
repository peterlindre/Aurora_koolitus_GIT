import React, {useRef, useState} from 'react' ;

function Leht() {
const inputistLugeja = useRef();
const [muutuvHTMLs, funsktsioonMuutujaMuutmiseks] = useState ("")

const onClickFunktsioon = () => {
  funsktsioonMuutujaMuutmiseks(inputistLugeja.current.value);
}

  return (
    <div className='center'>
      <input ref={inputistLugeja} type="text" />
      <button onClick={onClickFunktsioon}>Muuda</button>
      <div>{muutuvHTMLs}</div>
    </div>
  )
}

export default Leht