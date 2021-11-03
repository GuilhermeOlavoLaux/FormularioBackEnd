const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routers/routes')
const conectToDatabase = require('../dataBase')
require("dotenv").config()
conectToDatabase()

const app = express()
const port = 3030

app.use(express.json())
app.use(routes)



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port} ✅`)
})