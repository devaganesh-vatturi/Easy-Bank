import React,{useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Landingpage/Footer';
import '../../Styles/Transfer.css'
import InHeader from '../LoginsandModes/InHeader';
export default function Transfer() {
  const location=useLocation();
  const qp=new URLSearchParams(location.search);
  const accno=qp.get('accno');
  console.log(accno);
  const [user, setUser] = useState({accno:0,taccno:0,amount:0});
 
 useEffect(()=>{
  if(accno)
 {   
   setUser({accno:accno});

 }},[accno]);
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser({...user,[name]:value});
  }

  const handleSubmit = async(e)=>{
    if(user.accno !=0 && user.taccno !=0 && user.amount !=0)
    {
      try{
        const result= await axios.post("https://easybank-qgjy.onrender.com/bank/transfer",user);
        if(result.data.success)
        {
          alert(`successfully transfered new balance is ${result.data.balance}`)
        }
        else{
          alert("insufficient balance");
        }
      }
      catch(e)
      {
        console.log(e);
      }
    }
    else{
      console.log("invalid data");
    }
  }
  return (
    <div className='transfer'>
      <InHeader/>
      <div className='transfer-div'>
        <center className='transfer-p'>Transfer</center>
      <div className='transfer-main'>
     <p>Enter accno:</p>
      <input type="number" placeholder='Acc no' onChange={handleChange} name="accno" value={accno} />
      <p>Enter accno you want to transfer:</p>
      <input type="number" placeholder='Acc no' onChange={handleChange} name="taccno" />
      <p>Enter amount:</p>
      <input type="number" placeholder='Balance' onChange={handleChange} name="amount" />
     <center className="transfer-submit" onClick={handleSubmit}>Submit</center>
      </div>
      </div>
      <Footer/>
    </div>
  )
}
