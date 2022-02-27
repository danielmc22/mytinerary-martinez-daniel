const mongoose = require("mongoose")   /* traemos a moongoose    --   Mongoose es una librería para Node.js que nos permite escribir consultas para una base de datos de MongooDB, con características como validaciones, construcción de queries*/

const ciudadesSchema = new mongoose.Schema({      /* nueva instancia de mongoose y se llama al metodo schema para crear el objeto */
    nombre:{type:String, required:true},          /* ciudadesSchema contendrà el modelo de objeto que usaremos para interactuar modificar  nuestra base de datos  */
    pais:{type:String, required:true},
    descripcion:{type:String, required:true}
    })

    const Ciudades = mongoose.model("cities",  ciudadesSchema)  /*se llama una nueva inst. de mongoose (.model) 
    utilizamos el metodo model para crear un nuevo metodo de consulta  y entre () nos trae colección "ciudades" de mi
    base de datos y como parametro le pasamos "ciudadesSchema"   */

    module.exports = Ciudades  /* exportamos Ciudades de la linea 9 */

    /* si se quisiera modificar otra base de datos, se debe crear otro modelo diferente 
    dentro de la carpeta models  */