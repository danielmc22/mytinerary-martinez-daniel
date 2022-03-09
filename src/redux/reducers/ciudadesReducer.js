const initialState = {
    ciudades:[],
    axiliar:[],
    
}

const ciudadesReducer = (state = initialState, action)=>{

    switch(action.type){        //aqui se pregunta de qué tipo es la accion que llega de "ciudadesActions"
        case 'fetch':
            return {
                ...state,
                cities: action.payload,       //con la carga vamos a actualizar el state inicial    
                auxiliar: action.payload,
            }
        case 'fetchOne':
            return {
                ...state,
                cities: action.payload,
                auxiliar: action.payload
            }
        case 'delete':
            return {
                ...state,
                cities: action.payload
            }
        case 'chargeCities':
            let cities= [...state.cities]
            cities.push(action.payload)
            return{
                ...state,
                cities,
                auxiliar: [...cities]
            }
        case 'filtro':
            const filtrado = action.payload.cities.filter((city => city.name.toLowerCase().startsWith(action.payload.value.toLowerCase())))

            return {
                ...state,
                cities: filtrado
            }
        default:
            return state
    }
}
export default ciudadesReducer;