import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import UrlGEn from '../utility/UrlGen'
import { Link, useNavigate } from 'react-router-dom'
import "./Signup.css"

const SIgnup = () => {
    const [data,setdata]=useState({
        "Name":"",
        "Mobile":Number,
        "Address":"",
        "Age":Number,
        "Username":"",
        "Password":"",
        "Usertype":""
    })
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(data.Username.length===0 || data.Password.length===0 ){
            alert("some details are missing")
        }
        else if(data.Name.length===0|| data.Usertype.length===0 ){
            alert("some details are missing")
        }else{
   console.log(data)
   axios.post(UrlGEn("Signup"),data).then((res)=>console.log(res),navigate("/login"))
   .catch(err=>console.log(err))
        } 
    }

    const handleData=(id,e)=>{
        setdata({...data,[id]:e.target.value})
    }

  return (
    <div id='Signup'>
        <h1 id='CredoGymS'>Credo Gym</h1>
        <div id='Cardsignup'>
<form>
    <div>
<label>Name</label>
<input type="text" id="Namesignup" onChange={(e)=>handleData("Name",e)}></input>
    </div>
    <div>
    <label>Mobile</label>
<input type="Number" id="Mobilesignup" onChange={(e)=>handleData("Mobile",e)}></input>
        </div>
        <div>
        <label>Address</label>
<input type="text" id="Addresssignup" onChange={(e)=>handleData("Address",e)}></input>
        </div>
        <div>
        <label>Age</label>
<input type="Number" id="Agesignup" onChange={(e)=>handleData("Number",e)}></input>
        </div>
        <div>
        <label>Username</label>
<input type="text" id="Usernamesignup" onChange={(e)=>handleData("Username",e)}></input>
        </div>
        <div>
        <label>Password</label>
<input type="Password" id="Passwordsignup" onChange={(e)=>handleData("Password",e)}></input>
        </div>
        
        <div>
        <label>User type</label>
<input type="radio" id="Trainersignup" name='USertype' value="Trainer" onClick={(e)=>handleData("Usertype",e)}>
</input>
<label>Trainer</label>
<input type="radio" id="Joinersignup" name='USertype' value="Joiner" onClick={(e)=>handleData("Usertype",e)}></input>
    <label>Joiner</label>
        </div>
        <button id='buttonsignup' type='submit' onClick={handleSubmit}>Submit</button>
</form>
<div style={{marginLeft:"75px",marginTop:"35px",marginBottom:"0px"}}>
    Already An User <Link to="/login">Login</Link>
</div>
    </div>
    </div>
  )
}

export default SIgnup