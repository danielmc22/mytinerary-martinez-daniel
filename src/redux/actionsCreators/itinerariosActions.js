import axios from 'axios';
import { ITINERARIES_GET } from './types';


const itinerariosActions = {

itinerariesPerCity: (id) => {
    
    return async(dispatch, getState)=>{
        try{
            /* const res = await axios.get('http://localhost:4000/api/itinerarios?cityId='+id) */    //PREGUNTAR
            const res = await axios.get('http://localhost:4000/api/itinerarios/'+id)
            console.log(res.data)
            dispatch({type: ITINERARIES_GET, payload:res.data.response})
        } catch(error){
            console.log(error)
        }
    }
},
 
}
export default itinerariosActions