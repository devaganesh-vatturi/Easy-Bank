import React,{useState} from 'react'
import axios from 'axios';
export default function DeleteUser() {
  const [user, setUser] = useState({accno:0});
  const handleChange=(e)=>{
    e.preventDefault();
    const {name,value}=e.target;
    setUser({...user,[name]:value});
  }
  const handleSubmit=async(e)=>{
    console.log(user.accno);
    if(user.accno!=0)
    {
      try{
        const result=await axios.post("https://easybank-qgjy.onrender.com/bank/deleteuser",user);
        if(result.data.success)
        {
          alert("successfullt deleted!");
        }
      }
      catch(e)
      {
        console.log(e)
      }
    }
    else{
      alert("accno is not valid");
    }
  }
  return (
    <div>
      <p>Enter accno:</p>
      <input type="number" placeholder='Acc no' name="accno" onChange={handleChange}/>
      <p onClick={handleSubmit}>Submit</p>
      <p>{user.accno}</p>
    </div>
  )
}
