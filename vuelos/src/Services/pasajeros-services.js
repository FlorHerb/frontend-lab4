import axios from "axios";

export async function getPasajeros() {
    let datos_prop = [];
    try {
      let response = await axios.get('http://localhost:8000/pasajeros');
      datos_prop = response.data;
    } catch (e) {
      alert(e);
    }
    
    return datos_prop;
  }

  export async function addPasajero(pasajero) {
    try {
    await axios.post(`http://localhost:8000/pasajeros`, {...pasajero, id:null})
    } catch (e) {
      alert(e);
   }
  }