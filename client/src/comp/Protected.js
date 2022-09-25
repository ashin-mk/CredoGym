import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Protected = ({children}) => {
const token=localStorage.getItem("Gymtoken")
  return (
    <div>
        {token.length?children:<Navigate to="/login"/>}
    </div>
  )
}

export default Protected