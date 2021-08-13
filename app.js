const path = require('path')
const express = require('express')
const app = express()

app.listen(3000, ()=>{
    console.log("Todo en orden")
})

app.use(express.static(path.join(__dirname, "./public")));


app.get("/home", (req,res) =>{
    res.sendFile(path.join(__dirname, "./views/home.html"))
})
app.get("/register", (req,res) =>{
    res.sendFile(path.join(__dirname, "./views/register.html"))
})
app.get("/login", (req,res) =>{
    res.sendFile(path.join(__dirname, "./views/login.html"))
})