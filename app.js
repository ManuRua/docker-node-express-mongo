'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express()
const port = process.env.PORT || 3000

// BD Setup
mongoose.connect("mongodb://mongo:27017")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/hola/:name', function(req, res){
  res.send({ message: `Hola ${req.params.name}!` })
})

app.listen(port, () => {
  console.log(`API REST corriendo en el puerto ${port}!`);
})
