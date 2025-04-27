import express from "express";
const app = express();
//route params
app.get('/student/delete/:id',(req,res)=>{
    res.send(req.params.id);
});
app.get('/ecom/products/iphone/:model',(req,res)=>{
    res.send("iphone" ,req.params.model);
});

app.listen(8000, () => console.log("server up!"));