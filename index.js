require('dotenv').config()
const express = require('express')
const app = express()

// may be ye port dusre ke device mein free naa ho
const port = 60000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter' , (req,res) => {
     res.send("hello from twitter")
})
app.get('/login' , (req,res) => {
    res.send("<h1>please login</h1>")
})
app.get('/youtube' , (req,res) => {
    res.send("<h1> heheh </h1>")
})

// HOT RELOADING 
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})