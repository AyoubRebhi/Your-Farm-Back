const mongoose = require("mongoose");

//user schema
const UserSchema= new mongoose.Schema({
    nom:{
        type: String,
        required: true,
        lowercase: true
    },
    prenom:{
        type: String,
        required: true,
        lowercase: true
    },
    numero:{
        type: String,
        required: false,
        length: 8,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        index: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        maxlength: 200,
        minlength: 8,
    },
    
},
{
    timestamps: true
}

);

module.exports=mongoose.model("User",UserSchema);