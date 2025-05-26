import React from 'react'
import '../../Styles/EmpInterface.css'
import InHeader from './InHeader'
export default function EmpInterface() {

   const gocreateuser=(e)=>{
    window.location.href='/createuser';
  }
  const godeleteuser=(e)=>{
    window.location.href='/checkbalance';
  }
  const godeposit=(e)=>{
    window.location.href='/deposit';
  }
  const gotransfer=(e)=>{
    window.location.href='/transfer';
  }
  const gowithdraw=(e)=>{
    window.location.href='/withdraw';
  }
  const gohistory=(e)=>{
    window.location.href='/history';
  }
  return (
    <div className='empin'>
      <InHeader/>
        <center className='empin-h1'>Employee Dashboard</center>
      <div className='empin-main'>
        <div className='empin-div' onClick={gocreateuser}>
          <div id="empin-hero">
            <p className='empin-hero-t1'>Add User</p>
            <p className='empin-hero-t2'>To create a new user</p>
            </div><div className='empin-img img1'></div>
        </div>
        <div className='empin-div' onClick={godeposit}>
           <div id="empin-hero">
            <p className='empin-hero-t1'>Deposit</p>
            <p className='empin-hero-t2'>To cresit amount in a user account</p>
            </div><div className='empin-img img2'></div>
        </div>
        <div className='empin-div' onClick={gowithdraw}>
           <div id="empin-hero">
            <p className='empin-hero-t1'>Withdraw</p>
            <p className='empin-hero-t2'>To debit amount in a user account</p>
            </div><div className='empin-img img3'></div>
        </div>
        <div className='empin-div' onClick={gotransfer}>
           <div id="empin-hero">
            <p className='empin-hero-t1'>Transfer</p>
            <p className='empin-hero-t2'>To transfer amount from one user to another</p>
            </div><div className='empin-img img4'></div>
          </div>
        <div className='empin-div' onClick={gohistory}>
           <div id="empin-hero">
            <p className='empin-hero-t1'>History</p>
            <p className='empin-hero-t2'>To print the user bank statement in pdf</p>
            </div><div className='empin-img img5'></div>
          </div>
        <div className='empin-div' onClick={godeleteuser}>
          <div id="empin-hero">
            <p className='empin-hero-t1'>Balance Enquire</p>
            <p className='empin-hero-t2'>To check balance of a user</p>
            </div> <div className='empin-img img6'></div>
          </div>

      </div>
      </div>
  )
}
