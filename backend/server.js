const dotenv= require("dotenv")
dotenv.config()
const express = require("express")
const app = express()
const conectToDB = require("./db/db")
conectToDB()
const userRoutes = require("./routes/user.routes")
const cors = require("cors")




const PORT =    process.env.PORT || 4000

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("etstststs")
})

app.use("/users", userRoutes)


app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON ${PORT}`)
})