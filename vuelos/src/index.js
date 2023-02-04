import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import VentaPasajes from './Components/venta-pasajes'
import Aeropuertos from './Components/aeropuertos'
import Aviones from './Components/aviones'
import Pasajes from './Components/pasajes'
import Vuelos from './Components/vuelos'
import FormVentaPasajes from './Forms/formVentaPasajes';
import FormAeropuertos from './Forms/formAeropuertos'
import FormAviones from './Forms/formAviones';
import FormPasajes from './Forms/formPasajes';
import FormVuelos from './Forms/formVuelos';
import FormDisponibilidad from './Forms/formDisponibilidad';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
  <Routes>
     <Route path='/' element={<App/>} >
     <Route index element={<VentaPasajes/>}/>
     <Route path='venta-pasajes' element={<VentaPasajes/>}/>
     <Route path="venta-pasajes/:codigoVuelo" element={<FormVentaPasajes/>}/>
      <Route path='aeropuertos' element={<Aeropuertos/>} />
      <Route path="aeropuertos/:codigoAeropuerto" element={<FormAeropuertos/>}/>
      <Route path='aviones' element={<Aviones/>} />
      <Route path="aviones/:codigoAvion" element={<FormAviones/>}/>
      <Route path='pasajes' element={<Pasajes/>} />
      <Route path="pasajes/:codigoPasaje" element={<FormPasajes/>}/>
      <Route path="vuelos" element={<Vuelos/>}/>
      <Route path="vuelos/:codigoVuelo" element={<FormVuelos/>}/>
      <Route path="disponibilidad/:codigoVuelo" element={<FormDisponibilidad/>}/>
     </Route>
   </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

