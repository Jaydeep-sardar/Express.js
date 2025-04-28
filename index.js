import express from "express";
import products from "./products,js";
const app = express();

//sending json
app.get('/products',(req,res)=>{
    res.json(products)
})

app.listen(8000, () => console.log("server up!"));