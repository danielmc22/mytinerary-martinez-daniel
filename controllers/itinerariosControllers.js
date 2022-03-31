const { response } = require('express')
const Itinerarios = require('../models/itinerarios')

const ItinerariosController = {

    obtenerItinerios: async (req, res)=>{
        let itinerario
        let error = null

        try{
            itinerario = await Itinerarios.find()     //espera la respuesta del modelo llamado en linea 1
           
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {itinerario},
            success: error ? false : true,
            error: error
        })
    },

    obtenerUnItinerario: async(req, res)=> {
        const id = req.params.id
        let itinerario 
        let error = null

        try{
            itinerario = await Itinerarios.find({cityId:id})
        }catch(err){
            error = err
        }
        res.json({
            response: error ? 'ERROR' : itinerario,
            succes: error ? false : true,
        })
    },

    crearItinerario: async(req, res)=> {
        console.log(req.body)
        const { image, name, userName,imageUser, hours, price, activities, hashtags,comments} = req.body
        new Itinerarios({
            image, name, userName,imageUser,likes, price, hours, hashtags, activities,comments}).save()
                .then((respuesta)=> res.json({respuesta}))
                .catch(error=>{
                console.log(error)
                })
        },

    borrarItinerario: async(req, res)=> {
        const id = req.params.id

        await Itinerarios.findOneAndDelete({_id:id})
    },

    actualizarItinerario: async(req, res)=> {
        const id = req.params.id
        const itinerarios= req.body.dataInput

        let ciudaddb = await Itinerarios.findOneAndUpdate({_id:id}, itinerarios)
    },


    likeDislike: async (req, res) => {
        
        const id = req.params.id            //llega como param. un ID desde "axios" y corresponde al itinerario de donde se va a poner o sacar el like
        const user = req.user.id          //llega por respuesta de passport al evaluar devuelve la info de user y tomamos el ID
        console.log("holamundoholaholaholaholaholaholahola")
        console.log(id)
        console.log(user)

        await  Itinerarios.findOne({_id: id})  //buscamos un itinerario que corresponda con el del id recibido como parametro line 67

        .then((itinerario) =>{                  //cuando ya tenemos el itinerario
            if(itinerario.likes.includes(user)){  //de ese itinerario en la propiedad like vamos a buscar si se incluye al usuario, si es asi
               Itinerarios.findOneAndUpdate({_id:id}, {$pull:{likes:user}},{new:true}) //al itinerario lo vamos a actualizar y le vamos a sacar de likes al user y "new" devuelve el nuevo dato
               .then((response)=> res.json({success:true, response:response.likes}))
               .catch((error) => console.log(error))

               
            }else{      //en caso de que el ID del usuario no este dentro del el array de likes hace lo mismo pero le pushea el like
                Itinerarios.findOneAndUpdate({_id: id}, {$push:{likes:user}},{new:true}) // $push  es el push pero para actuar en "mongo"
                .then((response) => res.json({success:true, response:response.likes}))
                .catch((error) => console.log(error))
            }
        })
        .catch((error) => res.json({success:false, response:error}))
    },

}
module.exports = ItinerariosController



