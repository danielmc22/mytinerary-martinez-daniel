const initialState = {
    cities:[],
    axiliar:[],
    filterCities:[],
    city: {},
    
}

const ciudadesReducer = (state = initialState, action)=>{

    switch(action.type){        //aqui se pregunta de qué tipo es la accion que llega de "ciudadesActions"
        case 'fetch':
            return {
                ...state,
                cities: action.payload,       //con la carga vamos a actualizar el state inicial    
                filterCities: action.payload,
            }
        case 'fetchOne':
            return {
                ...state,
                city: action.payload,
                
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
                filterCities: filtrado
            }
        default:
            return state
    }
}
export default ciudadesReducer;