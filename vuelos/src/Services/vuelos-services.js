import axios from "axios";

export async function getVuelos() {
    let datos_prop = [];
    try {
      let response = await axios.get('http://localhost:8000/vuelos');
      datos_prop = response.data;
    } catch (e) {
      alert(e.response.data.detail);
    }
    
    return datos_prop;
  }

  export async function getVueloByID(id) {
    let datos_prop = [];
    try {
      let response = await axios.get(`http://localhost:8000/vuelos/${id}`);
      datos_prop = response.data;
    } catch (e) {
      alert(e.response.data.detail);
    }
    
    return datos_prop;
  }

  export async function addVuelo(Vuelo) {
    try {
    await axios.post(`http://localhost:8000/vuelos`, {...Vuelo, id:null})
    } catch (e) {
      alert(e.response.data.detail);
   }
  }

  export async function deleteVuelo(id) {
    try{
     await axios.delete(`http://localhost:8000/vuelos/${id}`);
    }catch (e) {
      alert(e.response.data.detail);
    }
  }

  export async function updateVuelo(id, vuelo) {
    try{
      await axios.put(`http://localhost:8000/vuelos/${id}`, vuelo);
     }catch (e) {
      alert(e.response.data.detail);
     }
  }