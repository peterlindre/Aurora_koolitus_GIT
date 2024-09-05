import {Route, Routes} from 'react-router-dom'
import './App.css';
import Hobbies from './pages/Hobbies';
import Work from './pages/Work';
import Courses from './pages/Courses';
import Navbar from './components/Navbar';




function App() {
  return (
    <div className="App">

    
     
    
   
    
<Routes>
 
  <Route path="" element={ <Navbar/>} />
  <Route path="work" element= { <Work />} />
  <Route path="hobbies" element={ <Hobbies /> } />
  <Route path="courses" element={ <Courses />} />
</Routes>



    </div>   
  );
}

export default App;
