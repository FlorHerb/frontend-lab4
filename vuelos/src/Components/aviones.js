/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAviones, deleteAvion, addAvion } from "../Services/aviones-services";

function Aviones() {
  const [aviones, setAviones] = useState([]);
  const [avion, setAvion] = useState([]);

  useEffect(() => {
    obtenerAviones();
  }, []);

  const obtenerAviones = async () => {
    setAviones( await getAviones());
  }

  const borrar = async (codigo) => {
    await deleteAvion(codigo);
    obtenerAviones();
    }

    const handleChangeAvion = ((e) => {
      setAvion(prev => { return { ...prev, [e.target.name]: e.target.value } });
    });

    const handleClickAvion = ((e) => {
      e.preventDefault();
      addAvion(avion);
      obtenerAviones();
      });

  return (
    <div>
    <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Administracion de Aviones</p>

    <table className="table" style={{marginTop: '3%'}}>
        <thead>
        <tr  class="table-active">
          <th scope="col">Codigo</th>
          <th scope="col">Marca</th>
          <th scope="col">Modelo</th>
          <th scope="col">Capacidad</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
          {aviones.map((aviones) =>
                  <tr key={aviones.id}>
                    <th scope="col"><Link  to={"" + aviones.codigo}>{aviones.codigo}</Link></th>
                    <td >{aviones.marca}</td>
                    <td >{aviones.modelo}</td>
                    <td >{aviones.capacidad} Pasajeros</td>
                    <td><button className="btn btn-primary" type="button" onClick={() => borrar(aviones.codigo)}>Eliminar</button></td>
                    </tr>
          )}
         </tbody>
      </table>
      

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Nuevo Avion
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Ingresa los datos para cargar un nuevo avion.</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="mb-3">
        <label for="codigoAvion" class="form-label">Codigo</label>
        <input type="text" class="form-control" id="codigoAvion" name='codigo' onChange={handleChangeAvion}/>
        <div id="codigoHelp" class="form-text">Debe estar compuesto por 3 letras y ser UNICO.</div>
    </div>
    <div class="mb-3">
        <label for="marca" class="form-label">Marca</label>
        <input type="text" class="form-control" id="marca" name='marca'  onChange={handleChangeAvion}/>
    </div>
    <div class="mb-3">
        <label for="modelo" class="form-label">Modelo</label>
        <input type="text" class="form-control" id="modelo" name='modelo' onChange={handleChangeAvion} />
    </div>
    <div class="mb-3">
        <label for="capacidad" class="form-label">Capacidad de Pasajeros</label>
        <input type="text" class="form-control" id="capacidad" name='capacidad' onChange={handleChangeAvion}/>
    </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Volver</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleClickAvion}>Cargar</button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Aviones;