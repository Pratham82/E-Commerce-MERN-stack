import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'
dotenv.config()

const app = express()

app.get('/', (_, res) => res.send('Hello from express'))

app.get('/api/products', (_, res) => res.json(products))

app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id
  const product = products.find(p => p._id === productId)
  res.send(product)
})

app.listen(
  process.env.PORT || 5000,
  console.log(`App Running on PORT ${process.env.PORT}`)
)
