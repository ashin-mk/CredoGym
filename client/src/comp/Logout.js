import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate=useNavigate()
    localStorage.setItem("Gymtoken","")
    
   useEffect(()=>{
    navigate("/login")
   },[])
  return (
    <div ></div>
  )
}

export default Logout