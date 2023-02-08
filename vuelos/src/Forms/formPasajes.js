import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {updatePasaje, getPasajeByID} from '../Services/pasajes-services'
import {updatePasajero, getPasajeroByID } from '../Services/pasajeros-services'

function FormPasajes() {
    const { codigoPasaje } = useParams();
    const [pasaje, setPasaje] = useState(null);
    const [pasajero, setPasajero] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
      obtenerPasaje()
      obtenerPasajero()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      
    const obtenerPasaje = async () => {
      setPasaje( await getPasajeByID(codigoPasaje));
    }

    const obtenerPasajero = async () => {
      setPasajero( await getPasajeroByID(pasaje.id_pasajero));
    }

     const handleChange = ((e) => {
       e.preventDefault();
       setPasajero(prev => { return { ...prev, [e.target.name]: e.target.value } });
       });


    const modificar= async () => {
       updatePasajero(pasaje.id_pasajero, pasajero);
        navigate("/pasajes");
       }

        const handleClick = ((e) => {
          e.preventDefault();
          modificar();
      });

       if( pasaje === null){
        return (
        <div class="d-flex justify-content-center" style={{marginTop:'5%'}}>
        <div class="spinner-border" role="status">
        </div>
      </div>
      );}

    
  return (
    <div>
      <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Formulario de modificacion para el pasaje {codigoPasaje}</p>
    
      <div class="card" style={{width: '40%', marginLeft: '30%'}}>
     <div class="card-body">

     <form>
    <div class="mb-3">
        <label htmlFor="codigoPasaje" class="form-label">Codigo </label>
        <input type="codigo" class="form-control" id="codigoAvion" value={codigoPasaje} disabled />
    </div>
    <div class="mb-3">
        <label htmlFor="nombre" class="form-label">Codigo de vuelo</label>
        <input type="nombre" class="form-control" id="nombre" value={pasaje.cod_vuelo} disabled/>
    </div>
    <div class="mb-3">
        <label htmlFor="nombre" class="form-label">Nombre Pasajero</label>
        <input type="nombre" class="form-control" id="nombre"  name="nombre" onChange={handleChange}/>
    </div>
    <div class="mb-3">
        <label htmlFor="dni" class="form-label">Dni Pasajero </label>
        <input type="dni" class="form-control" id="dni" value={pasaje.id_pasajero} disabled/>
    </div>
    <div class="mb-3">
        <label htmlFor="asiento" class="form-label">Numero de asiento </label>
        <input type="asiento" class="form-control" id="asiento" value={pasaje.nro_asiento}  name="nro_asiento" disabled/>
    </div>

    <button type="submit" class="btn btn-primary" onClick={handleClick} >Modificar</button>
    <button type="submit" class="btn btn-secondary" onClick={() => navigate("/pasajes")} style={{marginLeft:'4%'}}>Volver</button>

    </form>
   
  </div>
</div>
      
    </div>
  );
}

export default FormPasajes;