import axios from "axios";

export async function getPasajes() {
    let datos_prop = [];
    try {
      let response = await axios.get('http://localhost:8000/pasajes');
      datos_prop = response.data;
    } catch (e) {
      alert(e.response.data.detail);
    }
    
    return datos_prop;
  }

  export async function getPasajeByID(id) {
    let datos_prop = [];
    try {
      let response = await axios.get(`http://localhost:8000/pasajes/${id}`);
      datos_prop = response.data;
    } catch (e) {
      alert(e.response.data.detail);
    }
    
    return datos_prop;
  }

  export async function addPasaje(Pasaje) {
    try {
    await axios.post(`http://localhost:8000/pasajes`, {...Pasaje, id:null})
    } catch (e) {
      alert(e.response.data.detail);
   }
  }

  export async function deletePasaje(id) {
    try{
     await axios.delete(`http://localhost:8000/pasajes/${id}`);
    }catch (e) {
      alert(e.response.data.detail);
    }
  }

  export async function updatePasaje(id, pasaje) {
    try{
      await axios.put(`http://localhost:8000/pasajes/${id}`, pasaje);
     }catch (e) {
      alert(e.response.data.detail);
     }
  }