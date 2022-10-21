const mongoose= require("mongoose");

//CommandeClient Schema
const CommandeClientSchema = new mongoose.Schema({
    numeromCommandeClient:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model("CommandeClient", CommandeClientSchema);