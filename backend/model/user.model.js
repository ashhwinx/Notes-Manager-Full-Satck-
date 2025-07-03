const mongoose  =  require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const userSchema  = new mongoose.Schema({
    fullName:{
        type:String,
        require:true,
        minlength: [2, "Fullname name must be at least 2 characters long"]
    },
     email:{
      type:String,
      require:true,
      unique:true,
      minlength:[5,'Email must be at least 5 characters long']
    },
    password:{
      type:String,
      require:true,
      minlength:[6,'password must be at least 6 characters long'],
      select:false,
    },
})


userSchema.methods.generateAuthToken=  function (){
  const token = jwt.sign({_id:this._id},process.env.JWT_SECRET)
  return token
}

userSchema.methods.comparePassword = async function(password){
      return await bcrypt.compare(password,this.password)
}

userSchema.statics.hashPassword = async function (password){
  return await bcrypt.hash(password,10)
}






const userModel = mongoose.model("users", userSchema)

module.exports = userModel