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
            itinerario = await Itinerarios.findOne({_id:id})
        }catch(err){
            error = err
        }
        res.json({
            response: error ? 'ERROR' : ciudad,
            succes: error ? false : true,
        })
    },

    crearItinerario: async(req, res)=> {
        const { image, name, price, hours} = req.body.input
        new Itinerarios({
            image,
            name,
            price,
            hours,              
            }).save()
                .then((respuesta)=> res.json({respuesta}))
        },

    borrarItinerario: async(req, res)=> {
        const id = req.params.id

        await Itinerarios.findOneAndDelete({_id:id})
    },


    actualizarItinerario: async(req, res)=> {
        const id = req.params.id
        const itinerarios= req.body.dataInput

        let ciudaddb = await Itinerarios.findOneAndUpdate({_id:id}, itinerarios)
    }
    

}
module.exports = ItinerariosController