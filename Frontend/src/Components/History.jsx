import React, {useState}from 'react';
import axios from 'axios';
import PrintList from './PrintList';
import Header from './Header';
import Footer from './Footer';
import '../Styles/History.css'
export default function History() {
  const [user, setUser] = useState({accno:0});
  const [history, setHistory] = useState([]);
  const handleChange=(e)=>{
    e.preventDefault();
    const {name,value}=e.target;
    setUser({...user,[name]:value});
  }
  const handelSubmit =async(e)=>{
    if(user.accno!=0)
    {
      try{
        const result=await axios.post("https://easybank-qgjy.onrender.com/bank/history",user);
        if(result.data.success)
        {
            setHistory(result.data.history);
            console.log(result.data.history)
        }
        else{
          console.log("invalid accno");
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
    <div className='history'>
      <Header/>
      <div className='history-main'>
      <p>Enter acc no</p>
      <input type="text" name="accno" onChange={handleChange} />
      <div className='history-sub-div'>
      <p onClick={handelSubmit} className='history-submit'>Submit</p>
      </div>
       
      
      </div>
      <div className='history-hero'>
         {history.length > 0 ?( history.map((obj,index)=>(
           <PrintList accno={obj.accno} amount={obj.amount}balance={obj.balance} description={obj.description}
           type={obj.type} time={obj.time}/>
          ))):(<p>no transaction exists</p>)
        }
        </div>
      <Footer/>
    </div>
  )
}
