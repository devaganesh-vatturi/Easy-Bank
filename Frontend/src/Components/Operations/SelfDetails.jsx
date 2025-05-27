import React, { useEffect, useState } from 'react'
import InHeader from '../LoginsandModes/InHeader'
import { useLocation, useSearchParams } from 'react-router-dom';
import '../../Styles/SelfDetails.css';
import axios from 'axios';
import Footer from '../Landingpage/Footer';
export default function SelfDetails() {
    const location= useLocation();
    const qp= new URLSearchParams(location.search);
    const accno=qp.get('accno');
    const [user,Setuser]= useState(null);
    console.log(accno);
    useEffect(()=>{

        const fetch = async()=>{    
        if(accno)
        {
            const response= await axios.post('https://easybank-qgjy.onrender.com/bank/selfdetails',{accno: Number(accno)});
            if(response.data.success)
            {
                 Setuser(response.data.data);
                 console.log(response.data.data);
            }
           
        }
    }; 
    fetch();},
    [accno]);

    if(!user)
    {
      return <p>Loading {accno} details .....</p>
    }
  return (
    < div className='self'>
    <InHeader/>
    <center className='self-head-p'>Self Details</center>
    <div className='self-div'>
    <div className='self-main'>
     <p className='self-p'>
     <span className='self-label'>Name:</span>
     <span className='self-value'>{user.name}</span></p>
     <p className='self-p'>
        <span className='self-label'>Acc No:</span>
        <span className='self-value'>{user.accno}</span></p>
     <p className='self-p'>
        <span className='self-label'>Ph No:</span>
        <span className='self-value'>{user.phno}</span></p>
     <p className='self-p'>
        <span className='self-label'>Current Balance:</span>
        <span className='self-value'>{user.balance}</span></p>
     <p className='self-p'>
        <span className='self-label'>Address:</span>
        <span className='self-value'> {user.address}</span></p>
    </div>
    
    </div>
     <Footer/>
    </div>
  )
}
