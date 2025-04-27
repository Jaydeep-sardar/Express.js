import express from "express";
const app = express();

const cb1 =(req,res,next)=>{
    console.log("first callback");
    next()
};

const cb2 =(req,res,next)=>{
    console.log("second callback");
    next()
};

const cb3 =(req,res)=>{
    console.log("third callback");
    res.send ("array of callbacks");
};

app.get("/array-cb",[cb1,cb2,cb3]);
app.listen(8000, () => console.log("server up!"));
