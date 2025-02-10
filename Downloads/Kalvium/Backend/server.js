const express =require("espress");
require(dotenv)=configs();
const cors=require("cors");
const PORT=3030;

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("SingUp")
    
})
app.post("/",(req,res)=>{
    const{Username}=req.body;
    if(Username){
        return res.status(400).json({msg:"Username cannot be empty"})
    }
    const{Email}=req.body;
    if(Email){
        return res.status(400).json({msg:"Email cannot be empty"})
    }
    const{Password}=req.body;
    if(Password){
        return res.status(400).json({msg:"Password length shoud be greater than 8"})
    }
    const{Date_of_birth}=req.body;
    if(Date_of_Birth){
        return res.status(400).json({msg:"Dare_of_Birth cannot be empty"})
    }}

    ,app.listen(PORT,()=>{
        console.log(Sucessfully ,Connectedto3030)
    
    }))