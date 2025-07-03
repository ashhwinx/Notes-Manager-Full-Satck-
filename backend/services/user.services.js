const userModel = require("../model/user.model")


module.exports.createUser = async ({fullName,email,password}) =>{
    if(!fullName || !email ||!password){
        throw new Error("All field are Req")
    }

    const user = userModel.create({
        fullName,
        email,
        password
    })

    return user 

}
