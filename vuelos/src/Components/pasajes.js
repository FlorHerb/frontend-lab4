/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";

function Pasajes() {
  const navigate = useNavigate()
  return (
         <div>
    <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Administracion de Pasajes</p>

    <table className="table" style={{marginTop: '3%'}}>
        <thead>
        <tr class="table-active">
          <th scope="col">Codigo</th>
          <th scope="col">Vuelo</th>
          <th scope="col">Pasajero</th>
          <th scope="col">Asiento N°</th>
          <th scope="col">Fecha Salida</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
                  <tr>
                    <th scope="col"><Link to={"" + '123'}>123</Link></th>
                    <th >FGHJG</th>
                    <td >Kesseler Simona 40407420</td>
                    <td >152</td>
                    <td >26/06/2023</td>
                    <td><button className="btn btn-primary" type="button" >Eliminar</button></td>
                    </tr>
         </tbody>
      </table>
      <button type="button" class="btn btn-primary" onClick={() => navigate("/venta-pasajes")} >
        Venta de pasajes
      </button>
    </div>
  );
}

export default Pasajes;