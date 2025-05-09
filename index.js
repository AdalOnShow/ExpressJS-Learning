const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send("Hello, Home Page")
})

app.get('/about', (req, res) => {
  res.send("Hello, About Page")
})

app.get('/contact', (req, res) => {
  res.send("Hello, Contact Page")
})

app.listen(4000, () => {
  console.log("The website is listening in PORT no: 4000")
})