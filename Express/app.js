const express = require("express")

const app = express()
const port = 80

app.get("/", (req, res)=>{
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