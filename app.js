const express = require ('express')
const { mongoConn } = require('./databases/configuration')
const dotenv = require('dotenv').config()

mongoConn()

const app = express()

app.use(express.json())

const test = require('./routes/test')
const genero = require('./routes/genero')

app.use('/api/v1/tests', test)
app.use('/api/v1/generos', genero)


module.exports = app

