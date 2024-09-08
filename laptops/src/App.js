
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import VaataArvuteid from './pages/VaataArvuteid';
import LisaArvuti from './pages/LisaArvuti';

function App() {
  return (
    <div className="App">

      <Link to ="/">
        <button>Avalehele</button>
      </Link>
      <Link>
        <button>Vaata sülearvuteid</button>
      </Link>
      <Link> 
        <button> Lisa sülearvuti</button>
      </Link>


    <Routes>
      <Route path="" exact element= { <Avaleht /> } />
      <Route path="all" exact element= { <VaataArvuteid />} />
      <Route path="add" exact element= { <LisaArvuti />} />
    </Routes>
      
    </div>
  );
}

export default App;
