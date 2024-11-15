import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Works from './pages/Works';
import Map from './components/Maps';
import Services from './pages/Services';
import Pricelist from './pages/Pricelist';

function App() {
  return (
    <div className="App">
     <TopNav/>

     <Routes>
      <Route path='homepage' element={ <Homepage />} />
      <Route path='contact' element={ <Contact />} />
      <Route path='works' element={ <Works />} />
      <Route path='maps' element={ <Map />} />
      <Route path='services' element={ <Services />} />
      <Route path='prices' element={ <Pricelist />} />
  


     </Routes>
  
    </div>
  );
}

export default App;
