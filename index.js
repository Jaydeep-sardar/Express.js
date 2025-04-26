import express from "express";
const app =express();

//adding basic routing
app.get('/',  (req,res) =>{
    res.send("home")
});

app.listen(8000,()=> console.log("server up!"));