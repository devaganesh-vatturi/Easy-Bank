import React,{useState} from 'react';
import axios from 'axios';
import Footer from '../Landingpage/Footer';
import '../../Styles/Deposit.css'
import InHeader from '../LoginsandModes/InHeader';
export default function Deposit() {
  const [user, setUser] = useState({accno:0,amount:0});
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser({...user,[name]:value});
  }
  const handleSubmit =async(e)=>{
    if( user.accno!=0 && user.amount !=0)
    {
      try{
        const result=await axios.post("https://easybank-qgjy.onrender.com/bank/deposit",user);
        if(result.data.success)
        {
          alert(`successfully deposited new balance is ${result.data.balance}`);
        }
      }
      catch(e)
      {
        console.log(e);
      }
    }
    else{
      alert("invalid data");
    }
  }
  return (
    <div className='deposit'>
      <InHeader/>
      <center className='deposit-head-txt'>Deposit</center>
     <div className='deposit-div'>
      <div className='deposit-main'>
      <p>Enter accno:</p>
      <input type="number" placeholder='Acc no' onChange={handleChange} name="accno"/>
      <p>Enter amount:</p>
      <input type="number" placeholder='Amount'onChange={handleChange} name="amount"/>
      <center className="deposit-submit" onClick={handleSubmit}>Submit</center>
      </div>
      </div>
      <Footer/>
    </div>
  )
}
