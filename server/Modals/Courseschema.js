const mongoose=require("mongoose")
const schema=mongoose.Schema({
    Course:String,
    Time:String,
    Slots:Number,
    Trainer:String
})
const Course=mongoose.model("courses",schema)
module.exports=Course