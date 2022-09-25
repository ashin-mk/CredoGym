import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UrlGEn from '../utility/UrlGen'
import "./dashboard.css"
import Header from './Header'

const Dashboard = () => {
  const [data,setdata]=useState()
  const token=localStorage.getItem("Gymtoken")
  useEffect(()=>{
    axios({
      method:"GET",
      url:UrlGEn('dashboard'),
      headers:{
Token:token
      },
    }).then((res)=>{setdata(res.data)})
    .catch(err=>console.log(err,"err"))
  },[])
  const handleBook=(e)=>{
  //console.log(data[e.target.value])
  axios({
    method:"PUT",
    url:UrlGEn("bookslot"),
    headers:{
      Token:token
    },
    data:{
      id:data.data[e.target.value]._id
    }
  }).then((res)=>window.location.reload(false)).catch((err)=>console.log(err))
  }
const handletrainer=(e)=>{
  let j=e.target.value
  if(data.data[j].Trainer===data.username){
    alert("You are already selected")
    return
  }else{
axios({
  method:"PUT",
  url:UrlGEn("selecttrainer"),
  headers:{
Token:token
  },
  data:{
course:data.data[j].Course
  }
}).then((res)=>window.location.reload(false))
  }
}
  return (
    < div id='Dashboardpage'>
    <Header/>
    <div className='dashboard'>
      {data && data.data.map((val,i)=>{
        
        return(
         
<div className='card' key={i}> 
        <h1>{val.Course}</h1>
        <div className='card-details'>
        <img className='img' src={val.Course+".jpg"}/>
        <div>
        <p>Time</p>
        <p>{val.Time}</p>
        </div>
        <div>
<p>Booked Slots</p>
<p>{30-val.Slots}</p>
        </div>
        <div>
          <p>Available Slots</p>
          <p>{val.Slots}</p>
        </div>
        <div style={data.type==="Trainer"?{display:"none"}:null}>
          <p >Trainer</p>
          <p>{val.Trainer}</p>
        </div>
        
        
        
        
        <div style={data.type==="Joiner"?{width:"100px"}:{display:"none"}}> <button style={val.Slots===0?{display:"none"}:null} value={i} onClick={(e)=>{data.booked===""?handleBook(e):alert("user is already booked in "+data.booked)}}>bookslot</button></div> 
        <div style={data.type==="Joiner"?{display:"none"}:null}><button value={i} onClick={handletrainer}>Select</button></div>
        </div>
        </div>
        )})}   
    
    </div>
    {!data &&
    <div id='loading'>
      Loading...</div>}
    </div>
  )
}

export default Dashboard