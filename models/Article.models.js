const mongoose= require("mongoose");

//Article Schema
const ArticleSchema= new mongoose.Schema({
    nomArticle:{
        type:String,
        required: true
    },
    qteArticle:{
        type:Number,
        required: true
    },
    priceArticle:{
        type:Number,
        required: true
    },
    categorieDuArticle:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categorie'
    }
});

module.exports = mongoose.model("Article",ArticleSchema);