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

app.get('/api/product', (req, res) => {
  
})

app.get('/api/product/:productId', (req, res) => {

})

app.post('/api/product', (req, res) => {

})

app.put('/api/product/:productId', (req, res) => {

})

app.delete('/api/product/:productId', (req, res) => {

})

app.listen(port, () => {
  console.log(`API REST corriendo en el puerto ${port}!`);
})
