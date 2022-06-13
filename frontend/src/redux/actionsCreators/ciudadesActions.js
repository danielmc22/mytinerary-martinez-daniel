// Todos los pedidos a la api deben ser hechos desde actions y reducers
import axios from 'axios';

const ciudadesActions = {                                 //las Actions es un solo objeto que va contener acciones!!

    fetchearCiudades: () => {                           //cada llamado va a ser una función
        return async(dispatch, getState)=>{             //la Fx asyncrona va dentro de un return en este caso de las actions
            const res = await axios.get('https://mytinerary-martinez-daniel.herokuapp.com/api/allcities')   //guardo mis ciudades en res
            dispatch({type:'fetch', payload:res.data.response.ciudades})     //finalmente despacha una acción y envía una carga
        }                                                                  //el tipo tiene que coincidir con el case" del reducer
    },
    fetchearUnaCiudad: (id) => {                                               //llega el id como parametro de la ciudad
        return async(dispatch, getState) => {
            try{
                const res = await axios.get('https://mytinerary-martinez-daniel.herokuapp.com/api/cities/'+id)
                console.log(res.data)
                dispatch({type: 'fetchOne', payload:res.data.response })
            } catch (error){
                console.log(error)
            }
        }
    },
    borrarCiudad: (id)=>{
        return async(dispatch, getState)=>{
            try {
                const res = await axios.delete('https://mytinerary-martinez-daniel.herokuapp.com/api/allcities/'+id)
                dispatch({type:'delete', payload:res.data.response.cities})
            }catch(err){
                console.log(err)
            }
        }
    },
    filtro: (cities, value)=>{
        return (dispatch, getState)=>{
            dispatch({type:'filtro', payload:{cities, value}})
        }
    },
    cargarCiudad: (name, descripcion)=>{
        return async(dispatch, getState)=>{
            const res = await axios.post('https://mytinerary-martinez-daniel.herokuapp.com/api/allcities',{name,descripcion})
            dispatch({type:'chargeCities', payload:res.data.response.ciudades})
        }
    }
}
export default ciudadesActions;