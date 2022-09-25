const mongoose=require("mongoose")
 const Userschema=mongoose.Schema({
    "Name":String,
    "Mobile":Number,
    "Address":String,
    "Age":Number,
    "Username":String,
    "Password":String,
    "Usertype":String,
    "Booked":String})
 const User=mongoose.model("users",Userschema)
 module.exports=User