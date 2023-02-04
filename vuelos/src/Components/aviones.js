/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Aviones() {
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
                  <tr>
                    <th scope="col"><Link to={"" + 'QSCV'}>QSCV</Link></th>
                    <td >Boeing</td>
                    <td >747</td>
                    <td >250 Pasajeros</td>
                    <td><button className="btn btn-primary" type="button" >Eliminar</button></td>
                    </tr>
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
        <input type="codigo" class="form-control" id="codigoAvion"/>
        <div id="codigoHelp" class="form-text">Debe estar compuesto por 3 letras y ser UNICO.</div>
    </div>
    <div class="mb-3">
        <label for="nombreAvion" class="form-label">Marca</label>
        <input type="nombre" class="form-control" id="nombreAeropuerto"/>
    </div>
    <div class="mb-3">
        <label for="cuidad" class="form-label">Modelo</label>
        <input type="cuidad" class="form-control" id="cuidad" />
    </div>
    <div class="mb-3">
        <label for="pais" class="form-label">Capacidad de Pasajeros</label>
        <input type="pais" class="form-control" id="pais" />
    </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Volver</button>
        <button type="button" class="btn btn-primary">Cargar</button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Aviones;