import React from 'react'
import InHeader from './InHeader';
import { useLocation } from 'react-router-dom';
import '../../Styles/AccHolderInterface.css'
import Login from '../Landingpage/Login';
export default function AccHolderInterface() {
  const location=useLocation();
  const qp=new URLSearchParams(location.search);
  const accno=qp.get('accno');
  console.log(accno);
  
  const gotransfer=(e)=>{
    window.location.href=`/transfer?accno=${accno}`;
  }
  const gohistory=(e)=>{
    window.location.href=`/history?accno=${accno}`;
  }
  const gobalance=(e)=>{
     window.location.href=`/checkbalance?accno=${accno}`;
  }
  const goself=(e)=>{
    window.location.href=`/selfdetails?accno=${accno}`;
  }
  return (
    <div className='accin'>
      <InHeader/>
        <center className='accin-h1'>Account Holder Dashboard</center>
      <div className='accin-main'>
        <div className='accin-div' onClick={gotransfer}>
           <div id="accin-hero">
            <p className='accin-hero-t1'>Transfer</p>
            <p className='accin-hero-t2'>To transfer amount from one user to another</p>
            </div><div className='accin-img aimg4'></div>
          </div>
        <div className='accin-div' onClick={gohistory}>
           <div id="accin-hero">
            <p className='accin-hero-t1'>History</p>
            <p className='accin-hero-t2'>To print the user bank statement in pdf</p>
            </div><div className='accin-img aimg5'></div>
          </div>
        <div className='accin-div' onClick={gobalance}>
          <div id="accin-hero">
            <p className='accin-hero-t1'>Balance Enquire</p>
            <p className='accin-hero-t2'>To check balance of a user</p>
            </div> <div className='accin-img aimg6'></div>
          </div>
            <div className='accin-div' onClick={goself}>
          <div id="accin-hero">
            <p className='accin-hero-t1'>Self Details</p>
            <p className='accin-hero-t2'>To check complete details of user</p>
            </div> <div className='accin-img aimg1'></div>
          </div>

      </div>
      </div>
  )
}
