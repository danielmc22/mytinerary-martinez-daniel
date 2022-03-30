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
    },
                                            
    cargarCiudad: async(req,res)=>{         /* Controlador para cargar una nueva ciudad desde el front. */
        console.log(req.body)
        const {name, country, descripcion} = req.body.dataInput
        new Ciudades({name:name, 
                     country:country,
                     descripcion: descripcion}).save()   /* salva  */
            .then((respuesta) => res.json({respuesta}))
    },

    obtenerCiudadPorId: async (req, res) => {      //Permite obtener una sola ciudad -- cuando hago click en la card paso por parametro
        const id = req.params.id;                   //Llega un parametro que es el ID y se guarda en al const
        
        let ciudades;                               //aqui se van a guardar los datos del pedido de abajo 

        try {
          ciudades = await Ciudades.findOne({ _id: id });  //va encontrar un unico dato ( "_id" es el id generado por dfeto al crear la db)
        } catch (err) {                                    // y se va a comparar con el id del objeto que viene como param. en la petición   
          console.log(err);
        }
    
        res.json({ response: ciudades, success: true });  //Aqui trae la respuesta en form. JSON de la ciudad que le pedi por id
      },


    borrarCiudad: async (req,res)=>{
        const id = req.params.id

        await Ciudades.findOneAndDelete({_id:id})
    },
    

    modificarCiudad: async (req, res)=>{
        const id = req.params.id
        const ciudad = req.body.dataInput

        let ciudadb = await Ciudades.findOneAndUpdate({_id:id}, ciudad)
         console.log(ciudadb)

    }

}
module.exports = ciudadesController

/* obtener ciudades es un controlador con estructura de objeto... si querems por.ej. modificar una ciudad 
deberiamos crear otro objeto debajo del que ya existe  */

/* Luego  sigue establecer las rutas  que deben llevar un end point. se crea una nueva carpeta dentro de
 backend para albergar las routes o rutas */