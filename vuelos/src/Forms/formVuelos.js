import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {updateVuelo, getVueloByID} from '../Services/vuelos-services'
import { getAviones } from "../Services/aviones-services";

function FormVuelos() {
    const [vuelo, setVuelo] = useState([]);
    const [aviones, setAviones] = useState([]);
    const { codigoVuelo } = useParams();
    const navigate = useNavigate()
   
    const modificar= async () => {
        navigate("/vuelos");
        updateVuelo(codigoVuelo, vuelo);
       }

          useEffect(() => {
            obtenerVuelo()
            obtenerAviones()
            // eslint-disable-next-line react-hooks/exhaustive-deps
            }, []);
        
          const obtenerVuelo = async () => {
            setVuelo( await getVueloByID(codigoVuelo));
          }
          
          const obtenerAviones = async () => {
            setAviones( await getAviones());
          }

          const handleClick = ((e) => {
            e.preventDefault();
            modificar();
        });
      
             const handleChange = ((e) => {
              setVuelo(prev => { return { ...prev, [e.target.name]: e.target.value } });
              });
      

  return (
    <div>
      <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Formulario de modificacion para el vuelo: {codigoVuelo}</p>
    
      <div class="card" style={{width: '40%', marginLeft: '30%'}}>
     <div class="card-body">

     <form>
    <div class="mb-3">
        <label for="codigoVuelo" class="form-label">Codigo </label>
        <input type="codigo" class="form-control" id="codigoVuelo" value={codigoVuelo} disabled onChange={handleChange}/>
    </div>
    <div class="mb-3">
        <label for="origen" class="form-label">Aero. Origen</label>
        <input type="Origen" class="form-control" id="Origen" value={vuelo.cod_origen_aero} name="cod_origen_aero" onChange={handleChange}/>
    </div>
    <div class="mb-3">
        <label for="destino" class="form-label">Aero. Destino </label>
        <input type="destino" class="form-control" id="destino" value={vuelo.cod_destino_aero} name="cod_destino_aero" onChange={handleChange} />
    </div>
    <div class="mb-3" style={{display:'grid'}}>
        <label for="fecha" class="form-label">Fecha</label>
          <input type="date" id="fecha" value={vuelo.fecha} onChange={handleChange} name="fecha" style={{height:'140%'}}/>
    </div>
    <div class="mb-3" style={{display:'grid', marginTop:'5%'}}>
    <label for="appt">Hora</label>
    <input type="time" id="appt" name="hora" value={vuelo.hora} onChange={handleChange} style={{height:'140%', width:'40%'}}/>
    </div>
    <div class="mb-3">
    <select class="form-select"  name="cod_avion" aria-label="Default select example" onChange={handleChange} >
            <option selected> Aviones </option>
            {aviones.map((aviones) =>
          <option key={aviones.codigo} value={aviones.codigo}>{aviones.codigo}</option>
        )}
          </select>
    </div>

    <button type="submit" class="btn btn-primary" onClick={handleClick} >Modificar</button>
    <button type="submit" class="btn btn-secondary" onClick={() => navigate("/vuelos")} style={{marginLeft:'4%'}}>Volver</button>

    </form>
   
  </div>
</div>
      
    </div>
  );
}

export default FormVuelos;