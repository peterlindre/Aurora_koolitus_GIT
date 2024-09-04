import './App.css';

import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from "./pages/Avaleht";
import Uudised from "./pages/Uudised";
import Kontakt from "./pages/Kontakt";
import Meist from "./pages/Meist";



function App() {
  return (
    <div>
      <Link to="/">
        <button className='button1'>Avalehele</button>
      </Link>

      <Link to="/uudised">
        <button className='button2'>Uudiste lehele</button>
      </Link>

      <Link to="/kontakt">
        <button className="button3">Võta ühendust</button>
      </Link>

      <Link to="/meist">
        <button className='button4'>Info meist</button>
      </Link>
     <Routes>
      <Route path= 'avalehele' element={ <Avaleht/>} />
      <Route path= 'uudised' element={ <Uudised/>} />
      <Route path= 'kontakt' element={ <Kontakt/>} />
      <Route path= 'meist' element={ <Meist/>} />
     </Routes>
    </div>
  );
}

export default App;
