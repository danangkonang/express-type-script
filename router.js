const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const controlerProduct = require('./controlers/products')
app.get('/', (req, res) => res.send('Hello danang!'))
app.get('/products',controlerProduct.index)
app.get('/product/:id_barang',controlerProduct.show)

module.exports = app;