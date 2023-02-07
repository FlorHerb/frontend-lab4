/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAeropuertos, deleteAeropuerto, addAeropuerto } from "../Services/aeropuetos-services";
import { getCiudades } from '../Services/ciudades-services'

function Aeropuertos() {
  const [aeropuertos, setAeropuertos] = useState([]);
  const [aeropuerto, setAeropuerto] = useState([]);

  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    obtenerAeropuertos();
    obtenerCiudades();
  }, []);

  const obtenerAeropuertos = async () => {
    setAeropuertos( await getAeropuertos());
  }

  const obtenerCiudades = async () => {
    setCiudades( await getCiudades());
  }

  const borrar = async (codigo) => {
    await deleteAeropuerto(codigo);
    obtenerAeropuertos();
    }

    const handleChangeAeropuerto = ((e) => {
      setAeropuerto(prev => { return { ...prev, [e.target.name]: e.target.value } });
    });

    const handleClickAeropuerto = ((e) => {
      e.preventDefault();
      addAeropuerto(aeropuerto);
      obtenerAeropuertos();
      });


  return (
    <div>
    <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Administracion de Aeropuertos</p>

    <table className="table" style={{marginTop: '3%'}}>
        <thead>
        <tr  class="table-active">
          <th scope="col">Codigo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Ciudad</th>
          <th scope="col">Pais</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        {aeropuertos.map((aeropuertos) =>
                  <tr key={aeropuertos.id}>
                    <th scope="col"><Link to={"" + aeropuertos.codigo}>{aeropuertos.codigo}</Link></th>
                    <td >{aeropuertos.nombre}</td>
                    <td >{aeropuertos.ciudad.nombre}</td>
                    <td >{aeropuertos.ciudad.pais.nombre}</td>
                    <td><button className="btn btn-primary" type="button" onClick={() => borrar(aeropuertos.codigo)}>Eliminar</button></td>
                    </tr>
                    )}
         </tbody>
      </table>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Nuevo Aeropuerto
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Ingresa los datos para cargar un nuevo aeropuerto.</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="mb-3">
        <label for="codigoAeropuerto" class="form-label">Codigo Aeropuerto</label>
        <input type="text" class="form-control" id="codigoAeropuerto" name="codigo" onChange={handleChangeAeropuerto} />
        <div id="codigoHelp" class="form-text">Debe estar compuesto por 4 letras y ser UNICO.</div>
    </div>
    <div class="mb-3">
        <label for="nombreAeropuerto" class="form-label">Nombre Aeropuerto</label>
        <input type="text" class="form-control" id="nombreAeropuerto" name="nombre" onChange={handleChangeAeropuerto} />
    </div>
    <select class="form-select"  name="id_ciudad" aria-label="Default select example" onChange={handleChangeAeropuerto} >
            <option selected> Ciudad</option>
            {ciudades.map((ciudades) =>
          <option key={ciudades.id} value={ciudades.id} >{ciudades.nombre}</option>
        )}
          </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Volver</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleClickAeropuerto}>Cargar</button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Aeropuertos;