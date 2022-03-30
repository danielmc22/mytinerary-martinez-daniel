import axios from 'axios';
import { ITINERARIES_GET } from './types';


const itinerariosActions = {

itinerariesPerCity: (id) => {
    
    return async(dispatch, getState)=>{
        try{
            
            const res = await axios.get('http://localhost:4000/api/itinerarios/'+id)
            console.log(res.data)
            dispatch({type: ITINERARIES_GET, payload:res.data.response})
        } catch(error){
            console.log(error)
        }
    }
},

obtenerUnItinerario: (id) => {                                               //llega el id como parametro de la ciudad
    return async(dispatch, getState) => {
        try{
            const res = await axios.get('http://localhost:4000/api/itinerarios/'+id)  
          return res 
        } catch (error){
            console.log(error)
        }
    }
},

likeDislike: (itinerarioId) => {                    //recibe como parametro el ID del lugar 
    const token = localStorage.getItem('token')     //Levantamos el token
    console.log(itinerarioId)
    
    return async () => {
        try {
            let response = await axios.put(`http://localhost:4000/api/itinerarios/likes/${itinerarioId}`, {}, //viene como parametro desde arriba
           {  headers: {                               // Se pasa el dato 'Authorization bajo el metodo bearer + token 
                'Authorization': 'Bearer ' + token
            }
            })
            console.log(response)
            return response
            
        }catch (error) {
            console.log(error)
        }
    }
}, 
 
}
export default itinerariosActions