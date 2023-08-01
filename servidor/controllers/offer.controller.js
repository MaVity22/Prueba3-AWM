const Offer = require("../models/offer.model");

module.exports.addOffer = (req, res) => {
  const { Job, Salary, Lenguages } = req.body;
  Offer.findOne({ Job: Job, Salary: Salary })
    .then((offer) => {
      // Se valida que la oferta no exista en la BDD
      if (offer) {
        res.status(400).json({ message: "Offer already exists" });
      }
      else {
        // Si el valor de salario ingresado es menor a 450
        if (Salary < 450) {
          // Se envia un mensaje de error
          res.status(400).json({ message: "Min salary is 450 USD" });
        }
        else {
          // Caso contrario, se agregará la nueva offerta
          Offer.create({
            "Job": Job,
            "Salary": Salary,
            "Lenguages": Lenguages,
          })
            .then((offer) => {
              res.json(offer);
            })
            .catch((err) => {
              res.status(400).json(err);
            });
        }
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.getOffers = (req, res) => {
  Offer.find({}).sort({ "Job": 1, "Salary": 1 })
    .then((offer) => {
      res.json(offer);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.getOfferId = (req, res) => {
  Offer.findOne({ _id: req.params.id })
    .then((offer) => {
      res.json(offer);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.updateOffer = (req, res) => {
  Offer.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((offer) => {
      res.json(offer);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.deleteOffer = (req, res) => {
  Offer.deleteOne({ _id: req.params.id })
    .then((offer) => {
      res.json(offer);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
