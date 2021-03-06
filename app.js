const path = require('path')
const express = require('express')
const app = express()
/* En caso de que exista la variable PORT, que se utilice esa, 
en caso contrario, que utilice el localhost:3000 */
app.listen(process.env.PORT || 3000, ()=>{
    console.log("Todo en orden")
})
app.use(express.static(path.join(__dirname, "./public")));


app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "./views/home.html"))
})
app.get("/register", (req,res) =>{
    res.sendFile(path.join(__dirname, "./views/register.html"))
})
app.get("/login", (req,res) =>{
    res.sendFile(path.join(__dirname, "./views/login.html"))
})