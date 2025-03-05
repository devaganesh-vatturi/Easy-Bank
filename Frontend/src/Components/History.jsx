import React, {useState}from 'react';
import axios from 'axios';

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
        const result=await axios.post("http://localhost:5000/bank/history",user);
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
    <div>

      <p>Enter acc no</p>
      <input type="text" name="accno" onChange={handleChange} />
      <p onClick={handelSubmit}>Submit</p>

      {
        <>
         {
          history.map((item)=>{
            <li key={item._id}>{item.balance}</li>
          })
         }       
        </>
      }
    </div>
  )
}
