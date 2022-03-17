import { combineReducers } from "redux"   //va a combinar los otros reducers que utilice en mi app
                                        //Aqui importo mis otros reducers
import itinerariosReducers from "./itinerariosReducers";
import ciudadesReducer from "./ciudadesReducer";
import userReducer from "./userReducer";



const mainReducer = combineReducers({
    //Aqui van los otros reducers de mi app. que van a ser combinados por el combineReducers

    itinerariosReducers,
    Data: ciudadesReducer,
    userReducer,



})

export default mainReducer