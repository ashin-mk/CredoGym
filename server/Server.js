const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const Users=require("./Routes/Signin&Login")
const courses=require("./Routes/Dashboard")
const app=express()
const cors=require("cors")

///body parser middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
//process.env.PORT ||
app.listen(process.env.PORT ||3001,(err)=>{
    if(!err){
console.log("Server start running")
    }else{
        console.log("err running in server")
    }
})
//mongodb://localhost/Gym
const db="mongodb+srv://Ashindeedu:ashin123@ashinmk.rxye7.mongodb.net/CredoGym?retryWrites=true&w=majority"
mongoose.connect(db,()=>{
    console.log("connected to db")
},()=>console.log("err connecting in db"))

app.get("/",(req,res)=>{
    res.send("Backend")
})

app.use("/",Users)
app.use("/",courses)

