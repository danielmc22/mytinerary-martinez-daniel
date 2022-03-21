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
       
        const id = req.params.id
        const user = req.body.user
        let itinerario 

        try{
            itinerario = await Itinerarios.findOne({_id:id})

            if (itinerario.likes.includes(user)) { 
            Itinerarios.findOneAndUpdate({_id:id}, {$pull :{likes:user}}, {new:true} )
            .then(response => res.json({ success:true, response:response.likes   }))

            .catch(error => console.log(error))

        } else {
            Itinerarios.findOneAndUpdate({_id:id}, {$push :{likes:user}}, {new:true} )
            .then(response => res.json({ success:true, response:response.likes   }))

            .catch(error => console.log(error))
        }

        }catch(err){
            error = err
            response.json({success:false, response:error})
        }
       
    },
    

}
module.exports = ItinerariosController