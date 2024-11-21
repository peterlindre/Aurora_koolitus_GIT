import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Map from './components/Maps';
import Services from './pages/Services';
import Pricelist from './pages/Pricelist';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
     <TopNav/>

     <Routes>
      <Route path='homepage' element={ <Homepage />} />
      <Route path='contact' element={ <Contact />} />
      <Route path='maps' element={ <Map />} />
      <Route path='services' element={ <Services />} />
      <Route path='prices' element={ <Pricelist />} />
      <Route path='*' element={ <NotFound />} />
     </Routes>
  
    </div>
  );
}

export default App;
