import React from 'react'
import { useNavigate } from 'react-router-dom'

function FormDisableComponent() {
  const navigate=useNavigate()
  return (
    <div >
       <button onClick={()=>{navigate("/")}} style={{background:"lightGray",margin:"1rem",borderRadius:"4px",padding:".5rem 1rem"}}>Go Back</button>
       <div style={{alignItems:"center",padding:"4rem"}} className='flex  justify-center align-center'>
         <h1 style={{color:"red",fontWeight:"bold"}}>Hey , you can not add another income till next month</h1>
       </div>
    </div>
  )
}

export default FormDisableComponent