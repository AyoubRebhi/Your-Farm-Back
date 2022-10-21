const mongoose= require("mongoose");

//LigneVente Schema
const LigneVenteSchema = new mongoose.Schema({
    numeroArticle:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    },
    numeroVente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vente'
    },
    dateVente:{
        type:Date
    }
});

module.exports = mongoose.model("LigneVente", LigneVenteSchema);