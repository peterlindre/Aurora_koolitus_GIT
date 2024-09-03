//import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom" ;
import Avaleht from './pages/Avaleht';
import Kinkekaart from './pages/Kinkekaart';
import Esindused from './pages/Esindused';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';

function App() {
  return (
    <div className="App">


      <Link to='avaleht'>
      <img className="pilt" src="https://digi.geenius.ee/app/uploads/sites/7/2020/05/4e8cd4ef7f6f6a06695160e1b2d37c23-1920x1280.jpg" alt="pilt" />
      </Link>
      <Link to='osta-kinkekaart'>
        <button className="nupp">kinkekaart</button>
      </Link>
      <Link to='esindused'>
        <button className="nupp">esindused</button>
      </Link>
      <Link to='ostukorv'>
        <button className="nupp">ostukorv</button>
      </Link>
      <Link to='lisa-toode'>
        <button className="nupp">lisa-tode</button>
      </Link>
      <Link to='seaded'>
        <button className="nupp">seaded</button>
      </Link>


      
    
      <Routes>
        <Route path='avaleht' element={ <Avaleht/>} />
        <Route path='osta-kinkekaart' element={ <Kinkekaart/>} />
        <Route path='esindused' element={ <Esindused/>} />
        <Route path='ostukorv' element={ <Ostukorv/>} />
        <Route path='lisa-toode' element={ <LisaToode/>} />
        <Route path='seaded' element={ <Seaded/>} />
        
      </Routes>
    </div>
  );
}

export default App;
