const { default: mongoose } = require("mongoose")
const mongoosev =require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        select:false
    }
}) 

const userModel = mongoose.model("user",userSchema)

module.exports = userModel