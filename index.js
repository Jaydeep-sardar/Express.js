import express from "express";
const app =express();

//adding basic routing
app.get('/',  (req,res) =>{
    res.send("home")
});

//more routes
app.get('/about',  (req,res) =>{
    res.send("<h1>ABOUT <h1>")
});

//adding contact route
app.get('/contact',  (req,res) =>{
    res.send("<h1>CONTACT<h1>")
});

app.listen(8000,()=> console.log("server up!"));