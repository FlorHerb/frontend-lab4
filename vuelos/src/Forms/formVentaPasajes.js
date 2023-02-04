import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';

function FormVentaPasajes() {
    const { codigoVuelo } = useParams();
    const navigate = useNavigate()
    const cargarPasaje= async () => {
        navigate("/venta-pasajes");
        
       }
  return (
    <div>
      <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Completa los datos para adquirir tu asiento en el vuelo {codigoVuelo}</p>
    
      <div class="card" style={{width: '40%', marginLeft: '30%'}}>
     <div class="card-body">

     <form>
    <div class="mb-3">
        <label for="nombrePasajero" class="form-label">Nombre Pasajero</label>
        <input type="nombre" class="form-control" id="nombrePasajero"/>
    </div>
    <div class="mb-3">
        <label for="dniPasajero" class="form-label">Dni Pasajero</label>
        <input type="dni" class="form-control" id="dniPasajero"/>
    </div>

    <div class="mb-3">
    <select class="form-select" aria-label="Default select example">
            <option selected> Numero de asiento</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
    </div>

    <button type="submit" class="btn btn-primary" onClick={cargarPasaje} >Cargar Pasaje</button>
    <button type="submit" class="btn btn-secondary" onClick={() => navigate("/venta-pasajes")} style={{marginLeft:'4%'}}>Volver</button>

    </form>
   
  </div>
</div>
      
    </div>
  );
}

export default FormVentaPasajes;