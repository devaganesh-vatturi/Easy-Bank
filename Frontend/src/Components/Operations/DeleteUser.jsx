import React,{useState} from 'react'
import axios from 'axios';
import Header from '../Landingpage/Header';
import Footer from '../Landingpage/Footer';
import '../../Styles/DeleteUser.css'
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
    <div  className='delete'>
      <Header/>
      <div className='delete-main'>
      <p>Enter accno:</p>
      <input type="number" placeholder='Acc no' name="accno" onChange={handleChange}/>
      <div className='delete-sub-div'>
      <p onClick={handleSubmit} className='delete-submit'>Submit</p>
      </div>
      </div>
      <Footer/>
    </div>
  )
}
