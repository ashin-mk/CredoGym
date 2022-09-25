import axios from 'axios'
import React, { useState } from 'react'
import UrlGEn from '../utility/UrlGen'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
const Login = () => {
    const [data,setdata]=useState({
        "Username":"",
        "Password":""
    })
    const navigate=useNavigate()
    const handleData=(e,id)=>{
        setdata({...data,[id]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(data.Password.length===0 || data.Username.length===0){
            alert("Please provide all details")

        }else{
            console.log(data) 
            axios.post(UrlGEn("Login"),data).then((res)=>{;localStorage.setItem("Gymtoken",res.data.token);navigate("/dashboard")})
            .catch(err=>console.log(err))  
        }
    }
  return (
    <div id='Login'>
        <h1 id='CredoGym'>Credo Gym</h1>
          <div id='cardlogin'><form>
      
        <div>
            <label>
                Username
            </label>
            <input type="text" id='Usernamelogin' onChange={(e)=>handleData(e,"Username")}/>
        </div>
        <div>
            <label>
               Password
            </label>
            <input type="password" id='Passwordlogin' onChange={(e)=>handleData(e,"Password")}/>
        </div>
        <button id='buttonlogin' onClick={handleSubmit}>
            Submit
        </button>
        </form>
        <div>
            Don't Have An Account<Link to="/">Sign up</Link>
        </div>
        </div>
        </div>
  )
}

export default Login