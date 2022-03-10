const mongoose = require("mongoose");


const itinerariosSchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    userName: { type: String, required: true },
    imageUser: { type: String, required: false },
    hours: { type: String, required: true },
    price: { type: String, required: true },
    activities: { type: String, required: true },
    hashtags: [{ type: String, required: false }],
    comments: [{ type: String, required: true }],
    cityId: {type: mongoose.Schema.Types.ObjectId, ref: 'cities'}  
  });

  const Itinerarios = mongoose.model("itinerarios", itinerariosSchema);
  module.exports = Itinerarios;