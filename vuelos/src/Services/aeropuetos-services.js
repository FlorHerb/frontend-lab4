import axios from "axios";

export async function getAeropuertos() {
    let datos_prop = [];
    try {
      let response = await axios.get('http://localhost:8000/aeropuertos');
      datos_prop = response.data;
    } catch (e) {
      alert(e);
    }
    
    return datos_prop;
  }

  export async function getAeropuertoByID(id) {
    let datos_prop = [];
    try {
      let response = await axios.get(`http://localhost:8000/aeropuertos/${id}`);
      datos_prop = response.data;
    } catch (e) {
      alert(e);
    }
    
    return datos_prop;
  }

  export async function addAeropuerto(Aeropuerto) {
    try {
    await axios.post(`http://localhost:8000/aeropuertos`, {...Aeropuerto, id:null})
    } catch (e) {
      alert(e);
   }
  }

  export async function deleteAeropuerto(id) {
    try{
     await axios.delete(`http://localhost:8000/aeropuertos/${id}`);
    }catch (e) {
      alert(e);
    }
  }

  export async function updateAeropuerto(id, aeropuerto) {
    try{
      await axios.put(`http://localhost:8000/aeropuertos/${id}`, aeropuerto);
     }catch (e) {
       alert(e);
     }
  }