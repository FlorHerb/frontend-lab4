/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";

function Vuelos() {
  const navigate = useNavigate()
  const Disponibilidad = async (id) => {
    navigate('/disponibilidad/'+id);
    }

    const handleChangeCargar = ((e) => {
      console.log(e.target.value)
    });

  return (
    <div>
    <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Administracion de Vuelos</p>

    <table className="table" style={{marginTop: '3%'}}>
        <thead>
        <tr class="table-active">
          <th scope="col">Codigo</th>
          <th scope="col">Aeropuerto Origen</th>
          <th scope="col">Aeropuerto Destino</th>
          <th scope="col">Fecha</th>
          <th scope="col">Hora</th>
          <th scope="col">Avion</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
                  <tr>
                    <th scope="col"><Link to={"" + 'CVBNM'}>CVBNM</Link></th>
                    <td >Ministro Pistarini</td>
                    <td >Antônio Carlos Jobim</td>
                    <td >26/06/2023</td>
                    <td >16:45</td>
                    <td >Boeing 747</td>
                    <td><button className="btn btn-primary" type="button" onClick={() => Disponibilidad('CVBNM')}>Disponibilidad</button></td>
                    <td><button className="btn btn-primary" type="button" >Eliminar</button></td>
                    </tr>
         </tbody>
      </table>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Nuevo Vuelo
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Ingresa los datos para cargar un nuevo vuelo.</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="mb-3">
        <label for="codigoAeropuerto" class="form-label">Codigo Avion</label>
        <input type="codigo" class="form-control" id="codigoAvion" />
        <div id="codigoHelp" class="form-text">Debe estar compuesto por 5 letras y ser UNICO.</div>
      </div>
        <div class="mb-3">
            <label for="origen" class="form-label">Aero. Origen</label>
            <input type="Origen" class="form-control" id="Origen"/>
        </div>
        <div class="mb-3">
            <label for="destino" class="form-label">Aero. Destino </label>
            <input type="destino" class="form-control" id="destino" />
        </div>
        <div class="mb-3" style={{display:'grid'}}>
            <label for="fecha" class="form-label">Fecha</label>
              <input type="date" id="fecha" name="fecha" style={{height:'140%'}}/>
        </div>
        <div class="mb-3" style={{display:'grid', marginTop:'5%'}}>
          <label for="appt">Hora</label>
          <input type="time" id="appt" name="appt" style={{height:'140%', width:'40%'}} onChange={handleChangeCargar}/>
        </div>
        <div class="mb-3" >
        <select class="form-select" aria-label="Default select example" style={{ marginTop:'8%'}}>
                <option selected> Avion</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Volver</button>
        <button type="button" class="btn btn-primary" >Cargar</button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Vuelos;