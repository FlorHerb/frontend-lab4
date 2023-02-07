import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {updateAvion, getAvionByID} from '../Services/aviones-services'

function FormAviones() {
    const [avion, setAvion] = useState([]);
    const { codigoAvion } = useParams();
    const navigate = useNavigate()
    const modificar= async () => {
        navigate("/aviones");
        updateAvion(codigoAvion, avion);
       }
       
       useEffect(() => {
         obtenerAvion()
         // eslint-disable-next-line react-hooks/exhaustive-deps
         }, []);
     
       const obtenerAvion = async () => {
        setAvion( await getAvionByID(codigoAvion));
       }
       
       const handleClick = ((e) => {
         e.preventDefault();
         modificar();
     });
   
          const handleChange = ((e) => {
            setAvion(prev => { return { ...prev, [e.target.name]: e.target.value } });
           });
   

  return (
    <div>
      <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Formulario de modificacion avion {codigoAvion}</p>
    
      <div class="card" style={{width: '40%', marginLeft: '30%'}}>
     <div class="card-body">

     <form>
    <div class="mb-3">
        <label for="codigoAvion" class="form-label">Codigo </label>
        <input type="text" class="form-control" id="codigoAvion" value={codigoAvion} disabled name="codigo" onChange={handleChange}/>
    </div>
    <div class="mb-3">
        <label for="nombreAvion" class="form-label">Marca</label>
        <input type="text" class="form-control" id="nombreAeropuerto" value={avion.marca} name="marca" onChange={handleChange}/>
    </div>
    <div class="mb-3">
        <label for="modelo" class="form-label">Modelo </label>
        <input type="text" class="form-control" id="modelo" value={avion.modelo} name="modelo" onChange={handleChange}/>
    </div>
    <div class="mb-3">
        <label for="capacidad" class="form-label">Capacidad de Pasajeros</label>
        <input type="text" class="form-control" id="capacidad" value={avion.capacidad} name="capacidad" onChange={handleChange} disabled/>
    </div>

    <button type="submit" class="btn btn-primary" onClick={handleClick} >Modificar</button>
    <button type="submit" class="btn btn-secondary" onClick={() => navigate("/aviones")} style={{marginLeft:'4%'}}>Volver</button>

    </form>
   
  </div>
</div>
      
    </div>
  );
}

export default FormAviones;