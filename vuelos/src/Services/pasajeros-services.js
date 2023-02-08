import axios from "axios";

export async function getPasajeros() {
    let datos_prop = [];
    try {
      let response = await axios.get('http://localhost:8000/pasajeros');
      datos_prop = response.data;
    } catch (e) {
      alert(e.response.data.detail);
    }
    
    return datos_prop;
  }

  export async function addPasajero(pasajero) {
    try {
    await axios.post(`http://localhost:8000/pasajeros`, {...pasajero, id:null})
    } catch (e) {
      alert(e.response.data.detail);
   }
  }

  export async function updatePasajero(id, pasajero) {
    try{
      await axios.put(`http://localhost:8000/pasajeros/${id}`, pasajero);
     }catch (e) {
      alert(e.response.data.detail);
     }
  }

  export async function getPasajeroByID(id) {
    let datos_prop = [];
    try {
      let response = await axios.get(`http://localhost:8000/pasajeros/${id}`);
      datos_prop = response.data;
    } catch (e) {
      alert(e.response.data.detail);
    }
    
    return datos_prop;
  }
