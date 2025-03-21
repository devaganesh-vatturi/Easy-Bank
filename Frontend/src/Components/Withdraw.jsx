import React,{useState} from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import '../Styles/Withdraw.css'
export default function Withdraw() {
  const [user, setUser] = useState({accno:0,amount:0});
  const handleChange=(e)=>{
    e.preventDefault();
    const {name,value}=e.target;
    setUser({...user,[name]:value});
  }
  const handleSubmit =async(e)=>{
    console.log(user);
    if(user.accno!=0 && user.amount !=0)
    {
      try{
        const result=await axios.post("https://easybank-qgjy.onrender.com/bank/withdraw",user);
        if(result.data.success)
        {
          alert(`successfully debited new balance is ${result.data.balance}`)
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
      alert("invalid data");
    }
  }
  return (
    <div className='wdraw'>
      <Header/>
      <div className='wdraw-main'>
      <p>Enter accno:</p>
      <input type="number" placeholder='Acc no' onChange={handleChange} name="accno" />
      <p>Enter amount:</p>
      <input type="number" placeholder='Amount' onChange={handleChange} name="amount" />
      <div className='wdraw-sub-div'>
      <p onClick={handleSubmit} className='wdraw-submit'>Submit</p>
      </div>
      </div>
      <Footer/>
      </div>
  )
}
