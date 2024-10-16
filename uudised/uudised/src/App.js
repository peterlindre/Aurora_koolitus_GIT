import './App.css';

import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from "./pages/Avaleht";
import Uudised from "./pages/Uudised";
import Kontakt from "./pages/Kontakt";
import Meist from "./pages/Meist";
import LisaUudis from './pages/LisaUudis';
import HaldaUudised from './pages/HaldaUudised';
import YksUudis from './pages/YksUudis';
import MuudaUudis from './pages/MuudaUudis';
import KasutajaPostitus from './pages/KasutajaPostitus';
import YksPostitus from './pages/YksPostitus';




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
      <Link to="/lisa-uudis">
        <button className='button5'>Lisa uudis</button>
      </Link>
      <Link to="/halda">
        <button className='button5'>Halda uudiseid</button>
      </Link>
      <Link to="/yks-uudis">
        <button className='button5'>Yks uudis</button>
      </Link>
      <Link to="/muuda-uudis">
        <button className='button5'>Muuda uudis</button>
      </Link>
     <Routes>
      <Route path= '' element={ <Avaleht/>} />
      <Route path= 'uudised' element={ <Uudised/>} />
      <Route path= 'kontakt' element={ <Kontakt/>} />
      <Route path= 'meist' element={ <Meist/>} />
      <Route path= 'lisa-uudis' element={ <LisaUudis/>} />
      <Route path= 'halda' element={ <HaldaUudised/>} />
      <Route path= 'yks-uudis' element={ <YksUudis/>} />
      <Route path= 'muuda-uudis' element={ <MuudaUudis/>} />
      <Route path= 'kasutaja-postitus/:kasutajaId' element={ <KasutajaPostitus/>} />
      <Route path= 'vaata-postitus/:postituseId' element={ <YksPostitus/>} />
     </Routes>
    </div>
  );
}

export default App;
