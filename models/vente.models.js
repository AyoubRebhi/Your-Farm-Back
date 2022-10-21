const mongoose= require("mongoose");

//Vente Schema
const VenteSchema = new mongoose.Schema({
    nomVente:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model("Vente", VenteSchema);