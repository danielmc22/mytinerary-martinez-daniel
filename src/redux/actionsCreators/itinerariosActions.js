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

likeDislike: (itinerarioId) => {                    //recibe como parametro el ID del lugar 
    const token = localStorage.getItem('token')     //Levantamos el token
    return async () => {
        try {
            let response = await axios.put(`http://localhost:4000/api/itinerarios/likes/${itinerarioId}`, {}, //viene como parametro desde arriba
            {headers: {
                Authorization: "Bearer "+token          //siempre debe haber un ESPACIO despues de Bearer
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