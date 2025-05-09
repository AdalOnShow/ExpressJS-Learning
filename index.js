const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`<h1>Hello, Home Page</h1>`)
})

app.get('/about', (req, res) => {
  res.send(`<h1>Hello, About Page</h1>`)
})

app.get('/contact', (req, res) => {
  res.send(`<h1>Hello, Contact Page</h1>`)
})

app.listen(4000, () => {
  console.log("The website is listening in PORT no: 4000")
})