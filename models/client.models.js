const mongoose= require("mongoose");

//Client Schema
const ClientSchema = new mongoose.Schema({
    nomClient:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model("Client", ClientSchema);