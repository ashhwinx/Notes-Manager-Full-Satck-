const userModel = require("../models/user.model")
const userService = require("../config/user.service")
const {validationResult}=require('express-validator');



module.exports.registerUser = async (req,res,next)=>{
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        const {username,email,password}= req.body;

        const isUserAlready = await userModel.findOne({email})

        if(isUserAlready){
            return res.status(400).json({message: 'user already exist'});
        }

        const user = await userService.createUser({
            username,
            email,
            password
        })

    } catch(err){
        res.status(400).json({message:"invalid caredentials"})
    }
}