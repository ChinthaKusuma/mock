import express from "express"
import mysql from "mysql"
import cors from "cors"

const app=express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    port:'3306',
    password:'Kusuma@24',
    
    
    database:"react1",
    
})
app.get('/',(req,res)=>{
    const sql="select * from student";
    db.query(sql,(err,result)=>{
        if(err) return res.json({Message:"Error"})
        return res.json(result)
    })
})
app.post("/",(req,res)=>{
    const sql="Insert into student(id,name,year,email,mentorname)values(?)";
    const values=[
        req.body.id,
        req.body.name1,
        req.body.year,
        req.body.email,
        req.body.mentorname,
       
    ]
    db.query(sql,[values],(err,result)=>{
        if(err) return res.json({Message:"Error"})
        return res.json(result)
    })
})
app.listen(3000,()=>{
    console.log("listening")
})
