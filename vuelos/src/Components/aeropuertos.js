/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Aeropuertos() {
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
                  <tr>
                    <th scope="col"><Link to={"" + 'QSCV'}>QSCV</Link></th>
                    <td >Ministro Pistarini</td>
                    <td >Buenos Aires</td>
                    <td >Argentina</td>
                    <td><button className="btn btn-primary" type="button" >Eliminar</button></td>
                    </tr>
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
        <input type="codigo" class="form-control" id="codigoAeropuerto" />
        <div id="codigoHelp" class="form-text">Debe estar compuesto por 4 letras y ser UNICO.</div>
    </div>
    <div class="mb-3">
        <label for="nombreAeropuerto" class="form-label">Nombre Aeropuerto</label>
        <input type="nombre" class="form-control" id="nombreAeropuerto"/>
    </div>
    <div class="mb-3">
        <label for="cuidad" class="form-label">Ciudad</label>
        <input type="cuidad" class="form-control" id="cuidad" />
    </div>
    <div class="mb-3">
        <label for="pais" class="form-label">Pais</label>
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

export default Aeropuertos;