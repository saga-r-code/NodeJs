const express = require("express")
const path = require('path')
const app = express()
const port = 80

//Express Specific Stuff
app.use('/static', express.static('static'))//for the static file serve and show in text


//Pug Reated Stuff
app.set('view engine', 'pug')//set the templete engine for pug

app.set('views', path.join(__dirname, 'views'))//set the views directory


//Endpoint with pug example
app.get("/demo", (req, res)=>{
    res.status(200).render("demo", {title: "Hey I am Pug", message: "Hello broo i am pug bro"})//our pug demo
})

app.get("/", (req,res)=>{
    heading = "This is my first website using PUG"
    param = {"title": "PUG", "heading" : heading}
    res.status(200).render("index.pug", param)
})

//express Endpoint 
app.post("/", (req, res)=>{
    res.send("This is Home page of Express App ")
})
app.get("/about", (req, res)=>{
    res.status(300).send("This is about page of Express App ")
})
app.post("/about", (req, res)=>{
    res.status(200).send("This is post request of about page of Express App ")
})
app.get("/home", (req, res)=>{
    res.status(404).send("This page not found broo ")
})





app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})