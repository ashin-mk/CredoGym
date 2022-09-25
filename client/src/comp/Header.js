import React from 'react'
import {useNavigate} from 'react-router-dom'
import "./Header.css"
const Header = () => {
    const navigate=useNavigate()
    const handleLogout=()=>{
        alert("Click ok to Logout")
        navigate("/logout")
    }
  return (
    <div id='Header'>
        <div>
            Credo GYM
        </div>
        <button onClick={handleLogout}>
            Logout
        </button>

    </div>
  )
}

export default Header