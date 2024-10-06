
import './App.css';
import {Link, Route, Routes} from "react-router-dom"
import Avaleht from '../../tegelased1/src/pages/Avaleht';
import LisaTegelane from '../../tegelased1/src/pages/LisaTegelane';
import ValitudTegelased from '../../tegelased1/src/pages/ValitudTegelased';



function App() {
  return (
    <div className="App">

    <Link to="/">
      <button>Avalehele</button>
    </Link>
    <Link to= "/lisa-tegelane">
      <button>Avalehele</button>
    </Link>
    <Link to= "valitud-tegelased">
      <button>Avalehele</button>
    </Link>

    <Routes>
      <Route path="" element={ <Avaleht /> } />
      <Route path="lisa-tegelane" element={ <LisaTegelane/>}/>
      <Route path="valitud-tegelased" element={ <ValitudTegelased />} />

    </Routes>




    </div>
  );
}

export default App;
