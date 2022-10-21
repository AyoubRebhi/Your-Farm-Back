const mongoose= require("mongoose");

//Categorie Schema
const CategorieSchema = new mongoose.Schema({
    nomCategorie:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model("Categorie", CategorieSchema);