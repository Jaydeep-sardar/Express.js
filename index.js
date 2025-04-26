import express from "express";
const app =express();

//advance routing
//string pattern path
app.get("/ab?cd",(req,res)=>{
    res.send("if user hit(acd) or (abcd) then this will run");
});

app.listen(8000,()=> console.log("server up!"));