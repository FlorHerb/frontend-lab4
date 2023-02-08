import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState , useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { getPasajeros, addPasajero } from "../Services/pasajeros-services";
import { addPasaje } from "../Services/pasajes-services";
import { getAsientosByID } from "../Services/asientos-services";

function FormVentaPasajes() {
  const { codigoVuelo } = useParams();
    const [pasaje, setPasaje] = useState({
      cod_vuelo: codigoVuelo ,
      nro_asiento: 0,
      id_pasajero: 0
    });
    const [pasajero, setPasajero] = useState([]);
    const [pasajeros, setPasajeros] = useState([]);
    const [asientos, setAsientos] = useState(null);
   
    const navigate = useNavigate()

    useEffect(() => {
      obtenerAsientos()
      obtenerPasajeros()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      const obtenerAsientos = async () => {
        setAsientos( await getAsientosByID(codigoVuelo));
      }

      const obtenerPasajeros = async () => {
        setPasajeros( await getPasajeros(codigoVuelo));
      }

    const cargarPasaje= async (e) => {
      handleClickPasaje(e)
      navigate("/venta-pasajes")
       }

       const handleChangePasajero = ((e) => {
        setPasajero(prev => { return { ...prev, [e.target.name]: e.target.value } });
      });
  
      const handleChangePasaje = ((e) => {
        setPasaje(prev => { return { ...prev, [e.target.name]: e.target.value } });
      });

      const handleClickPasajero = ((e) => {
        e.preventDefault();
        if(pasajeros.filter(elemento=> elemento.dni==pasajero.dni).length > 0){
         
          alert("¡Ya se encuentra registrada una persona con este dni!")
          return;
        }
        addPasajero(pasajero);
        obtenerPasajeros()
        });

      const handleClickPasaje = ((e) => {
        e.preventDefault();
        addPasaje(pasaje);
        alert("felicitaciones el pasaje del vuelo "+pasaje.cod_vuelo+' , asiento: '+pasaje.nro_asiento+' , pasajero: '+pasaje.id_pasajero+' fue cargado con exito. ')
        });
  
        if( asientos === null){
          return (
          <div class="d-flex justify-content-center" style={{marginTop:'5%'}}>
          <div class="spinner-border" role="status">
          </div>
        </div>
        );}

  return (
    <div>
      <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Completa los datos para adquirir tu asiento en el vuelo {codigoVuelo}</p>
    
      <div class="card" style={{width: '40%', marginLeft: '30%'}}>
     <div class="card-body">

     <form>
     <div class="mb-3">
        <label htmlFor="nombrePasajero" class="form-label">Codigo Vuelo</label>
        <input type="nombre" class="form-control"  value={codigoVuelo} id="cod_vuelo" name='cod_vuelo' onChange={handleChangePasaje} disabled />
    </div>
    
    <div class="mb-3">
    <select class="form-select"  name="nro_asiento" aria-label="Default select example" onChange={handleChangePasaje} >
            <option selected> Asientos </option>
            {asientos
            .filter((asiento) => asiento.id_pasaje === null)
            .map((asiento) =>
          <option key={asiento.id} value={asiento.num_asiento}>{asiento.num_asiento}</option>
        )}
          </select>
    </div>

    <div class="mb-3">
    <select class="form-select"  name="id_pasajero" aria-label="Default select example" onChange={handleChangePasaje} >
            <option selected> Pasajeros </option>
            {pasajeros.map((pasajeros) =>
          <option key={pasajeros.dni} value={pasajeros.dni}>{pasajeros.nombre + ' '}{pasajeros.dni}</option>
        )}
          </select>
    </div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Nuevo Pasajero
      </button>

    <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Ingresa los datos para cargar un nuevo Pasajero.</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="mb-3">
        <label htmlFor="codigoAeropuerto" class="form-label">Nombre</label>
        <input type="codigo" class="form-control" id="codigoAvion"  name='nombre' onChange={handleChangePasajero} />
      </div>
        <div class="mb-3">
            <label htmlFor="origen" class="form-label">Dni</label>
            <input type="Origen" class="form-control" id="Origen"  name='dni' onChange={handleChangePasajero}/>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Volver</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleClickPasajero} >Cargar</button>
      </div>
    </div>
  </div>
</div>

    </form>
  </div>
</div>
    <div style={{marginLeft:'30%', marginTop:'5%'}}>
    <button type="submit" class="btn btn-primary" onClick={cargarPasaje} >Cargar Pasaje</button>
    <button type="submit" class="btn btn-secondary" onClick={() => navigate("/venta-pasajes")} style={{marginLeft:'4%'}}>Volver</button>
    </div>
    </div>
  );
}

export default FormVentaPasajes;