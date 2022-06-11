/* Desde aqui se hacen las llamadas a la api para -agregar datos- -eliminar ciudades- -modificar ciudades-
-y luego se hace el llamado de estas fxs desde donde se necesiten en este caso desde el componente frommyapi.js */

import axios from "axios"


export const  cargarDatos = async (dataInput) => {   /*  dataInput es el objeto que envío desde handleSubmit en formmyapi resultante del evento del submit del form que esta en el frontend */
    console.log(dataInput)
    try {
        let data = await axios.post(`http://localhost:4000/api/allcities`,{dataInput}) /* .post envia el objeto de la info que el usuario ingresó y la mete a la api */
        return data
    }
    catch (error) {
        throw error
    }
}


export const  eliminarCiudad = async (id) => {          /*  MODIFICAR Y AJUSTAR DATOS  */
    console.log(id)
    try {
        /* let data = await axios.delete(`http://localhost:4000/api/V1/allcities/${id}`) */
        return data
    }
    catch (error) {
        throw error
    }
}


export const  modificarCiudad = async (id,dataInput) => {
    console.log(id, dataInput)
    try {
        let data = await axios.put(`http://localhost:4000/api/V1/allcities/${id}`, {dataInput})
        return data
    }
    catch (error) {
        throw error
    }
}