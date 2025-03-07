import React,{useState} from 'react'
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import '../Styles/Transfer.css'
export default function Transfer() {
  const [user, setUser] = useState({accno:0,taccno:0,amount:0});

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
      <Header/>
      <div className='transfer-main'>
     <p>Enter accno:</p>
      <input type="number" placeholder='Acc no' onChange={handleChange} name="accno" />
      <p>Enter accno you want to transfer:</p>
      <input type="number" placeholder='Acc no' onChange={handleChange} name="taccno" />
      <p>Enter amount:</p>
      <input type="number" placeholder='Balance' onChange={handleChange} name="amount" />
      <div className='transfer-sub-div'> 
      <p onClick={handleSubmit}  className='transfer-submit'>Submit</p>
      </div>
      </div>
      <Footer/>
    </div>
  )
}
