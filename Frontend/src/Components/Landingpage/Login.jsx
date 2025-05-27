import React,{useState} from 'react'
import '../../Styles/Login.css'
export default function Login() {
    
  const goAccholder =()=>{
  
     window.location.href='/accholderlogin';
  }
   const goEmployee =()=>{
      window.location.href='/employeelogin';
  }
  return (
    <div className='log'>
        <center className='log-txt'>Login</center>
        <div className='log-main'>
            <div className='log-usr'>
                <center className='log-usr-txt'>Account Holder</center>
                <div className='log-usr-img'></div>
                <p className='log-img-txt'>The Account Holders can access all services by loging in with mobile number</p>
                <p className='log-btn' onClick={goAccholder}>Click here</p>
            </div>
            <div className='log-emp'>
                <center className='log-emp-txt'>Bank Employee</center>
                 <div className='log-emp-img'></div>
                <p className='log-img-txt'>The Employees can use operations by logging in with their credientials</p>
                <p className='log-btn' onClick={goEmployee}>Click here</p>
            </div>
        </div>
    </div>
  )
}
