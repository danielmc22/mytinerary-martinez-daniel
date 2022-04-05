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
    likes: { type:Array, required: false },
    cityId: {type: mongoose.Schema.Types.ObjectId, ref: 'cities'},
    comments:[{
         comment: {type: String},
         userID: {type:mongoose.Types.ObjectId, ref:"users"},
  }],

  });

  const Itinerarios = mongoose.model("itinerarios", itinerariosSchema);
  module.exports = Itinerarios;