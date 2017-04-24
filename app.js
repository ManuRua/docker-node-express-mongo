'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express()
const port = process.env.PORT || 3000

const productCtrl = require('./controllers/product')

// BD Setup
mongoose.connect("mongodb://mongo:27017/shop", (err, res) => {
  if (err) {
      return console.log(`Error al conectar a la base de datos: ${err}`)
  }
  console.log('Conexión a la base de datos establecida')

  app.listen(port, () => {
    console.log(`API REST corriendo en el puerto ${port}!`);
  })
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/product', productCtrl.getProducts)
app.get('/api/product/:productId', productCtrl.getProduct)
app.post('/api/product', productCtrl.saveProduct)
app.put('/api/product/:productId', productCtrl.updateProduct)
app.delete('/api/product/:productId', productCtrl.deleteProduct)
