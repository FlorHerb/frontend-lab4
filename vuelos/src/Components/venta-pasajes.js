/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function VentaPasajes() {
  return (
    <div>
      <p class="text-center" style={{marginTop: '2%', fontWeight: '500'}}>Por favor ingresa los datos de tu viaje, así podemos mostrarte las opciones disponibles!</p>
      <div style={{display: 'flex', marginTop:'2%'}}>
          <select class="form-select" aria-label="Default select example" style={{width: '20%', marginRight: '2%', marginLeft: '15%', }}>
            <option selected> Aeropuerto de origen</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <label for="fecha1" style={{marginRight: '2%', }}>Entre fechas : </label>
          <input type="date" id="fecha1" name="fecha1"/>
    
          <label for="fecha2" style={{marginLeft: '1%', }}> - </label>
          <input type="date" id="fecha2" name="fecha2" style={{marginLeft: '1%', }}/>
      
          <button type="button" class="btn btn-primary" style={{marginLeft: '5%', }}>Buscar vuelos</button>
      </div>

      <table className="table" style={{marginTop: '5%'}}>
        <thead>
        <tr class="table-active">
          <th scope="col">Codigo</th>
          <th scope="col">Aeropuerto</th>
          <th scope="col">Origen</th>
          <th scope="col">Destino</th>
          <th scope="col">Fecha</th>
          <th scope="col">Hora</th>
          <th scope="col">Avion</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
                  <tr>
                    <th scope="col">WERTT</th>
                    <td >Ministro Pistarini</td>
                    <td >Buenos Aires</td>
                    <td >Brasil</td>
                    <td >15/06/2023</td>
                    <td >16:45</td>
                    <td >Boeing 747</td>
                    <td> <Link to={"" + 'WERTT'}><button className="btn btn-primary" type="button" >Comprar</button> </Link></td>
                    </tr>
                   
         </tbody>
      </table>


    </div>
  );
}

export default VentaPasajes;