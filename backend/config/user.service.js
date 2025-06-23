const userModel = require('../models/user.model')

module.exports.createUser=({username,email,password})=>{
    if(!username || !email || !password){
        throw new Error("All field are require");
    }
    const user =  userModel.create({
        username,
        email,
        password,
    })
    return user;
}