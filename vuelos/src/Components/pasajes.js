/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPasajes, deletePasaje } from "../Services/pasajes-services";

function Pasajes() {
  const navigate = useNavigate()
  const [pasajes, setPasajes] = useState([]);

  useEffect(() => {
    obtenerPasajes();
  }, []);


  const obtenerPasajes = async () => {
    setPasajes( await getPasajes());
  }

  const borrar = async (codigo) => {
    await deletePasaje(codigo);
    obtenerPasajes();
    }

  return (
         <div>
    <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Administracion de Pasajes</p>

    <table className="table" style={{marginTop: '3%'}}>
        <thead>
        <tr class="table-active">
          <th scope="col">Codigo</th>
          <th scope="col">Vuelo</th>
          <th scope="col">Pasajero</th>
          <th scope="col">Asiento N°</th>
          <th scope="col">Fecha Salida</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        {pasajes.map((pasajes) =>
                  <tr key={pasajes.id}>
                     <th scope="col"><Link to={"" + pasajes.id}>{pasajes.id}</Link></th>
                    <th >{pasajes.cod_vuelo}</th>
                    <td >{pasajes.pasajero.nombre + ' '}{pasajes.pasajero.dni}</td>
                    <td >{pasajes.nro_asiento}</td>
                    <td >{pasajes.vuelo.fecha}</td>
                    <td><button className="btn btn-primary" type="button" onClick={() => borrar(pasajes.id)}>Eliminar</button></td>
                    </tr>
        )}
         </tbody>
      </table>
      <button type="button" class="btn btn-primary" onClick={() => navigate("/venta-pasajes")} >
        Venta de pasajes
      </button>
    </div>
  );
}

export default Pasajes;