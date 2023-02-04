/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="venta-pasajes">Venta de Pasajes</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Administracion
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="aeropuertos">Aeropuertos</a></li>
            <li><a class="dropdown-item" href="aviones">Aviones</a></li>
            <li><a class="dropdown-item" href="pasajes">Pasajes</a></li>
            <li><a class="dropdown-item" href="vuelos">Vuelos</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <img src="logo.png" alt="H&K Aereos" style={{width: '7%', heigth: '7%', marginRight:  '5%'}}/>
  </div>
</nav>
   <Outlet/>
    </div>
  );
}

export default App;
