require("dotenv").config()
const cors = require("cors")
const passport = require("passport") 
const express = require("express")
require("./config/database")
const Router = require ("./routes/routes") 

const app = express()
const path = require ('path')

//Middlewares         = son servicios que utiliza nestra api para establecer diferentes comportamientos
app.use(cors())
app.use(express.json())   /* devuelve las respuestas en formato json   */
app.use(passport.initialize())
app.use('/api', Router)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) =>{
        res.sendFile(path.join(_dirname+'/client/build/index.html'))
    })
}


app.listen(PORT, HOST,()=>console.log("server ready on PORT" +PORT ))

