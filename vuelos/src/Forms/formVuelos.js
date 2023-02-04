import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';

function FormVuelos() {
    const { codigoVuelo } = useParams();
    const navigate = useNavigate()
    const modificar= async () => {
        navigate("/vuelos");
        
       }
  return (
    <div>
      <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Formulario de modificacion para el vuelo: {codigoVuelo}</p>
    
      <div class="card" style={{width: '40%', marginLeft: '30%'}}>
     <div class="card-body">

     <form>
    <div class="mb-3">
        <label for="codigoAvion" class="form-label">Codigo </label>
        <input type="codigo" class="form-control" id="codigoAvion" value={codigoVuelo} disabled />
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
    <input type="time" id="appt" name="appt"  style={{height:'140%', width:'40%'}}/>
    </div>
    <div class="mb-3">
    <select class="form-select" aria-label="Default select example" style={{ marginTop:'8%'}}>
            <option selected> Avion</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
    </div>

    <button type="submit" class="btn btn-primary" onClick={modificar} >Modificar</button>
    <button type="submit" class="btn btn-secondary" onClick={() => navigate("/vuelos")} style={{marginLeft:'4%'}}>Volver</button>

    </form>
   
  </div>
</div>
      
    </div>
  );
}

export default FormVuelos;