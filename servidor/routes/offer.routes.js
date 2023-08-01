const OfferController = require('../controllers/offer.controller');

module.exports = function(app) {
    app
    .post("/api/offer/new", OfferController.addOffer)
    .get("/api/offers", OfferController.getOffers)
    .get("/api/offer/:id", OfferController.getOfferId)
    .put("/api/offer/:id", OfferController.updateOffer)
    .delete("/api/offer/:id", OfferController.deleteOffer)
}