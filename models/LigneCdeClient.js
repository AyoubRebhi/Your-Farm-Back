const mongoose= require("mongoose");

//LigneCdeClient Schema
const LigneCdeClientSchema = new mongoose.Schema({
    numeroArticle:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    },
    numeroCommandeC:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CommandeClient'
    },
    dateCdeC:{
        type: Date
    }
});

module.exports = mongoose.model("LigneCdeClient", LigneCdeClientSchema);