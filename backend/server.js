const express = require('express')
const products = require('./data/products')
const app = express()

app.get('/', (_, res) => res.send('Hello from express'))

app.get('/products', (_, res) => res.json(products))

app.get('/products/:id', (req, res) => {
  const productId = req.params.id
  const product = products.find(p => p._id === productId)
  console.log(product)
  res.send(product)
})

app.listen(5000, console.log(`App Running on PORT 5000`))
