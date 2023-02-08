import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import {updateAeropuerto, getAeropuertoByID} from '../Services/aeropuetos-services'
// import { getCiudades } from '../Services/ciudades-services'

function FormAeropuertos() {
    const [aeropuerto, setAeropuerto] = useState(null);
  // const [ciudades, setCiudades] = useState([]);
    const { codigoAeropuerto } = useParams();
    const navigate = useNavigate()
    
    useEffect(() => {
      obtenerAeropuerto()
      //obtenerCiudades();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
  
    const obtenerAeropuerto = async () => {
      setAeropuerto( await getAeropuertoByID(codigoAeropuerto));
    }
    
    // const obtenerCiudades = async () => {
    //   setCiudades( await getCiudades());
    // }

    const handleClick = ((e) => {
      e.preventDefault();
      modificar();
  });

    const modificar= async () => {
        updateAeropuerto(codigoAeropuerto, aeropuerto);
        navigate("/aeropuertos");
       }

       const handleChange = ((e) => {
        setAeropuerto(prev => { return { ...prev, [e.target.name]: e.target.value } });
        });

  if( aeropuerto === null){
    return (
    <div class="d-flex justify-content-center" style={{marginTop:'5%'}}>
    <div class="spinner-border" role="status">
    </div>
  </div>
  );}
  return (
    <div>
      <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Formulario de modificacion aeropuerto {codigoAeropuerto}</p>
    
      <div class="card" style={{width: '40%', marginLeft: '30%'}}>
     <div class="card-body">

     <form>
    <div class="mb-3">
        <label htmlFor="codigoAeropuerto" class="form-label">Codigo Aeropuerto</label>
        <input type="codigo" class="form-control" id="codigo" value={codigoAeropuerto} disabled />
    </div>
    <div class="mb-3">
        <label htmlFor="nombreAeropuerto" class="form-label">Nombre Aeropuerto</label>
        <input type="nombre" class="form-control"  name="nombre" value={aeropuerto.nombre} onChange={handleChange}/>
    </div>
    {/* <select class="form-select"  name="id_ciudad" aria-label="Default select example" onChange={handleChange} style={{marginBottom: '5%'}}>
            <option selected> Ciudad</option>
            {ciudades.map((ciudades) =>
          <option key={ciudades.id} value={ciudades.id} >{ciudades.nombre}</option>
        )}
    </select> */}

    <div class="mb-3">
        <label htmlFor="nombreAeropuerto" class="form-label">Cuidad</label>
        <input type="nombre" class="form-control"  value={aeropuerto.ciudad.nombre} disabled/>
    </div>

    <button type="submit" class="btn btn-primary" onClick={handleClick} >Modificar</button>
    <button type="submit" class="btn btn-secondary" onClick={() => navigate("/aeropuertos")} style={{marginLeft:'4%'}}>Volver</button>
    </form>
   
  </div>
</div>
      
    </div>
  );
}

export default FormAeropuertos;