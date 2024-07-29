const express = require("express")
const path = require('path')
const fs = require('fs')

const app = express()
const port = 80

//Express Specific Stuff
app.use('/static', express.static('static'))//for the static file serve and show in text
app.use(express.urlencoded({extended: true}))  //Middleware to parse URL-encoded data

//Pug Reated Stuff
app.set('view engine', 'pug')//set the templete engine for pug

app.set('views', path.join(__dirname, 'views'))//set the views directory


//Endpoint with pug example
app.get("/demo", (req, res)=>{
    //our pug demo
    res.status(200).render("demo", {title: "Hey I am Pug", message: "Hello broo i am pug bro"})
})

app.get("/", (req,res)=>{
    const heading = "Get This Gym MemberShip for 60$ -Fill this form now!"
    const param = {"title": "PUG", "heading" : heading}
    res.status(200).render("index.pug", param)
})

app.post('/', (req, res)=>{
    const object={
     user : req.body.name,
     age : req.body.age,
     gender : req.body.gender,
     address : req.body.address,
     details : req.body.moreDetails,
    }

    const userDetails = JSON.stringify(object)

    fs.writeFileSync('output.json', userDetails)
    res.status(200).send("form submit successfully")
    const param = {'message': 'Your Form Submited Successfully'}
    res.status(200).render("index.pug", param)
})

//express Endpoint 
app.get("/", (req, res)=>{
    res.send("This is Home page of Express App ")
})
app.get("/about", (req, res)=>{
    res.status(300).send("This is about page of Express App  and use in pug")
})
app.post("/", (req, res)=>{
    res.status(200).send("This is post request of about page of Express App ")
})
app.get("/help", (req, res)=>{
    res.status(404).send("This page not found broo ")
})





// app.listen(port, ()=>{
//     console.log(`Server is running on port ${port}`)
// })

app.listen(port, () => console.log(`server is running on ${port}`))