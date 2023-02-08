import axios from "axios";

export async function getCiudades() {
    let datos_prop = [];
    try {
      let response = await axios.get('http://localhost:8000/ciudades');
      datos_prop = response.data;
    } catch (e) {
      alert(e.response.data.detail);
    }
    
    return datos_prop;
  }