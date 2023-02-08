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
  const [fecha1, setFecha1] = useState('');
  const [fecha2, setfecha2] = useState('');
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    obtenerAeropuertos();
    
  }, []);

  const obtenerAeropuertos = async () => {
    setAeropuertos( await getAeropuertos());
  }
  const handleClickBuscarVuelo = ((e) => { 
    obtenerVuelos();
    setSearch(true)
  })
    const obtenerVuelos = async () => {
      setLoading(true)
      let vuelos = await getVuelos();

      setVuelos(vuelos.filter(n => n.fecha >= fecha1 && n.fecha <= fecha2 &&  n.origen_aero.nombre == origen))
      setLoading(false)
    }

    const handleChangeOrigen = ((e) => {
      setOrigen(e.target.value)
    })

    const handleChangeFecha1 = ((e) => {
      setFecha1(e.target.value)
    })

    const handleChangeFecha2 = ((e) => {
      setfecha2(e.target.value)
    })
    

  return (
    <div>
      <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Por favor ingresa los datos de tu viaje, así podemos mostrarte las opciones disponibles!</p>
      <div style={{display: 'flex', marginTop:'2%'}}>
      <select class="form-select"  name="origen" aria-label="Default select example" style={{width: '20%', marginRight: '2%', marginLeft: '15%', }} onChange={handleChangeOrigen} >
            <option selected> Aeropuerto Origen</option>
            {aeropuertos.map((aeropuertos) =>
          <option key={aeropuertos.codigo} value={aeropuertos.nombre} >{aeropuertos.codigo+' '}{aeropuertos.nombre}</option>
        )}
          </select>

          <label htmlFor="fecha1" style={{marginRight: '2%', }}>Entre fechas : </label>
          <input type="date" id="fecha1" name="fecha1" onChange={handleChangeFecha1}/>
    
          <label htmlFor="fecha2" style={{marginLeft: '1%', }}> - </label>
          <input type="date" id="fecha2" name="fecha2" style={{marginLeft: '1%'}} onChange={handleChangeFecha2}/>
      
          <button type="button" class="btn btn-primary" style={{marginLeft: '5%', }}  onClick={handleClickBuscarVuelo} disabled={origen === '' || fecha1 === '' || fecha2 === ''}>Buscar vuelos</button>
      </div>

      <table className="table" style={{marginTop: '5%'}}>
      <thead>
        <tr class="table-active">
          <th scope="col">Codigo</th>
          <th scope="col">Origen</th>
          <th scope="col">Destino</th>
          <th scope="col">Fecha</th>
          <th scope="col">Hora</th>
          <th scope="col">Avion</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
          {loading 
          ? <div class="clearfix">
          <div class="spinner-border float-end" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
           : search? 
           vuelos.length == 0 && (origen !== '' && fecha1 !== '' && fecha2 !== '')? 
            <div><strong>¡Oh.. lo sentimos! No contamos con vuelos disponibles para ofrecerte..</strong></div>
           :vuelos.map((vuelos) =>
                  <tr key={vuelos.codigo}>
                    <th scope="col">{vuelos.codigo}</th>
                    <td >{vuelos.origen_aero.codigo+' '}{vuelos.origen_aero.ciudad.nombre}</td>
                    <td >{vuelos.origen_aero.codigo+' '}{vuelos.destino_aero.ciudad.nombre}</td>
                    <td >{vuelos.fecha}</td>
                    <td >{vuelos.hora}</td>
                    <td >{vuelos.avion.marca +' '} {vuelos.avion.modelo}</td>
                    <td> <Link to={"" + vuelos.codigo}><button className="btn btn-primary" type="button" >Comprar</button> </Link></td>
                    </tr>
        ):null}
         </tbody>
      </table>


    </div>
  );
}

export default VentaPasajes;