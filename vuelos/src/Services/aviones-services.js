import axios from "axios";

export async function getAviones() {
    let datos_prop = [];
    try {
      let response = await axios.get('http://localhost:8000/aviones');
      datos_prop = response.data;
    } catch (e) {
      alert(e);
    }
    
    return datos_prop;
  }

  export async function getAvionByID(id) {
    let datos_prop = [];
    try {
      let response = await axios.get(`http://localhost:8000/aviones/${id}`);
      datos_prop = response.data;
    } catch (e) {
      alert(e);
    }
    
    return datos_prop;
  }

  export async function addAvion(avion) {
    try {
    await axios.post(`http://localhost:8000/aviones`, {...avion, id:null})
    } catch (e) {
      alert(e);
   }
  }

  export async function deleteAvion(id) {
    try{
     await axios.delete(`http://localhost:8000/aviones/${id}`);
    }catch (e) {
      alert(e);
    }
  }

  export async function updateAvion(id, avion) {
    try{
      await axios.put(`http://localhost:8000/aviones/${id}`, avion);
     }catch (e) {
       alert(e);
     }
  }