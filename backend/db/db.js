const mongoose = require('mongoose')

const conectToDB = async ()=>{
        await mongoose.connect('mongodb://0.0.0.0/Notes').then(()=>{
            console.log("mongo connect")
        })
}

module.exports = conectToDB;