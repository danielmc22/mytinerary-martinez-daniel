import { ITINERARIES_GET } from '../actions/types';

const initialState = {
    itinerarios:[],
    aux:[],
  
    
}

const itinerariosReducers = (state = initialState, action)=>{
    switch(action.type){
        case ITINERARIES_GET:
            return {                
                    ...state,
                    itinerarios: action.payload,
                    
                                       
                }
        default: 
        
            return state  
        }}
        
        export default itinerariosReducers;