const mongoose = require('mongoose')

async function connectDb (){
    await mongoose.connect("mongodb://0.0.0.0/note-manager").then(()=>{
        console.log("connectedTo db")
    }).catch(err=>console.log(err))
}


module.exports = connectDb