import express from "express";
const app = express();

app.get("/student",(req,res)=>{
    res.send("all students");
});
//for running after first code block ,we need to install postman
app.post("/student",(req,res)=>{
    res.send("add new students");
});
app.put("/student",(req,res)=>{
    res.send("update students");
});
app.delete("/student",(req,res)=>{
    res.send("delete students");
});

app.listen(8000, () => console.log("server up!"));
