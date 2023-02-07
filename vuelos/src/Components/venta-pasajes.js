/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAeropuertos } from "../Services/aeropuetos-services";
import { getVuelos } from "../Services/vuelos-services";

function VentaPasajes() {
  const [aeropuertos, setAeropuertos] = useState([]);
  const [vuelos, setVuelos] = useState([]);
  const [origen, setOrigen] = useState('');
  useEffect(() => {
    obtenerAeropuertos();
  }, []);

  const obtenerAeropuertos = async () => {
    setAeropuertos( await getAeropuertos());
  }
  const handleClickBuscarVuelo = ((e) => {
    obtenerVuelos();
    });

    const obtenerVuelos = async () => {
      setVuelos( await getVuelos());
    }

    const handleChangeOrigen = ((e) => {
      setOrigen(e.target.value)
    })

  return (
    <div>
      <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Por favor ingresa los datos de tu viaje, así podemos mostrarte las opciones disponibles!</p>
      <div style={{display: 'flex', marginTop:'2%'}}>
      <select class="form-select"  name="origen" aria-label="Default select example" style={{width: '20%', marginRight: '2%', marginLeft: '15%', }} onChange={handleChangeOrigen} >
            <option selected> Aeropuerto Origen</option>
            {aeropuertos.map((aeropuertos) =>
          <option key={aeropuertos.id} value={aeropuertos.codigo} >{aeropuertos.nombre}</option>
        )}
          </select>

          <label for="fecha1" style={{marginRight: '2%', }}>Entre fechas : </label>
          <input type="date" id="fecha1" name="fecha1"/>
    
          <label for="fecha2" style={{marginLeft: '1%', }}> - </label>
          <input type="date" id="fecha2" name="fecha2" style={{marginLeft: '1%', }}/>
      
          <button type="button" class="btn btn-primary" style={{marginLeft: '5%', }}  onClick={handleClickBuscarVuelo}>Buscar vuelos</button>
      </div>

      <table className="table" style={{marginTop: '5%'}}>
        <thead>
        <tr class="table-active">
          <th scope="col">Codigo</th>
          <th scope="col">Aeropuerto Origen</th>
          <th scope="col">Aeropuerto Destino</th>
          <th scope="col">Fecha</th>
          <th scope="col">Hora</th>
          <th scope="col">Avion</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        {vuelos.map((vuelos) =>
                  <tr key={vuelos.codigo}>
                    <th scope="col">{vuelos.codigo}</th>
                    <td >{vuelos.cod_origen_aero}</td>
                    <td >{vuelos.cod_destino_aero}</td>
                    <td >{vuelos.fecha}</td>
                    <td >{vuelos.hora}</td>
                    <td >{vuelos.cod_avion}</td>
                    <td> <Link to={"" + vuelos.codigo}><button className="btn btn-primary" type="button" >Comprar</button> </Link></td>
                    </tr>
        )}
         </tbody>
      </table>


    </div>
  );
}

export default VentaPasajes;