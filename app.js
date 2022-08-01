const express = require('express')
const path = require('path')
const app = express()
const morgan = require('morgan')
require('dotenv').config()

const bookRoutes = require('./book/book.route')

app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('tiny'))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './assets/json/test.json'))
})

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>')
})

app.get('/me', (req, res) => {
  res.send({ name: 'Valentine Efagene', email: 'efagenevalentine@gmail.com' })
})

app.use('/books', bookRoutes)

app.all('*', (req, res) => {
  res.status(404).send('<h1>404</h1><h2>Resource Not Found</h2>')
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})