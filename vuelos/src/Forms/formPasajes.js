import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';

function FormPasajes() {
    const { codigoPasaje } = useParams();
    const navigate = useNavigate()
    const modificar= async () => {
        navigate("/pasajes");
        
       }
  return (
    <div>
      <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Formulario de modificacion para el pasaje {codigoPasaje}</p>
    
      <div class="card" style={{width: '40%', marginLeft: '30%'}}>
     <div class="card-body">

     <form>
    <div class="mb-3">
        <label for="codigoPasaje" class="form-label">Codigo </label>
        <input type="codigo" class="form-control" id="codigoAvion" value={codigoPasaje} disabled />
    </div>
    <div class="mb-3">
    <select class="form-select" aria-label="Default select example">
            <option selected> Avion</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
    </div>
    <div class="mb-3">
        <label for="nombre" class="form-label">Nombre Pasajero</label>
        <input type="nombre" class="form-control" id="nombre" />
    </div>
    <div class="mb-3">
        <label for="dni" class="form-label">Dni Pasajero </label>
        <input type="dni" class="form-control" id="dni" />
    </div>
    <div class="mb-3">
        <label for="asiento" class="form-label">Numero de asiento </label>
        <input type="asiento" class="form-control" id="asiento" />
    </div>

    <button type="submit" class="btn btn-primary" onClick={modificar} >Modificar</button>
    <button type="submit" class="btn btn-secondary" onClick={() => navigate("/pasajes")} style={{marginLeft:'4%'}}>Volver</button>

    </form>
   
  </div>
</div>
      
    </div>
  );
}

export default FormPasajes;