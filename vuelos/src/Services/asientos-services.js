import axios from "axios";

export async function getAsientosByID(id) {
    let datos_prop = [];
    try {
      let response = await axios.get(`http://localhost:8000/asientos/${id}`);
      datos_prop = response.data;
    } catch (e) {
      alert(e);
    }
    
    return datos_prop;
  }
