const mongoose= require("mongoose");

//CommandeFournisseur Schema
const CommandeFournisseurSchema = new mongoose.Schema({
    numeroCommandeFournisseur:{
        type:String,
        required: true
    },
    commandeFournisseurNumero:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fournisseur'
    }
});

module.exports = mongoose.model("CommandeFournisseur", CommandeFournisseurSchema);