import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';

function FormAeropuertos() {
    const { codigoAeropuerto } = useParams();
    const navigate = useNavigate()
    const modificar= async () => {
        navigate("/aeropuertos");
        
       }
  return (
    <div>
      <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Formulario de modificacion aeropuerto {codigoAeropuerto}</p>
    
      <div class="card" style={{width: '40%', marginLeft: '30%'}}>
     <div class="card-body">

     <form>
    <div class="mb-3">
        <label for="codigoAeropuerto" class="form-label">Codigo Aeropuerto</label>
        <input type="codigo" class="form-control" id="codigoAeropuerto" value={codigoAeropuerto} disabled />
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

    <button type="submit" class="btn btn-primary" onClick={modificar} >Modificar</button>
    <button type="submit" class="btn btn-secondary" onClick={() => navigate("/aeropuertos")} style={{marginLeft:'4%'}}>Volver</button>
    </form>
   
  </div>
</div>
      
    </div>
  );
}

export default FormAeropuertos;