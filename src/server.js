const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routers/routes')
const conectToDatabase = require('../dataBase')
const cors = require('cors')

require("dotenv").config()
conectToDatabase()

const port = 3030
const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port} ✅`)
})