import express from "express";
const app = express();

app.get("/products/iphone",(req,res)=>{
    res.send("this will work if u provide  /products/iphone");
});

app.listen(8000, () => console.log("server up!"));
