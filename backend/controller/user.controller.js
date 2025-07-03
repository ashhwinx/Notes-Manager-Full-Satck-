const mongoose = require("mongoose")
const userModel = require("../model/user.model")
const userService = require("../services/user.services")

module.exports.userSignup = async (req,res)=>{
    try{
        const {fullName,email,password} = req.body;


        isAlreadyExsit = userModel.findOne({email})

        

        if(!isAlreadyExsit){
            return res.status(400).json({message:"user already exist"})
        }

        hasedPassword =  await userModel.hashPassword(password)

        const user = await userService.createUser({
            fullName,
            email,
            password:hasedPassword
        })

        token = user.generateAuthToken()

        res.status(200).json({token,user})

    } catch(error){
             return res.status(404).json({ message: "Server error", error: error.message });
    }
}


module.exports.login= async  (req,res)=>{
    try{
        const {email,password} = req.body

        user = await userModel.findOne({email}).select("+password")

        if(!user){
            return res.status(400).json({message:"invaild email"})
        }

        const comparePass = await user.comparePassword(password)

        if(!comparePass){
            return res.status(400).json({message:"invalid password"})
        }

        token = user.generateAuthToken()


        res.cookie("token",token)

        res.status(200).json({ token, user });
        

    }catch(error){
         return res.status(500).json({ message: "Server error", error: error.message });
    }
}