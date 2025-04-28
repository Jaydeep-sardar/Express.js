import express from "express";
import path from 'path'
import products from "./products,js";
const app = express();

app.use(express.static())

app.get('/',(req,res)=>{
    res.sendFile(path.join(process.cwd(), "./public/index.html"));
});

//sending json
app.get('/products',(req,res)=>{
    res.json(products)
})

app.listen(8000, () => console.log("server up!"));