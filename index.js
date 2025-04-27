import express from "express";
const app = express();

// route using regex
app.get(/x/,(req,res) => {
    res.send("if the path includes the letter x it will work");
});

app.listen(8000, () => console.log("server up!"));
