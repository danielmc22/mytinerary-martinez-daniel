const itinerariosRouter = require(`express`).Router();

const itinerariosControllers = require(`../controllers/itinerariosControllers`);

const { obtenerItinerios, 
    obtenerUnItinerario,
    crearItinerario,
    borrarItinerario, 
    actualizarItinerario,
    /* getCityItineraries */} = itinerariosControllers;

itinerariosRouter.route(`/itinerarios`)
.get(obtenerItinerios)
.post(crearItinerario)

itinerariosRouter.route(`/itinerarios/:id`)
.delete(borrarItinerario)
.put(actualizarItinerario)
.get(obtenerUnItinerario)

itinerariosRouter.route(`/cityItinerarios`)
.get(/* getCityItineraries */)



module.exports = itinerariosRouter; 