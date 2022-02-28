const Ciudades = require("../models/ciudades")  /* Ciudades va a contener el modelo creado */

const ciudadesController = {

    obtenerCiudades: async (req, res) =>{   /* funcion asincrona */
        let ciudades
        let error = null

        try{                                 /* aqui se espera la respuesta del modelo para meterlo en let ciudades linea 6 --  */
            ciudades = await Ciudades.find()                                          
        }catch(err){
            error = err                           /* si no se establece la conexion se captura el error y se muestra por console.log */
            console.log(err)
        }
        res.json({                                  /* si llega la respuesta ("res" linea 5) que se muestre como un json */
        response: error ? 'ERROR' : {ciudades},  /* si la respuesta es error entonces tirame error - sino mostrame las ciudades que pido en la linea 10*/
        success: error ? false : true,
        error: error

        }) 
    }


}
module.exports = ciudadesController

/* obtener ciudades es un controlador con estructura de objeto... si querems por.ej. modificar una ciudad 
deberiamos crear otro objeto debajo del que ya existe  */

/* Luego  sigue establecer las rutas las rutas que deben llevar un end point. se crea una nueva carpeta dentro de backend para albergar las routes o rutas */