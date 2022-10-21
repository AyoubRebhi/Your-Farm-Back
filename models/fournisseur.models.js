const mongoose= require("mongoose");

//Fournisseur Schema
const FournisseurSchema = new mongoose.Schema({
    nomFournisseur:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model("Fournisseur", FournisseurSchema);