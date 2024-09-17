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
       
       
        

        <Route path='*' element={ <NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
