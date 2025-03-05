import React,{useState} from 'react';
import axios from 'axios';

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
        const result=await axios.post("http://localhost:5000/bank/withdraw",user);
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
    <div>
      
      <p>Enter accno:</p>
      <input type="number" placeholder='Acc no' onChange={handleChange} name="accno" />
      <p>Enter amount:</p>
      <input type="number" placeholder='Amount' onChange={handleChange} name="amount" />
      <p onClick={handleSubmit}>Submit</p>
      </div>
  )
}
