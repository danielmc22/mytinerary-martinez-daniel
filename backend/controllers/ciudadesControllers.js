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
        response: error ? 'ERROR' : {ciudades},  /* si ña respuesta es error entonces tirame error - sino mostrame las ciudades */
        success: error ? false : true,
        error: error

        }) 
    }


}
module.exports = ciudadesController

/* obtener ciudades es un controlador con estructura de objeto... si querems por.ej. modificar una ciudad 
deberiamos crear otro objeto debajo del que ya existe  */