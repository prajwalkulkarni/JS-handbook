//NodeJS

const http = express('http')

http.createServer((req,res)=>{
  res.end('<h1>Hello world!')
})

http.listen(PORT_NO);


//NodeJS + express

const express = require('express')

const app = express()

app.use((req,res,next)=>{
  
  res.send('<h1>Hello, world!</h1>')
  next() //next() method to forward the request to the next middleware
})

app.listen(PORT_NO);

//nodemon is a dev dependency that helps in hot reloading.
