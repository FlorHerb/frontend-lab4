import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function FormAviones() {
    const { codigoVuelo } = useParams();
    const navigate = useNavigate()

  return (
    <div style={{textAlign:'-webkit-center'}}>
      <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Formulario de disponibilidad para el vuelo {codigoVuelo}</p>

      <div class="card" style={{marginTop: '3%', width: '40%'}}>
        <div class="card-body">
            <div class="container text-center">
            <div class="row">
                <div class="col">
                 Totales: 30
                </div>
                <div class="col">
                 Libres: 10
                </div>
                <div class="col">
                 Ocupados: 20
                </div>
            </div>
            </div>
        </div>
      </div>

      <table className="table" style={{marginTop: '3%', width: '40%'}}>
        <thead>
        <tr class="table-active">
          <th scope="col">Numero de asiento</th>
          <th scope="col">Disponibilidad</th>
        </tr>
        </thead>
        <tbody>
                  <tr>
                    <td >1</td>
                    <td >Disponible</td>
                    </tr>
         </tbody>
      </table>
      <button type="button" class="btn btn-primary" onClick={() => navigate("/vuelos")} style={{float:'left', marginLeft:'30%'}}>Volver</button>
    </div>
  );
}

export default FormAviones;