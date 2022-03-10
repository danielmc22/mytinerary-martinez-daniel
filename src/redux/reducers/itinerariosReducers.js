import { ITINERARIES_GET } from '../actionsCreators/types';

const initialState = {
    itineraries:[],
    aux:[],
  
}

const itinerariosReducers = (state = initialState, action)=>{
    switch(action.type){
        case ITINERARIES_GET:
            return {                
                    ...state,
                    itineraries: action.payload,
                                      
                }
        default: 
        
            return state  
        }}
        
        export default itinerariosReducers;