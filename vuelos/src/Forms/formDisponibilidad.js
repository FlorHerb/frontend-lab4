import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState , useEffect } from "react";
import { useParams , useNavigate } from 'react-router-dom';
import { getAsientosByID } from "../Services/asientos-services";

function FormAviones() {
    const { codigoVuelo } = useParams();
    const navigate = useNavigate()
    const [asientos, setAsientos] = useState(null);

    useEffect(() => {
      obtenerAsientos()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    const obtenerAsientos = async () => {
      setAsientos( await getAsientosByID(codigoVuelo));
    }
    if( asientos === null){
      return (
      <div class="d-flex justify-content-center" style={{marginTop:'5%'}}>
      <div class="spinner-border" role="status">
      </div>
    </div>
    );}

  return (
    <div style={{textAlign:'-webkit-center'}}>
      <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Formulario de disponibilidad para el vuelo {codigoVuelo}</p>

      <div class="card" style={{marginTop: '3%', width: '40%'}}>
        <div class="card-body">
            <div class="container text-center">
            <div class="row">
                <div class="col">
                 Totales: {asientos.length}
                </div>
                <div class="col">
                 Libres: {asientos.filter((asiento) => asiento.id_pasaje ===null).length}
                </div>
                <div class="col">
                 Ocupados: {asientos.filter((asiento) => asiento.id_pasaje !== null).length}
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
        {asientos
        .map((asientos) =>
                  <tr key={asientos.id}>
                    <td >{asientos.num_asiento}</td>
                    <td >{asientos.id_pasaje === null ? <b style={{color:'green'}}> Libre </b> :  <mark style={{color:'red'}}> Ocupado </mark>}</td>
                    </tr>
                  )}
         </tbody>
      </table>
      <button type="button" class="btn btn-primary" onClick={() => navigate("/vuelos")} style={{float:'left', marginLeft:'30%'}}>Volver</button>
    </div>
  );
}

export default FormAviones;