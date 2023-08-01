const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
  "Job": {
    type: String,
    required: [true, "Job is obligatory"],
  },
  "Salary": {
    type: Number,
    required: [true, "Salary is obligatory"],
  },
  "Lenguages": {
    type: Array,
    required: [true, "Lenguages is obligatory"],
    validate: {
      // Se valida que se ingrese almenos un valor en Lenguages 
      validator: function (nuevo) {
        return nuevo && nuevo.length > 0;
      },
      // Caso contrario, se envía un mensaje de error
      message: "Lenguages is obligatory",
    }
  }
});

const Offer = mongoose.model("Offer", OfferSchema, "offers");
module.exports = Offer;
