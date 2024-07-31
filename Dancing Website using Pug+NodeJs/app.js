const express = require('express')
const path = require('path')

const app = express()
const port = 80

//Express Specific Stuff
app.use('/static', express.static('static'))
app.use(express.urlencoded({extends: true})) // //Middleware to parse URL-encoded data

//PUG Specific Stuff
app.set('view engine', 'pug')//set the templete engine for pug
app.set('views', path.join(__dirname, 'views'))//set the views directory

//ENDPOINT
app.get('/', (req, res)=>{
    const param = {}
    res.status(200).render('index.pug', param)
})

///START SERVER 
app.listen(port, (req, res)=>{
    console.log(`The application is running on localhost at ${port}`)
})
