import express from 'express';
const router =express.Router()

router.get("/all",(req,res)=>{
    res.send("all teachers");
});
router.post("/create",(req,res)=>{
    res.send("add new teachers");
});
router.put("/update",(req,res)=>{
    res.send("update teachers");
});
router.delete("/delete",(req,res)=>{
    res.send("delete teachers");
});

export default router;