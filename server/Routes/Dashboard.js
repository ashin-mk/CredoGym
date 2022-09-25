const express=require("express")
const router=express.Router()
const Course=require("../Modals/Courseschema")
const JWT=require("jsonwebtoken")
const Users=require("../Modals/UserSchema")

router.post("/addcouresfrompostman",async(req,res)=>{
//     await Course.create(req.body)
//     res.send("dooe")
//    console.log(req.body)
})

router.get("/dashboard",async(req,res)=>{
   // console.log("working")

    try {
    const username=JWT.verify(req.headers.token,process.env.SECRET_KEY)
    const user=await Users.find({Username:username})
    const booked=user[0].Booked
    const type=user[0].Usertype
    const data=await Course.find()
    res.status(200).send({data,username,booked,type})    
    } catch (error) {
        console.log("err")
        res.status(400).send(error)
    }
    
})

router.put("/bookslot",async(req,res)=>{
 try {
    const username= JWT.verify(req.headers.token,process.env.SECRET_KEY)
    const  user=await Users.find({Username:username})
    if(user[0].Booked.length){
        res.status(400).send("user already booked")
    }else{
        const course=await Course.find({_id:req.body.id})
        let count=course[0].Slots-1
        await Course.updateOne({_id:req.body.id},{Slots:count})
        await Users.updateOne({Username:username},{Booked:course[0].Course})
        res.status(200).send("updated successfully")
    }

 } catch (error) {
    res.status(400).send("unauthorized user")
 }

})
router.put("/selecttrainer",async(req,res)=>{
    try{
       const username= JWT.verify(req.headers.token,process.env.SECRET_KEY)
       await Course.updateOne({Course:req.body.course},{Trainer:username})
       res.status(200).send("done")
    }
    catch{
        res.status(400).send("err")
    }
})



module.exports=router