const mongoose= require("mongoose");

//LigneCdeFournisseur Schema
const LigneCdeFournisseurSchema = new mongoose.Schema({
    numeroArticle:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    },
    numeroCommandeF:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CommandeFournisseur'
    },
    dateCdeF:{
        type: Date
    }
});

module.exports = mongoose.model("LigneCdeFournisseur", LigneCdeFournisseurSchema);