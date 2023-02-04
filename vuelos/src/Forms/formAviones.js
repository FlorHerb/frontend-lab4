import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';

function FormAviones() {
    const { codigoAvion } = useParams();
    const navigate = useNavigate()
    const modificar= async () => {
        navigate("/aviones");
        
       }
  return (
    <div>
      <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Formulario de modificacion avion {codigoAvion}</p>
    
      <div class="card" style={{width: '40%', marginLeft: '30%'}}>
     <div class="card-body">

     <form>
    <div class="mb-3">
        <label for="codigoAvion" class="form-label">Codigo </label>
        <input type="codigo" class="form-control" id="codigoAvion" value={codigoAvion} disabled />
    </div>
    <div class="mb-3">
        <label for="nombreAvion" class="form-label">Marca</label>
        <input type="nombre" class="form-control" id="nombreAeropuerto"/>
    </div>
    <div class="mb-3">
        <label for="cuidad" class="form-label">Modelo </label>
        <input type="cuidad" class="form-control" id="cuidad" />
    </div>
    <div class="mb-3">
        <label for="pais" class="form-label">Capacidad de Pasajeros</label>
        <input type="pais" class="form-control" id="pais" />
    </div>

    <button type="submit" class="btn btn-primary" onClick={modificar} >Modificar</button>
    <button type="submit" class="btn btn-secondary" onClick={() => navigate("/aviones")} style={{marginLeft:'4%'}}>Volver</button>

    </form>
   
  </div>
</div>
      
    </div>
  );
}

export default FormAviones;