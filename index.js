import express from "express";
const app = express();

//query string
app.get('/product',(req,res)=>{
    res.send(`response OK ${req.query.category}`);
});

app.listen(8000, () => console.log("server up!"));