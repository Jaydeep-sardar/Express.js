import express from "express";
import students from "./routes/student.js";
import teachers from "./routes/teacher.js"
const app = express();

app.use("/teachers",teachers);
app.use ("/students",students);
app.listen(8000, () => console.log("server up!"));