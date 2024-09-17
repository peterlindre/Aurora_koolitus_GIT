import React, {useState} from 'react'

function KontaktAndmed() {
  const [showTel,muudaShowTel] = useState(true);
  return (
    <div>
      {/* n2ide 1 */}
      {showTel === false && <button onClick={() => muudaShowTel(true)}>Näita meie veebipoe telefoninumbrit</button>}
      {showTel === true && <button onClick={() => muudaShowTel(false)}>Näita meie veebipoe emaili</button> }

      {/* n2ide 2. saab ka nii 
       <button onClick={() => muudaShowTel(!showTel)}>
      Näita meie veebipoe emaili {showTel === true ? "emaili" : "telefoninumbrit"}</button> */}

      {showTel === true && <div>5232113</div>}
      {showTel === false && <div>info@veebipood.ee</div>}
    </div>
  )
}

export default KontaktAndmed