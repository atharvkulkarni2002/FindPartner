const express=require("express");
const mysql=require("mysql2");
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"#Atharv2002#",
    database:"loginsystem"
});

app.post('/createinfo',(req,res)=>{
    const userEmail=req.body.userEmail;
    const userPassword=req.body.userPassword;
    db.query("INSERT INTO user(Email,Password) VALUES(?,?)",
    [userEmail,userPassword],
    (err,resutl)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(resutl)
            res.send("value inserted")
        }
    });
});

app.listen(3001,()=>{
    console.log("running server");
});