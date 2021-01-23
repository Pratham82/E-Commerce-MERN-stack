import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'
import connectDB from './config/db.js'
import colors from 'colors'
dotenv.config()

connectDB()
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
  console.log(`Server Running on PORT ${process.env.PORT}`.yellow.bold)
)
