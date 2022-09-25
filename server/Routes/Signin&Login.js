const express=require("express")
const bcrypt=require("bcrypt")
const JWT=require("jsonwebtoken")
const router=express.Router()
const User=require("../Modals/UserSchema")
const salt=10

router.post("/Signup",async(req,res)=>{
    const userexist=await User.find({Username:req.body.Username })
    if(userexist.length){
        res.status(400).send("User already exist")
    }else{
bcrypt.genSalt(salt,(salterr,saltval)=>{
    if(!salterr){
        bcrypt.hash(req.body.Password,saltval,(hasherr,hashval)=>{
            if(!hasherr){
User.create({
    Name:req.body.Name,
        Mobile:req.body.Mobile,
        Address:req.body.Address,
        Age:req.body.Age,
        Username:req.body.Username,
        Password:hashval,
        Usertype:req.body.Usertype,
        Booked:""
})
res.status(200).send("User created succesfully")}
        })
    }
})
    }

})

router.post("/Login",async(req,res)=>{
    const username=await User.find({Username:req.body.Username})
    if(username.length){
const password=await bcrypt.compare(req.body.Password,username[0].Password)
if(password){
const token=JWT.sign(req.body.Username,process.env.SECRET_KEY)
res.status(200).send({token:token})
}else{
    res.status(400).send("Invalid Password")
}
    }else{
        res.status(400).send("Invalid Username")
    }

})
module.exports=router