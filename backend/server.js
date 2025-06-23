const express = require('express')
const app = express()
const connectDb = require("./config/db")
connectDb()
const userRoutes = require("./routes/user.routes")

app.get('/',(req,res)=>{
    res.send("hellloooo")
})    

app.use('/users', userRoutes)
app.listen(3000,()=>{
    console.log("connected")
})