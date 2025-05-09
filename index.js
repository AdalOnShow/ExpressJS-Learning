const express = require('express')
const fs = require('fs')

const app = express()

app.get('/', (req, res) => {
  fs.readFile('./pages/index.html', (err, data) => {
    if (err) {
      console.log("Error:", err)
      res.send("<h1>Something went wrong</h1>")
    } else {
      res.write(data)
      res.end()
    }
  })
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