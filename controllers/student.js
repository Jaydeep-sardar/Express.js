import express from 'express'

const allStudents=(req,res)=>res.send("all students");
const newStudents =(req,res)=>res.send("add new students");
const updateStudent =(req,res)=>res.send("update students");
const deleteStudent=(req,res)=>res.send("delete students");

export{ allStudents,newStudents,updateStudent,deleteStudent};