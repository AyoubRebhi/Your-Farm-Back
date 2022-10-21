//mongodb variables
const User= require("../models/user.models");

//unique string
const {v4: uuidv4 } = require('uuid');
//import section
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

//signup User
const signup=async (req,res)=>{
    console.log(req.body);
    let{nom,prenom,numero,email,password}=req.body;

    if( nom == "" || prenom == "" || numero =="" || email =="" || password ==""){
        res.json({
			status:"FAILED",
			message:"Empty input filds!"
		})
    }else if(password.length<8){
        res.json({
			status:"FAILED",
			message:"Password is too short!"
		})
    }else{
        
        User.find({email}).then(result =>{
            if(result.length){
                // a user already exist
                res.json({
                    status:"FAILED",
                    message:"User already exist!"
                })
            
            }else {

                //try to create new user
                const saltRounds=10;
                bcrypt
                    .hash(password, saltRounds)
                    .then(hashedPassword =>{
                        const newUser= new User({
                            nom,
                            prenom,
                            numero,
                            email,
                            password: hashedPassword
                        });
                        newUser
                            .save()
                            .then(
                               res.json({
                                    status: "Validate",
                                    message: "user is created!"
                               })
                            )
                            .catch(err=>{
                                console.log(err);
                                res.json({
									status:"FAILED",
									message:"An error occured while saving user account!"
								})
                            })
                    })
                    .catch(err=>{
                        console.log(err);
                        res.json({
                            status:"FAILED",
                            message:"An error occured while hashing password!"
                        })
                    })
            }
        }).catch(err=>{
            console.log(err);
            res.json({
                status:"FAILED",
                message:"An error occured while checking existing user!"
            })
        })
    }
} 
// login fonction
const login = async (req, res) => {
	let{email,password}=req.body;
	if(email==""||password==""){
		res.json({
			status:"FAILED",
			message:"Empty credentials supplied!"
		})
	}else{
		//check if user exist
		User.find({email})
		    .then((data) =>{
				if(data.length){
					//user exists
					const hashedPassword=data[0].password;
					bcrypt.compare(password,hashedPassword)
					    .then(result=>{
							if(result){
							    //password match
							    res.json({
								    status:"SUCCESS",
								    message:"Login successfully !",
								    data: data
							    })
								//////Edit AUTH gard
							}else{
								res.json({
									status:"FAILED",
									message:"Invalid password Entered!"
								})
							}
						})
						.catch(err=>{
							console.log(err);
							res.json({
								status:"FAILED",
								message:"An error occured while comparing passwords!"
							})
						})
				}else{
					res.json({
						status:"FAILED",
						message:"Invalid crendentials entered!"
					})
				}
			})
			.catch(err=>{
				console.log(err);
				res.json({
					status:"FAILED",
					message:"An error occured while checking exiting user!"
				})
			})
	}
};

module.exports.signup = signup;
module.exports.login = login;