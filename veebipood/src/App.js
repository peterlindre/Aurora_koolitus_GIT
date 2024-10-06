//import logo from './logo.svg';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom" ;
import Esindused from './pages/arrays/Esindused';
import Ostukorv from './pages/arrays/Ostukorv';

import Avaleht from './pages/useState/Avaleht';
import Seaded from './pages/useState/Seaded';
import NotFound from './pages/useState//NotFound';

import Kinkekaart from './pages/useRef/Kinkekaart';
import LisaToode from './pages/useRef/LisaToode';
import Profiil from './pages/useRef/Profiil';
import LogiSisse from './pages/useRef/LogiSisse';
import Registreeru from './pages/useRef/Registreeru';


import Meny from './components/Meny';
import Hinnad from './pages/arrays/Hinnad';
import Tooted from './pages/arrays/Tooted';
import Tootajad from './pages/arrays/Tootajad';


import HaldaEsindused from './pages/halda/HaldaEsindused';
import HaldaHinnad from './pages/halda/HaldaHinnad';
import HaldaTooted from './pages/halda/HaldaTooted';
import HaldaTootajad from './pages/halda/HaldaTootajad';
import YksEsindus from './pages/yks/YksEsindus';
import YksHind from './pages/yks/YksHind';
import YksTootaja from './pages/yks/YksTootaja';
import YksToode from './pages/yks/YksToode';
import MuudaEsindus from './pages/muuda/MuudaEsindus';
import MuudaHind from './pages/muuda/MuudaHind';
import MuudaToode from './pages/muuda/MuudaToode';
import MuudaTootaja from './pages/muuda/MuudaTootaja';
import { ContactUs } from './pages/useRef/ContactUs';
import Admin from './pages/useState/Admin';
import Shops from './pages/useState/Shops';


function App() {
  return (
    <div className="App">
 

     <Meny /> 
      
    
      <Routes>
        <Route path='' element={ <Navigate to="/avaleht" /> } />
        <Route path='avaleht' element={ <Avaleht/>} />
        <Route path='osta-kinkekaart' element={ <Kinkekaart/>} />
        <Route path='lisa-toode' element={ <LisaToode/>} />
        <Route path='seaded' element={ <Seaded/>} />

        <Route path='profiil' element={ <Profiil/>} />
        <Route path='logi-sisse' element={ <LogiSisse/>} />
        <Route path='registreeru' element={ <Registreeru/>} />

        <Route path='esindused' element={ <Esindused/>} />
        <Route path='ostukorv' element={ <Ostukorv/>} />
        <Route path='hinnad' element={ <Hinnad/>} />
        <Route path='tooted' element={ <Tooted/>} />
        <Route path='tootajad' element={ <Tootajad/>} />

        <Route path='halda-esindused' element={ <HaldaEsindused/>} />
        <Route path='halda-hinnad' element={ <HaldaHinnad/>} />
        <Route path='halda-tooted' element={ <HaldaTooted/>} />
        <Route path='halda-tootajad' element={ <HaldaTootajad/>} />
       
        <Route path='esindus/:index' element={ <YksEsindus/>} />
        <Route path='hind/:index' element={ <YksHind/>} />
        <Route path='toode/:index' element={ <YksToode/>} />
        <Route path='tootaja/:index' element={ <YksTootaja/>} />

        <Route path='muuda-esindus/:index' element={ <MuudaEsindus/>} />
        <Route path='muuda-hind/:index' element={ <MuudaHind/>} />
        <Route path='muuda-toode/:index' element={ <MuudaToode/>} />
        <Route path='muuda-tootaja/:index' element={ <MuudaTootaja/>} />
        
        <Route path='kontakteeru' element={ <ContactUs/>} />
        <Route path='admin' element={ <Admin/>} />
        <Route path='shops' element={ <Shops/>} />

        <Route path='*' element={ <NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
