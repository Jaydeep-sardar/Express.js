import express from "express";
const app = express();

// route using regex
app.get(/^\/ab?cd$/, (req, res) => {
    res.send("if user hits (acd) or (abcd), this will run");
});

app.listen(8000, () => console.log("server up!"));
