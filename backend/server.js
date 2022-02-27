require("dotenv").config()
const cors = require("cors")
const express = require("express")
require("./config/database")
const Router = require ("./routes/routes")  
const PORT = 4000

const app = express()

//Middlewares         = son servicios que utiliza nestra api para establecer diferentes comportamientos
app.use(cors())
app.use(express.json())   /* devuelve las respuestas en formato json   */
app.use('/api', Router)


app.listen(PORT,()=>console.log("server ready on PORT" +PORT ))
