import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css';
import './index.css';
import './i18n';
import App from './App';



//import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom" ;
// kui on bracketid siis votan yhe tyki
// kui ei ole, siis votan terve mooduli
// ./ siis on "src" kaustast
// kui ei ole, siis on "node_module" kaustast

//1. npm i react-router-dom
//2. import {BrowserRouter} from "react-router-dom" 
//3. <BrowserRouter> ymbritseb <app/>
//4. App.js failis teitama URLi ja HTMLi vahelisi seoseid

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
