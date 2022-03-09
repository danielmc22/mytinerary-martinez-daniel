const mongoose = require("mongoose");


const itinerariosSchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
    imageUser: { type: String, required: true },
    hours: { type: Number, required: true },
    price: { type: Number, required: true },
    activities: { type: String, required: true },
    hashtag: [{ type: String, required: true }],
    cityId: {type: mongoose.Schema.Types.ObjectId, ref: 'cities'} 
  });

  const Itinerarios = mongoose.model("itinerarios", itinerariosSchema);
  module.exports = Itinerarios;