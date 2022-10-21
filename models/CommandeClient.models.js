const mongoose= require("mongoose");

//CommandeClient Schema
const CommandeClientSchema = new mongoose.Schema({
    numeroCommandeClient:{
        type:String,
        required: true
    },
    commandeClientNumero:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }
});

module.exports = mongoose.model("CommandeClient", CommandeClientSchema);